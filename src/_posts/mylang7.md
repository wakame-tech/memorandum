---
title: 💻 自作言語インタプリタを作りたい7
date: 2018-8-11
tag: [programming, piano]
---

# 休日
今日は完全オフの日だからいろいろやりたかったことをやろうとしたら一日が終わっていました。もしかして一日って案外短い？
とはいえ、 `Arcturus` と `ピアノ` の進捗を生み出せたのでよし。

`Arcturus` の方はようやくリファクタリングが一段落ついたかなって感じです。 `Ruby` にまだ慣れていないので `Ruby` なりの書き方というものがわからない。動的型付け言語慣れない。  
あと再帰が動かなかったのでデバッグしようと思ったら無限にハマって結局解決できませんでした。
なので現バージョンでは再帰を使ったコードは禁止にしています。とはいえコードの表現力を狭めてしまうので再帰は追って動くようにします。  


`ピアノ` の方も少しだけ、今やってる曲が一段落ついたので新しい曲をやってるのですが、今までの曲と違って左手がオクターブのトレモロ(`ド↓ド↑ド↓ド↑... みたいな`)ではなく、アルペジオ的な感じ(`ソ↓レソシーレソシ...みたいな`) で両手で複雑な動きをするので今まで以上に時間がかかります。
数小節弾けるようになるのに平気で２、３時間かかります。同じところで無限にミスしてやめたくなる。ただ左手が無意識に弾けるようになれば両手演奏のハードルはグッと下がるし、伴奏、メロディともに共通部分があるので最初の山を乗り越えればそんなに時間はかからなそう。８月中の完成を目指したいですね。  

あー夏無限にやりたいことある。プログラミング関係で言えばホームページも作りたいし、`Ruby on Rails` の勉強本買ったのに途中だったからやりたいし、友人がやってた `Haskell` も触ってみたいし、`Rust本` 買って `Rust` も触りたいし、前々から `TypeScript` 気になってるし `React.js本` 眠ってるし `Unity` でのゲーム制作は放置してしまってるし、そもそも `基本情報技術者試験` の勉強しなきゃいけないし。  

あとプログラミング関係以外のこともブログネタにしていきたい。`本を自炊した話` とか `紅茶の話` とか `アロマテラピーの話` とか `小説の話` とか `Vtuberの話` とか `動画制作の話` とか、機会があったら。  

前置きが少し長くなったので本題。コミットログを追うのは今回で終わるはずです。

# 8/1(11日目)
大学の期末テストが終わり夏休み突入です。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">夏休みに突入した</p>&mdash; わかめ (@wakame_tech) <a href="https://twitter.com/wakame_tech/status/1024468986904240129?ref_src=twsrc%5Etfw">2018年8月1日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

確かこの時３日間くらい高熱が出ていたような気がします。完徹すると１週間以内に絶対に体調崩すジンクス。

```
commit 1a3cbe5ba1b5aca0bf16db6d639ea638bd186e9a '配列の宣言と添字のアクセス、代入を実装'
```

配列を実装しました。必須ですね。

### array.ac
```
array: = [1, 2, 3]
i: = 0, j: = 100
array[i] = j
```

ちなみに型は内部では `Array<Int>` `(内部表現: ['Array', 'Int'])` となっていますが、 `ジェネリックプログラミング` の機能をまだ実装していないので明示的に型を表現できません。なので型推論に任せています。

```
commit 5a34118e04309cd2ded27cc09367226d9d2dc325 '再帰、return文に対応'
commit 24a284e9963eb10c9119472665c3abf09f0dcc6f 'returnに関するバグ修正'
```

### return.ac
```rust
fn f() -> Int {
     a: = 2
     if(a == 1) {
         return a
     }
     3
 }

print(f()) // 3
```

# 8/2(12日目)

```
commit 972bf14aa339c4fa08f4ada14b5340d01fe2bc63 'make node class and do refactoring'
commit ad77bb84f982a2010b3e15a88eb893774c9d6cb7 'refactoring traverser'
commit e918391d5444fd46a4c443d3f70add7142860ca9 'improve architecture and check to run to m06'
```

