---
title: 📄 授業「コンパイラ」最終レポート write-up
date: 2020-01-07
tags: [授業, コンパイラ]
---

## これは何
弊学科の授業「コンパイラ」でC言語のサブセット的な言語 `cmm` のコンパイラが配布されそのコンパイラを拡張するレポートが最終レポートとして出されました。本エントリはその最終レポートの実装例を解説する内容です。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">コンパイラの実装の最終レポート色んな人から無限に質問されるので解説記事書くことにした</p>&mdash; かまちょ (@wkmxrp) <a href="https://twitter.com/wkmxrp/status/1217782237493522434?ref_src=twsrc%5Etfw">January 16, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## 対象
- 弊学科で「コンパイラ」を履修していて教えてくれと言ってきた人たち(数人)

## 課題

- [剰余演算子](#剰余演算子)
- [累乗演算子](#累乗演算子)
- [for文](#for文)
- [goto文・label文](#goto文・label文)
- [case文](#case文)
- [配列](#配列)
- [条件演算子](#条件演算子)
- [インクリメント・デクリメント](#インクリメント・デクリメント)

## リポジトリ
今回の実装リポジトリはこちらになります。(MIT License)

<a href="https://github.com/wakame-tech/cmmc"><img src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/wakame-tech/cmmc.png" width="460px"></a> 

### ディレクトリ構成
```
├── compiler // cmm compiler src
├── examples // cmm, pl0 examples
├── report // mid report
├── test // test scripts
└── vm // pl0 vm src
```

このようなディレクトリ構成となっており ディレクトリ名は `cmm -> compiler`、 `pl0i_src -> vm` と対応します。

## 環境
```
$ lex -V
flex 2.5.35 Apple(flex-31)

$ yacc -V
bison (GNU Bison) 2.3
Written by Robert Corbett and Richard Stallman.

$ gcc -v
Apple LLVM version 10.0.1 (clang-1001.0.46.4)
```

一応載せておきます。大学のLinuxマシンとは環境が違うので

## はじめに
今回扱う言語は`cmm` というC言語のサブセット的な言語でコンパイラによって `pl0` というアセンブリ言語のようなものに変換されます。  
変換された `pl0` コードは `pl0` インタプリタによって実行されます。(いわゆるVM) 今回の課題ではこのコンパイラとインタプリタを改変することで `cmm` 言語の拡張をしようというのがレポートの主旨です。  

## コンパイラ拡張の流れ
次にコンパイラの拡張の流れについて説明します。授業で聞いたと思いますが、コンパイルの流れとして大まかに

- 字句解析(`.lファイル`)
- 構文解析(`.yファイル`)
- コード生成

という流れで `pl0` が生成されるので基本は `.lファイル` と `.y ファイル`をいじっていけば出来ると想います。  
授業で配布されたソースコードには予めコード生成をするための関数などが備わっており、ほとんどの課題はそれを利用して表面的に書き換えれば出来ると思います(`.y` ファイルを書き換えるだけという意)。  
よく使う関数 `mergecode()`, `makecode()` について2項を足し算する構文を例にとって説明します。

#### yファイル
```c
expr
    : ...
    | expr PLUS expr {
        $$.code = mergecode(
            mergecode($1.code, $3.code),
            makecode(O_OPR, 0, 2)
        );
    }
```

ここでは `expr PLUS expr` が構文にあたり、`$1.code` と `$3.code` に右辺と左辺の情報が入っています。ちなみに`$1.code`、 `$3.code` は `cptr*` 型で命令のリストとなっています。

```c
typedef struct CODE {
  struct CODE *next;
  int f, l, a;
} code;

typedef struct CPTR {
  code *h;
  code *t;
} cptr;
```

`struct CODE` が `pl0` の命令と一対一対応する感じです。

### cptr* makecode(int f, int l, int a)
`makecode()` は `pl0` の１行分を作るための関数と言えます。例えば `+` は `O_OPR` の `2` というオペコードなので `makecode(O_OPR, 0, 2)` となります。

### cptr* mergecode(cptr* c1, cptr* c2)
`mergecode()` は名前の通り２つの命令リストをつなげるための関数と言えます。  

これらの関数を使って2項の足し算をするコードを生成するには **左辺** のコードを生成して, 次に **右辺** のコードのを生成して最後に `+` にあたるコードを生成すればいいので,

1. `$1` と `$3` を `mergecode`
2. `+` を `makecode`
3. `1.` と `2.` を `mergecode`
4. `$$.code` に代入

とすれば良いことがわかります。スタックを意識すればそこまで難しくないはずです。  
より複雑な場合は一時変数を用意して段階的につなげるほうがわかりやすいです。

```c
    | expr PLUS expr {
        cptr *tmp = NULL;
        tmp = mergecode($1.code, $3.code);
        tmp = mergecode(tmp, makecode(O_OPR, 0, 2));
        $$.code = tmp;
    }
```

ここまで、構文を拡張する流れについて説明しました。  

しかし、中にはコンパイラレベルでの拡張では難しく、`pl0` に新しい命令を生やしたり、新しい演算子を解釈させるようにしなければならないときがあります。そのようなときはVMを拡張する必要が出てきます。

### ニーモニックを追加したい
生成される命令自体を増やしたい場合は `pl0i_src/code.h` に定義されている `opecode` (命令) や `oprcode` (演算子) に追記します。

#### vm/code.h
```c
/* operation codes of PL/0 code */
typedef enum {
  O_LIT, O_OPR, O_LOD, ...
} opecode;
```

```c
/* sub-operations of arithmetic operation etc. */
typedef enum {
  P_RET, P_NEG, P_ADD ...
} oprcode;
```

#### vm/inter.c
```c
void interpreter() {
    ...
    do {
        i = code[p++]; /* get an instruction */
        f = i.f;
        l = i.l;
        a = i.a;

        // opecodes
        switch(f) {
        case O_LIT :
            s[++t] = a;
            break;
        case O_OPR : 
            // operators
            switch((oprcode)a) {
            ...
            case P_NEG:
                s[t] = -s[t];
                break;
            case P_ADD:
                --t;
                s[t] = s[t] + s[t+1];
                break; 
}
```

`vm/inter.c` の `interpreter()` で各命令で分岐して、スタック `s` の操作を行なっているようです。 `t` が現在のスタックの位置を指すので、  
- 単項演算 (`-a` など) は `s[t]` に代入(位置は変わらない)
- 二項演算 (`a + b` など) は位置を下げてから上２つ(`s[t]` と `s[t + 1]`)に対し演算を行い `s[t]` に代入

しています。  
ここに新しい命令コードでの処理を追記することによって新しい演算を定義できます。

## 剰余演算子
当初は `a % b` は `a - b * (a // b)` と等価なので、そのようにコードを生成することで実現しようとしました

### `$1`, `$3` を2回使いたい...
```c
| expr MOD expr {
    // (a (b (a b /) *) -)
    cptr *tmp;
    tmp = mergecode(mergecode($1.code, $3.code),makecode(O_OPR, 0, 5));
    tmp = mergecode(mergecode($3.code, tmp), makecode(O_OPR, 0, 4));
    tmp = mergecode(mergecode($1.code, tmp), makecode(O_OPR, 0, 3));
    $$.code = tmp;
}
```

が、 `mergecode()` は內部で第2引数を `free()` しており(リストを連結する関数なので)  
1回 `$1.code` などを引数にとると 2回目以降はセグメンテーション違反となってしまいます。
これを回避するには、命令リストである `cptr*` をコピーする関数を作るなどすればいいのですが、面倒くさそうなのでVMを拡張して `%` 演算子を作る方向性にしました。

#### vm/code.h
```
typedef enum {
  ...
  P_MOD,
  ...
} oprcode;
```

`P_MOD` として新しい演算子として追記し、

#### vm/inter.c
```c
interpreter() {
    ...
    switch(f) {
        ...
        switch((oprcode)a) {
        case P_POW:
            --t;
            s[t] = (int)pow(s[t], s[t+1]);
            break;
    ...
}
```

`P_MOD` 演算子の処理を追記し、

#### compiler/lexer.l
```
...
"%" return MOD;
...
```

`%` を `MOD` トークンとして認識するようにし、

#### compiler/parser.y
```c
...
| expr MOD expr {
    $$.code = mergecode(mergecode($1.code, $3.code), makecode(O_OPR, 0, 7));
}
...
```

コードを生成します。

らく。

## 累乗演算子
これも当初はCの `math` ヘッダのように累乗を計算する関数をプログラムに追加することを考えていたのですが、面倒臭かったので、剰余演算子のように演算子として実装しました。なのでやりかたは上と全く同じです。

## for文

for文の構文は以下のようになります。

### 構文
```
for <初期化>; <条件式>; <更新式> do
    <内容> ...
end
}
```

これを実現するアセンブリコードは次の様に生成されて欲しいです。

### 擬似pl0コード
```
    ...
    <初期化>
start:
    JPC <条件式>, end
    <内容>
    <更新式>
    JMP start
end:
    ...
```

あとはこれをC言語に落とし込むだけです。

### 実装
#### `compiler/parser.y`
```
for_stmt
  : FOR expr SEMICOLON expr SEMICOLON expr DO stmts END {
    int label0 = makelabel(), label1 = makelabel();

    cptr * tmp;
    tmp = mergecode($2.code, makecode(O_LAB, 0, label0));
    tmp = mergecode(tmp, $4.code);
    tmp = mergecode(tmp, makecode(O_JPC, 0, label1));
    tmp = mergecode(tmp, $8.code);
    tmp = mergecode(tmp, $6.code);
    tmp = mergecode(tmp, makecode(O_JMP, 0, label0));
    tmp = mergecode(tmp, makecode(O_LAB, 0, label1));
    $$.code = tmp;
    $$.val = 0;
  }
  ;
```

`makelabel()` は連番で整数を返してくれる関数です。

## goto文・label文
### 構文
```
label <str>;
goto <str>;
```

`goto`, `label` は `pl0` アセンブリの `JMP` と `LAB` に対応しているので、  
ラベルの文字列とラベルの数字さえ管理していれば対応付けることが出来ます。  
ここで考えるのは

- `label <str>` がきたら `makelabel()` してそれを保存しておく
- `goto <str>` がきたら保存しておいたラベルから探してラベルの数字からコード生成する

一見するとこれでうまくいくように思えるかもしれませんが、これでは、 `goto <str>` が `label <str>` より上にあるときに `goto <str>` 時点では存在しないラベルとなりコードを生成することが出来ません。

### 対応できない例
```
goto hello;
label hello;
```

この問題に対処するために `goto` 文・ `label文` どちらでも

- ラベル `<str>` があれば其のラベルの数字でコード生成
- なければ `makelabel()` しその数字でコード生成

こうすることで、 `goto` 文・ `label` 文のどちらが先にきても対応することが出来ます。

### 実装
#### compiler/parser.y
```
// label and index dict
struct label_t { int k; char * v; };
struct label_t labels[100];
int labels_i = 0;

int search_label(char * label) {
  for (int i = 0; i < labels_i; i++) {
    if (strcmp(labels[i].v, label) == 0)  {
      return labels[i].k;
    }
  }
  return -1;
}

// temporary cases holder
struct case_t { cptr * cond, * stmt; };
struct case_t cases[100];
int cases_i = 0;

...

    | GOTO IDENT SEMICOLON {
        // if not exist, issue index
        int k = search_label($2.name);
        if (k == -1) {
        k = makelabel();
        struct label_t l = { .k = k, .v = $2.name };
        labels[labels_i++] = l;
        $$.code = makecode(O_JMP, 0, k);
        } else {
        $$.code = makecode(O_JMP, 0, k);
        }
    }
    | LABEL IDENT COLON {
        int k = search_label($2.name);
        if (k == -1) {
            k = makelabel();
            struct label_t l = { .k = k, .v = $2.name };
            labels[labels_i++] = l;
            $$.code = makecode(O_LAB, 0, k);
        } else {
            $$.code = makecode(O_LAB, 0, k);
        }
    }
```

ラベルの文字列と数字はグローバル変数 `labels` に保存し、 `search_label()` でラベルの検索をします。(本当は `env.c` などに追加するのが良さそう)(Cにハッシュマップ欲しい...)

## case文
続いて `switch` 文です。

### 構文
```
switch v do
  1: write 1;
  2: write 3;
  default: write 0;
end
```

`switch` 文は 0個以上の `case` と `default` からなり、変数が条件を満たした `case` の中身が実行され `end` まで処理が飛びます。構文解析は下位の規則から行われるので、`switch v ...` の部分よりも先に各 `case 1` の部分のコードが生成されることになります。  
しかし、ここにも問題があって、`case` 部分ではまだ `v` という変数の情報は得られていないので、何の変数が `== 1` なのかわからずコード生成をすることが出来ません。なので、一旦適当な変数に `case` の部分を保存しておいて、 `switch v ...` の部分でまとめてコード生成をするという方式を取ることにしました。  

#### compiler/parser.y
```c
// temporary cases holder
struct case_t { cptr * cond, * stmt; };
struct case_t cases[100];
int cases_i = 0;
...
```

`何個かわからないけど複数回来る` というのを構文で表すと以下のようになります。

```
cases
   : cases case
   | case
   ;

case
    : ...
```

最終的な実装は以下のようになりました。  
`case ...` が来たら、グローバル変数 `cases` に
条件式を内容を保存しておき、`switch v ...` 部分でfor文を回してつなげるという感じです。   
`switch` では最初に一番下に飛ぶようなラベルを生成し、各 `case` の最後にそのラベルを挿入することによって `break` を表すことが出来ます。  

default節は常に条件が成り立って欲しいので条件を `1(常にtrue)` としています。

```c
...

 switch_stmt
  : SWITCH IDENT DO cases END {
    cptr *tmp = NULL;
    int end_label = makelabel();
    list* tmpl;

    tmpl = search_all($2.name);
    if (tmpl == NULL){
      sem_error2("id");
    }

    if (tmpl->kind != VARIABLE){
      sem_error2("id as variable");
    }

    for (int i = 0; i < cases_i; i++) {
      int next_label = makelabel();
      // cond
      if (cases[i].cond == NULL) {
        // default branch
        tmp = mergecode(tmp, makecode(O_LIT, 0, 1));
      } else {
        // v == <cond>
        tmp = mergecode(tmp, makecode(O_LOD, level - tmpl->l, tmpl->a));
        tmp = mergecode(tmp, cases[i].cond);
        tmp = mergecode(tmp, makecode(O_OPR, 0, 8));
      }

      tmp = mergecode(tmp, makecode(O_JPC, 0, next_label));
      // stmt
      tmp = mergecode(tmp, cases[i].stmt);
      // insert break
      tmp = mergecode(tmp, makecode(O_JMP, 0, end_label));

      tmp = mergecode(tmp, makecode(O_LAB, 0, next_label));
    }

    tmp = mergecode(tmp, makecode(O_LAB, 0, end_label));

    // cleanup temp cases
    for (int i = 0; i < cases_i; i++) {
      cases[i].cond = NULL;
      cases[i].stmt = NULL;
    }
    cases_i = 0;

    $$.val = 0;
    $$.code = tmp;
  }
  ;

cases
  : cases case
  | case
  ;

case
  : expr COLON stmt {
    struct case_t c = { .cond = $1.code, .stmt = $3.code };
    cases[cases_i++] = c;
  }
  | /* default */ DEFAULT COLON stmt {
    struct case_t c = { .cond = NULL, .stmt = $3.code };
    cases[cases_i++] = c;
  }
  ;
```

## 配列
続いて、配列です。配列の実装が一番変更箇所が多く、難易度が高いように思えます。 

### 構文
```
var a[2], b[2], i;
i := 1
read a[i];
write a[0];
writeln;
```

### 動的なLoad/Store
`pl0` に存在する `LOD`, `STO` は定数なアドレス、つまり特定の変数を指定してのロード・ストアは出来ました。しかし、配列は `arr[i]` のように添字に変数が来ることもあり、`LOD`, `STO` では対応できません。

```
( STO, 0, 3 )
( LOD, 0, 3 )
```

そこで、スタックの値をアドレスとして、ロード・ストアする `DLD` (Dynamic LoaD), `DST` (Dynamic STore) を作る必要があります。

```
...
( INT, 0, 2 ) // allocate a[2]

( LIT, 0, 2 )
( STO, 0, 3 ) // i = 1

( LOD, 0, 3 )
( DLD, 0, 0 ) // a[i]

( LIT, 0, 5 )
( LIT, 0, 1 )
( DST, 0, 0 ) // a[1] = 5
```

それでは、VMから拡張していきます。

### VMを拡張
#### vm/code.h
```
  /* operation codes of PL/0 code */
  typedef enum {
      ...
+     O_DST, O_DLD
  } opecode;
```

#### vm/inter.c
```c
void interpreter() {
  ...
  case O_DLD:
      r = s[t--];
      if (t <= r) {
          printf("warning index out of range %d <= %d\n", t, r);
      }
      // dynamic load
      s[++t] = s[base(l) + r];
      break;

  case O_DST:
      r = s[t--];
      if (t <= r) {
          printf("warning index out of range %d <= %d\n", t, r);
      }
      // dynamic store
      s[base(l) + r] = s[t--];
      break;
      ...
}
```

シンプルにスタックを1消費してその値をもとにアクセスする場所を決めています。

### コンパイラを拡張

#### compiler/lexer.l
```
+ "[" return L_SQBRACKET;
+ "]" return R_SQBRACKET;
```

角括弧(Square Bracket) を配列の添字アクセスの記号とします。



ここで、問題が発生します。この `cmm` という言語は最初に使用する変数を `var a, b, c ...` という感じで宣言するので、コンパイラはその時に変数達がどのくらい領域を使うのかを計算しています。(`vd_backpatch()`)

#### compiler/parser.y
```
_decls
  : decls {
    int size = vd_backpatch($1.val, offset);
    $$.val = size;
    offset = offset + $1.val;
  }
  ;
```

今までの変数はもちろんアドレスを1つしか使わないので **変数の数 = 使う領域の数** であり、そのような実装となっていました。

#### compiler/env.c
```c
void vd_backpatch(int n_of_vars, int offset){
  int i;
  list* tmp = gettail();
  
  for(i = 0; i < n_of_vars; i++){
    tmp->a = SYSTEM_AREA + offset + i;
    tmp = tmp->prev;
  }
}
```

しかし、配列は変数一つにつき複数の領域を使うのでこのままでは使う正しい領域の場所を計算することは出来ません。そこで、各変数に長さの情報をもたせる必要があります。

#### compiler/env.h
```c
typedef struct LIST {
  // variable name
  char        *name;
  // VARIABLE
  int          kind;
  // offset
  int          a;
  // level
  int          l;
  // ?
  int          params;
  // length if var is array, must be positive
  int length;

  struct LIST *prev;
} list;
```

コンパイラ中では変数の情報は `struct LIST` という構造体で管理されていました。なので、そこに長さの情報を追加します。

#### compiler/env.c
```c
- void addlist(char* name, int kind, int offset, int level, int fparam) {
+ void addlist(char* name, int kind, int offset, int level, int fparam, int length) {
    ...
+   tmp->length = length;
 ...
}
```

それに伴い、変数追加時に長さも一緒に指定できるようにします。これで、使う領域を計算するときに各変数の長さを考慮して計算することが出来ます。

```c
// return total memory size
int vd_backpatch(int n_of_vars, int offset){
  list * tmp = gettail();
  
  int cnt = 0;
  for(int i = 0; i < n_of_vars; i++) {
    if (tmp == NULL) {
      printf("[Internal Compile Error] backpaching failure\n");
      return -1;
    }
    printf("%s { .a = %d .length = %d }\n", tmp->name, SYSTEM_AREA + offset + cnt, tmp->length);
    tmp->a = SYSTEM_AREA + offset + cnt;
    // for array
    cnt += tmp->length;
    tmp = tmp->prev;
  }

  return  cnt;
}
```

### 構文を拡張
あとは、プログラム中で配列の宣言、要素の取得、要素への代入をできるようにするだけです。やっていることは今までと変わらないので説明は割愛します。

#### compiler/parser.y
```
...
idents:
    ...
    | idents COMMA IDENT L_SQBRACKET NUMBER R_SQBRACKET {
        printf("%s val = %d\n", $3.name, $1.val);
        if (search_block($3.name) == NULL){
        addlist($3.name, VARIABLE, 0, level, 0, $5.val);
        }
        else {
        sem_error1("var");
        }

        $$.code = NULL;
        $$.val = $1.val + 1;
    }
    | IDENT L_SQBRACKET NUMBER R_SQBRACKET {
        if (search_block($1.name) == NULL){
          addlist($1.name, VARIABLE, 0, level, 0, $3.val);
        }
        else {
          sem_error1("var");
        }

        $$.code = NULL;
        $$.val = 1;
    }
```

宣言部分。


#### compiler/parser.y
```
...
stmt
    : ...
    | READ IDENT L_SQBRACKET expr R_SQBRACKET SEMICOLON {
        list * tmpl;
        cptr * tmpc;

        tmpl = search_all($2.name);

        if (tmpl == NULL){
        sem_error2("assignment");
        }

        if (tmpl->kind != VARIABLE){
        sem_error2("assignment2");
        }

        cptr *address_node = mergecode(mergecode($4.code, makecode(O_LIT, 0, tmpl->a)), makecode(O_OPR, 0, 2));

        dump_node(address_node);

        tmpc = mergecode(makecode(O_CSP, 0, 0), address_node);
        tmpc = mergecode(tmpc, makecode(O_DST, 0, 0));
        $$.code = tmpc;
        // $.code = mergecode(makecode(O_CSP, 0, 0), makecode(O_STO, level - tmpl->l, tmpl->a));
        $$.val = 0;
    }
    ...
```

要素への入力。

#### compiler/parser.y
```
stmt
    : ...
    | IDENT L_SQBRACKET expr R_SQBRACKET ASN expr {
        list *tmp;

        tmp = search_all($1.name);

        // printf("%s at %d\n", tmp->name, tmp->a);

        if (tmp == NULL){
        sem_error2("assignment");
        }

        if (tmp->kind != VARIABLE){
        sem_error2("assignment2");
        }

        printf("%s base %d + offset ?\n", tmp->name, tmp->a);

        cptr *address_node = mergecode(mergecode($3.code, makecode(O_LIT, 0, tmp->a)), makecode(O_OPR, 0, 2));

        dump_node(address_node);

        $$.code = mergecode(mergecode($6.code, address_node), makecode(O_DST, 0, 0));
        $$.val = 0;
    }
    ...
```

要素への代入。

#### compiler/parser.y
```c
expr
    : ...
    | IDENT L_SQBRACKET expr R_SQBRACKET {
        cptr* tmpc;
        list* tmpl;

        tmpl = search_all($1.name);
        if (tmpl == NULL){
        sem_error2("id");
        }

        if (tmpl->kind == VARIABLE){
        // printf("%s base %d + offset ?\n", tmpl->name, tmpl->a);

        cptr *address_node = mergecode(mergecode($3.code, makecode(O_LIT, 0, tmpl->a)), makecode(O_OPR, 0, 2));

        // dump_node(address_node);

        $$.code = mergecode(address_node, makecode(O_DLD, 0, 0));
        $$.val = 0;
        }
        else {
        sem_error2("id as variable");
        }
    }
    ...
```

要素の取得。

## 条件演算子
条件演算子 `&&`, `||`, `!` の実装です。こちらも `pl0` には無い演算なのでVMから拡張していきます。

### 構文
```
a && b;
a || b;
!a;
```

### 実装
#### vm/inter.c
```c
void interpreter() {
    ...
    case P_AND:
        --t;
        s[t] = ( s[t] && s[t+1] );
        break;
    case P_OR:
        --t;
        s[t] = ( s[t] || s[t+1] );
        break;
    case P_NOT:
        s[t] = s[t] ? 0 : 1;
        break;
    ...
```

#### compiler/lexer.l
```
"&&" return AND;
"||" return OR;
"!" return NOT;
```

#### compiler/parser.y
```
expr
    : ...
    | expr AND expr {
        $$.code = mergecode(mergecode($1.code, $3.code), makecode(O_OPR, 0, 14));
    }
    | expr OR expr {
        $$.code = mergecode(mergecode($1.code, $3.code), makecode(O_OPR, 0, 15));
    }
    | NOT expr {
        $$.code = mergecode($2.code, makecode(O_OPR, 0, 16));
    }
    ...
```

## インクリメント・デクリメント
- 前置インクリメント(++i)
- 後置インクリメント(i++)
- 前置デクリメント(--i)
- 後置デクリメント(i--)

を実装しました。

### 生成したい `pl0` を考える
後置インクリメント・デクリメントは式自体の評価された値と現在の変数の値が異なるので注意します。

#### `++i`
```
i := i + 1;
i;
```

#### `i++`
```
i := i + 1;
i - 1;
```

#### `--i`
```
i := i - 1;
i;
```

#### `i--`
```
i := i - 1;
i + 1;
```

### 実装
やるだけ

#### compiler/parser.y
```c
expr
    : ...
    | INC IDENT {
        // ++i -> i := i + 1; i;
        list * v = search_all($1.name);
        if (v == NULL){
        sem_error2("inc");
        }

        cptr * t = mergecode(makecode(O_LOD, level - v->l, v->a), makecode(O_LIT, 0, 1));
        t = mergecode(t, makecode(O_OPR, 0, 2));
        t = mergecode(t, makecode(O_STO, level - v->l, v->a));
        t = mergecode(t, makecode(O_LOD, level - v->l, v->a));
        $$.code = t;
    }
    | DEC IDENT {
        // --i -> i := i - 1; i;
        list * v = search_all($1.name);
        if (v == NULL){
        sem_error2("dec");
        }

        cptr * t = mergecode(makecode(O_LOD, level - v->l, v->a), makecode(O_LIT, 0, 1));
        t = mergecode(t, makecode(O_OPR, 0, 3));
        t = mergecode(t, makecode(O_STO, level - v->l, v->a));
        t = mergecode(t, makecode(O_LOD, level - v->l, v->a));
        $$.code = t;
    }
    | IDENT INC {
        // i++ -> i := i + 1; i - 1;
        list * v = search_all($1.name);
        if (v == NULL){
        sem_error2("inc");
        }

        cptr * t = mergecode(makecode(O_LOD, level - v->l, v->a), makecode(O_LIT, 0, 1));
        t = mergecode(t, makecode(O_OPR, 0, 2));
        t = mergecode(t, makecode(O_STO, level - v->l, v->a));
        t = mergecode(t, makecode(O_LOD, level - v->l, v->a));
        t = mergecode(mergecode(t, makecode(O_LIT, 0, 1)), makecode(O_OPR, 0, 3));
        $$.code = t;
    }
    | IDENT DEC {
        // i-- -> i := i - 1; i + 1;
        list * v = search_all($1.name);
        if (v == NULL){
        sem_error2("dec");
        }

        cptr * t = mergecode(makecode(O_LOD, level - v->l, v->a), makecode(O_LIT, 0, 1));
        t = mergecode(t, makecode(O_OPR, 0, 3));
        t = mergecode(t, makecode(O_STO, level - v->l, v->a));
        t = mergecode(t, makecode(O_LOD, level - v->l, v->a));
        t = mergecode(mergecode(t, makecode(O_LIT, 0, 1)), makecode(O_OPR, 0, 2));
        $$.code = t;
    }
    ...
```

## Appendix
### `Makefile`
#### vm/Makefile
```makefile
CC	= cc

pl0vm	: inter.o  common.o
	$(CC) inter.o  common.o -o pl0vm

myinter2.o	: inter.c
	$(CC) -c inter.c

common.o	: common.c
	$(CC) -c common.c

clean:	
	rm -f *~ *.o vm
```

#### compiler/Makefile
```makefile
CC	= cc
OPTS = -std=c99

cmmc	: y.tab.c code.o env.o
	$(CC) y.tab.c code.o env.o -ly -ll -o cmmc

y.tab.c	: parser.y lex.yy.c
	yacc -dv parser.y

code.o	: code.c code.h
	$(CC) $(OPTS) -c code.c

env.o	: env.c env.h
	$(CC) $(OPTS) -c env.c

lex.yy.c	: lexer.l
	lex -l lexer.l

clean:
	rm -f *~ *.o

```

### テスト
詳細は省きますが、`python` からコマンドの実行が出来るので、それを利用してテストを書くと幸せになれるかもしれません。

#### test/cmmctest.py
```py
...
cases = {
    'array.cmm': [[1, 2, 3, 4], [1, 3, 2, 4]],
    'for.cmm': [[], [3, 2, 1]],
    'goto.cmm': [[], [1, 2, 3]],
    'case.cmm': [[4], [0]],
    'pow.cmm': [[2], [16]],
}
...
```

入力と期待される出力の値を並べた図。

![](https://i.gyazo.com/af61a99bb6831b994ff910cf513f9d31.png)

精神衛生がいい。