---
title: 自作言語インタプリタを作りたい1
date: 2018-08-04
tags: [言語処理系]
---
## 夏休み突入

夏休みです。いかがお過ごしでしょうか、僕はバイト７連勤の真っ只中です💢。外も厨房も地獄のように暑いから家から出たくない。
とはいえ、(何に対してとはいえなのかわからないけど)期末テストが終わり、突然の確率統計学のレポートもなんとか終わらせて実質今日からが本当の夏休みです。

去年は夏休みに突入するやいなや友達とダーツ・ビリヤード・カラオケ・ボウリングなどと遊びまくっていたせいで、ほぼ何もせずにおわりました。
唯一やったのは専門学校に進んだ友達がJavaを学び始めたというのでCUIでなにか習作として一緒につくろうといってRPGになれなかった何かを作ったりしたぐらいです。

なので、今年もなにかやろうと、テスト期間中に思いたったのが自作インタプリタ言語処理系です。
**「夏アプリ」**とでも称して毎年続けていきたいですね。

## 動機
特に理由はないと思います。
強いて言えば大学でC言語書かされすぎてフラストレーションが溜まっていたのかもしれません。そこで最高に書きやすい言語作って `C` にでも変換できれば強いなとでも思ったのかもしれません。

## 目標
前述の通り、ひとつは自分にとって最高に書きやすいプログラミング言語をつくるってのと、もうひとつは `C言語` へのトランスパイラを作りたいというのが２大目標だと思います。

## 今に至る流れ
まず、プログラミング言語なのでどのような文法にするかなどの構文を策定しなければいけません。そこでとりあえず現時点の構想を `BNF(バッカス・ナウア記法)`で表現しました。

### `Arcturus` の `BNF`
```
<stmts> ::=  <stmt> | <stmt> <stmts> | <stmt> ',' <stmts>

<stmt> ::= <expr> | <def-fn> | <for_stmt> | <if_stmt> | <gate_stmt> | '/*' void '*/'

<def-fn> ::= 'fn' ID <args> '->' <type> '{' <stmts> '}'

<params> ::= '(' <expr_sq> ')' | '(' ')'
<expr_sq> ::= <expr> ',' <expr_sq> | <expr>

<args> ::= '(' <arg-sq> ')' | '(' ')'
<arg-sq> ::= void | <arg> ',' <arg-sq> | <arg>
<arg> ::= ID ':' <type>

<types> '(' <type-sq> ')' | '(' ')'
<type-sq> ::= void | <type> | <type-sq> ',' <type>
<type> ::= <types> '->' <type> | TYPE

<for_stmt> ::= 'for' <params> '{' ID '->' <stmts> '}'

<if_stmt> ::= 'if' '(' <expr> ')' '{' <stmts> '}' <else_opt>

<else_opt> ::= void | 'else' '{' <stmts> '}'

<gate_stmt> ::= <case_stmts> '?' <expr>
<case_stmts> ::= <case_stmt> | <case_stmts> '?' <case_stmt>
<case_stmt> ::= <expr> '->' <expr>

<expr> ::= 
    ID <params>
    | <if_stmt>
    | ID ':' <type-sq>
    | ID '=' <expr>
    | ID '⇔' ID
    | <expr> <bi-op> <expr>
    | ID <uni-op>
    | '{' <params> '->' <stmts> '}'
    | ID
    | '(' <expr> ')'
    | <literal>
<literal> ::= INT_LITERAL | STRING_LITERAL | BOOL_LITERAL
<bi-op> ::= '+' | '-' | '*' | '/' | '%' | '^' | '..' | '==' | '<=' | '>=' | '!=' | '|>'
<uni-op> ::= '++' | '--'
ID ::= [a-z][\w_]*
TYPE ::= [A-Z][\w_]*
INT_LITERAL ::= \d+
STRING_LITERAL ::= '"' \w* '"'
BOOL_LITERAL ::= true | false
```

構文に関しては奇を衒わず無難な仕上がりになっていると思います。
このあと特徴や影響を受けた言語などについて話そうと思ったのですが、バイトに行く時間が来てしまったので続きはまた明日にしようと思います。
(覚えていれば)



ではまた。