---
title: 自作言語インタプリタを作りたい9
date: 2018-08-31
tags: [programming, 自作言語インタプリタ]
vssue: false
---
# 過ぎるだけの時間じゃ悔しい
「過ぎるだけの時間じゃ悔しい」はアニメ「さくら荘のペットな彼女」ED、「DAYS of DASH/鈴木このみ」の歌詞の冒頭部分が元ネタです。[歌詞](http://www.kasi-time.com/item-64534.html)  

高校時代の自分はこの作品に影響を受け、今でも「過ぎるだけの時間じゃ悔しい」は座右の銘的な感じになっています。  
神だから、さくら荘見て(布教)  

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">240時間何も予定がないって史上初めてかも<br>バイトないって最the高</p>&mdash; わかめ (@wakame_tech) <a href="https://twitter.com/wakame_tech/status/1035150010323595264?ref_src=twsrc%5Etfw">2018年8月30日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<font size="1">※ちなみに「最the高」は「ベィスドロップ・フリークス/作詞作曲:かめりあ 歌:ななひら」が元ネタだと思う。この曲もかなり好きなのでぜひ聞いて。 </font> 

10連休に突入しています。過ぎるだけの時間じゃ悔しいので有意義な時間を過ごすように心がけたい。

# 新たに実装した言語機能
## 8/13
### 返り値の型推論
```
commit 'implement function/lambda return type estimation'
commit 'add call-function's return type estimation'
```
今までは適当にやっていた返り値の推論をしっかりするようにしました。  
例えば、以下のようなコードがある時、
```
fn f(double: (Int) -> Int, a: Int) -> Int {
    double(3) + a * _2
}

f({ it * 2 }, 1)
```
以前は定義された時点では関数本体中の式や変数には型情報がありませんでしたが、定義時に型情報を取得するようにしました。
```
(double(3) + a * _2): ???型
double(3): Int型
a: Int型
_2 => a: Int型
a * _2:Int型 * Int型 = Int型
(double(3) + a * _2): ???型 => Int型
```

まだテスト不足なのでバグめちゃくちゃあると思う。

## 8/14
### 型メソッド
```
commit 'support type method call'
commit 'support getting reciever variable/literal by "this"'
```

`Kotlin` でいう `Extension Functions` です。
特定の型に対するメソッドを生やすことが出来ます。
`this` でレシーバーオブジェクト(ドットの前のオブジェクト)を取得できます。

```
// 型メソッド
fn Int.sq() -> Int {
    this ^ 2
}

4.sq() // 16
(1 + 5).sq() // 36
```
関数呼び出し時に型の制限を確認するだけで実装できます。

## 8/15
ココらへんは遊びまくっていたので小さなバグ修正と些細なリファクタリングが中心でした。
## 8/22
### REPL
```
commit 'add REPL'
```

最近の言語にはだいたいある `REPL` を実装しました。`REPL` とは `Read-eval-print loop` の略で字のごとく読んで評価して表示して繰り返す。対話型評価環境を指します。
<font size="2">([はてなキーワード](http://d.hatena.ne.jp/keyword/REPL) より)</font>

```
> 1 + 2
evaled: [3]
> [1, 4, 9] == [1 ^ 2, 2 ^ 2, 3 ^ 2]
evaled: [true]
```
簡単なテストをするのに便利です。

### オートマッピング
```
commit 'support auto-mapping of operators'
```

配列と非配列との演算時に自動で `Array.map` 相当のことをしてくれるのが `オートマッピング` です。何かの自作言語から影響を受けています。  

```
// オートマッピング
assert([1, 2] + 1 == [2, 3])
assert([1, 2] + [3, 4] == [4, 6])
assert(([1, 2, 3] == 2) == [false, true, false])
assert(([1, 2, 3, 4] % 2 == 0).count() == 2)
```

ピアノの練習するので今日はここまで。
パステルのプリン食べたい。