何故かこの日だけコミットメッセージが英語です。何がしたかったのでしょうか🤔  
とにかくリファクタリングを進めています。今まではノードを `['id', 'i', 'Int']` のように配列で扱っていたのでソースコードがマジックナンバーだらけでした。なので `VariableNodeクラス` などを導入してオブジェクト指向化しました。まだソースコードカオスだけど。

# 8/9(13日目)

まる一週間コミットがなかったようです。７連勤ロングシフトのせいだ。まぁ毎日エントリー書いてたし多少はね？

```
commit d2b4c0792bc82ceef35721dc2944de229a4f7b53 'm08まで動くように'
commit 5fb93105bb7e93dd4bc6f5726e6fcf93114aa9cc 'm09動くように'
commit 78cb3bce8adb19b5cf341ad18ee1913a8e6cbd74 'm11まで対応、右辺代入演算子追加'
commit 005df1d6123b14045e448f31adea563bbc456a95 'm12まで対応、配列サポート'
```

リファクタリングを進めながら `Milestones` の動作確認をしています。また途中で右辺代入演算子 `=>` を導入しています。
これは先日買った `「言語つくる本」` から着想を得た(~~パクリ~~)もので左辺値を右辺に代入する演算子です。

### right_assign.ac
```js
2 |> square |> double => a: // 8
```

このようにパイプライン演算子と組み合わせることで直感的なコードがかけるはずです。

# 8/10(14日目)

```
commit 94bfe7de5e6bad64adfb9e8d207e16dcda5cbc46 'ラムダ引数のときにラムダ式を省略してかけるように'
commit bf26ec92aafae2bde5c7990049e9072487c4ca6a 'support omitted lambda expression assignment'
```

ラムダ式の省略を実装しました。今までは `{ 引数名:型... -> 文 }` と書いていたのですが関数の引数や代入時の右辺値など型が明示的にわかっている時は引数と矢印を省略して `{ 文 }` のように書けます。
では省略された引数はどうやってアクセスするのかというと、自動変数の出番です。これによりとてもスマートにラムダ式をかけるようになりました。  

さらに関数呼び出しの方にも手を加えて関数の引数が１つのみかつその引数がラムダ式のとき関数呼び出しの括弧を省略できます。

### m14.ac
```rust
fn f(action: (Int, Int) -> Int) -> Int {
    action(1, 2)
}

f { _1 + _2 } |> p // 3

dis_sq: (Int, Int) -> Int = { _1 ^ 2 + _2 ^ 2 }
dis_sq(3, 4) |> p // 25
```

ちなみに内部では省略された引数名は `__argN` となってます。以下が該当部分。汚いし後で見たらわからなくなりそう。

### interpreter.rb(一部抜粋)
```ruby

elsif expected_type != given_type
    # ラムダ式が省略形のときは引数を補完
    if _is_lambda_type(expected_type) && @@FunctionTable[traversed_args[i].id.to_sym][:is_omit] then
        traversed_args[i].type = expected_type
        @@FunctionTable[traversed_args[i].id.to_sym][:fn_type] = expected_type
        @@FunctionTable[traversed_args[i].id.to_sym][:args] = (1..expected_type[0].length).map { |i|
            ArgNode.new("__arg#{i}", expected_type[0][i - 1])
        }
    else

```

また `color_echo` という `gem` を導入して実行画面の見た目も整えました。

```ruby
CE.fg(:white)
    .pickup(/#{@@PremitiveTypes.join('|')}/, :index7)
    .pickup(/#>/, :yellow)
    .pickup(/=+.*?=+/, :index254, nil, :bold)
    .pickup(/<.*?>/, :green)
```

このように正規表現と色を指定するだけで標準出力が色付けされます。便利。

![画像](https://imgur.com/u5yj2K1.png)

カラフルで見やすい。ちなみにターミナルは [Hyper](https://hyper.is) 使ってます。  

これで最新のcommitに追従出来ました。
これからは将来的に実装したい要素や実装した要素の解説などをしていきたいと思います。