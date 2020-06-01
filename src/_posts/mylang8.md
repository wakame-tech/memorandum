---
title: 自作言語インタプリタを作りたい8
date: 2018-08-18
tags: [programming, 自作言語インタプリタ]
vssue: false
---
# あれがデネブ、アルタイル、ベガ
先週は長野県に星を見に行く旅行へ行ったり、今週は４連休をもらって花火をしたり、プールに行ったりと夏休みらしい事をしていました。  
進捗も出さないと。

![図1: 夏の大三角と天の川(盛ってる)](https://i.imgur.com/aRsPTvZ.jpg)

# 本題
さて、本題です。今回はいろいろなサンプルを `Arcturus` で書くとしたらどのようになるかを見ていきましょう。未実装の機能をバリバリ使っているのでその場合は適宜解説します。

## フィボナッチ数
### nth_fib.ac
```kotlin
&: |> { when(it) { 0, 1 -> it, else -> self(it - 2) + self(it - 1) } |> println
```

### 入力演算子 `&:`

**前回までは `>>` でしたが、わかりにくいので変更しました。**  
`&:` は入力演算子で、入力のフォーマットに応じて自動的に型が決定されます。例えば数字を入力すると `Int` 型の入力として扱われます。
明示的に型を指定したい場合は `&: String` のように後ろに型を指定します。

### ラムダ式の即時呼び出し
`&:| > { ... }` は `{ ... }(&:)` と等価なのでラムダ式の呼び出しをしているだけです。 

### 自身を呼び出す `self`
関数やラムダ式内で `self` を使用すると自身を呼び出せるようにしたいです。 

## マインスイーパ
### minesweeper.ac
```kotlin
enum State { Closing | Opening | Flagging }

class Cell(isMine: Bool = false, hints: Int = 0, state: State = State.Closing) { 
    fn toString() -> String {
        [' * ', ' #{hints} ', ' F '][state.index]
    }
}

&: => num:
board: Mat<Cell, 8, 8>
board.select(num).map { isMine = true }
board.eachIndexed { cell: Cell, x: Int, y: Int ->
    cell.hints = board[x + -1..1, y + -1..1].count { is_mine }
}

while(board.count { isMine } < num) {
    println(board)
    println("mode(1 : OPEN, 2 : FLAG) x y ?: ")
    [mode: State, x: Int, y:Int] = [&:]
    when(mode) {
        State.Opening -> {
            board[&: + -1..1, &: + -1..1]
                .filter { !isMine }
                .map { state = State.Opening }
        }
        State.Flagging -> {
            board[&:, &:].state = if(board[x, y].state == State.Flagging) State.Closing else State.Flagging
        }
    }
}
```
### ２次元配列 `Mat`
二次元的な表現はプログラミングをするときによく使われると思うのですが、
多くのプログラミング言語では２次元配列を表現するときに配列の配列を用いて表現することが多いと思います。  
しかし、例えば座標の管理などで `poses[x][y]` だと思ってコーディングしたら実際は `poses[y][x]` でバグが発生していたり、要素を列挙するのに`２重のfor文`を使わなければならないなど煩わしさが多少あります。なので `Arcturus` では２次元配列を `Mat` として言語仕様に組み込もうと思います。

### 列挙型 `Enum`
#### enum.ac
```kotlin
enum Fruit { Apple | Orange | Grape }
fruit: Fruit = Fruit.Apple
```

列挙型です。

### `Class`
#### class.ac
```kotlin
class Human(age: Int, job: String) {
    fn greed() -> Unit {
        println("#{age} years old, I'm a #{job}")
    }
}

human: = Human(24, "student")
human.greed() // "24 years old, I'm a student"
```

まぁよくあるクラスです。

### ２次元配列と配列のアクセサ
１次元配列 `Array` では `array[3]` のようにして要素にアクセスできるのと同様に、 ２次元配列 `Mat` では `mat[2, 4]` とすることでアクセスできるようにしたい。  
また、添字に `1..4` のような `Range` を指定することで配列の切り出しとかも出来るようにしたい。

### 分割代入
分割代入は最近の `JavaScript` とかにある `[a, b] = [10, 20]` のように配列の要素を分割して代入できる式です。

#### destructuring.ac
```java
[a, b] = [10, 20]
assert(a == 10 && b == 20)
[a] = [10, 20]
assert(a == 10)
[a, *b] = [10, 20, 30]
assert(a == 10 && b == [20, 30])
[a, _, b] = [10, 20, 30]
assert(a == 10 && b == 30)
```

実装難しそう。
これらのサンプルが動くようになるのはいつになることやら。