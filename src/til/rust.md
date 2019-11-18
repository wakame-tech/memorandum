# Rust
## 2018/12/18
### Tour

```rust
fn main() {
    println!("Hello, world!");
}

// # range
// Ruby | Rust
// 1..10 | 1..=10
// 1...10 | 1..10

// # 参照と借用
// moveされない
// immutableな参照はいくつでも, mutableはひとつだけ
// デリファレンスは*

// # スライス = 配列の参照 :&[T]
// let mut e = &mut b[..] <- mutable な参照は一つだけ

// # 文字列 :&str
// "hoge" : &str (immutableで固定長)
// to_string() で mutable 可変長な String に

// # 関数: fn(T ...) -> R
// 仮引数前に mut をつけると mutable (= let)

// # パターンマッチ
// match expr {
//  pattern1 | pattern2 => expr1,
//  pattern3 if cond => expr2,
//  var @ pattern4 => expr3, (destructurable)
//  _ => else
// }

// pattern の中で参照を使うには &(参照とマッチ), ref(immutableな参照を生成), ref mut

// * 簡単な連想リスト
// fn assoc (key: &str, data: &[(&str, i32)]) -> i32 {
//     for &(k, v) in data {
//         if k == key { return v; }
//     }
//     -1
// }

// let data = [("foo", 10), ("bar", 20)];
// assoc("foo", &data) // 10

// * 関数の仮引数でパターンマッチ
// fn f1 (&(a, b): &(i32, i32)) {
    
// }

// let x = (1, 2);
// foo(&x);

// # 構造体
// let s = Struct { hoge: 1, ... };
// let mut s = ... で 構造体全体が mut
// .. で他の構造体から値を取得
// let p2 = Point3D { x: 0.0, .. p1 };

// # タプル構造体
// struct Name(T, ...);
// 構造体もパターン
// let Point { x: a, y: b } = Point { x: 1.0, y: 2.0 };

// # 列挙型
// enum Fruit { Apple, Orange };
// Fruit::Apple

// パターンマッチ
// enum Fruit { Orange, Apple };

// fn get_price (fruit: &Fruit) -> i32 {
//     match *fruit {
//         Apple => 200,
//         _ => 0
//     }
// }

// # メソッド
// impl T {
//  method (self, v: T, ...) -> R {}
// }

// self は self(move), &self, &mut self が指定可能
// Self で呼び出し元のデータ型
// 第一引数が self 以外なら static メソッド

// # トレイト
// trait Name {
//  fn name (t: T ...) -> R;
// }

// トレイトの中でメソッドも実装可能
// impl Name for T {
//  fn name ...
//}

// trait T : S でトレイトの継承

// # Derive: #[derive()]
// トレイとの標準的な機能を実装できる
// Clone, Copy, Debug, Default, Eq, Hash, Ord, PartialEq, PartialOrd
// Debug は println!("{:?}", s); で内容表示できる

// # ジェネリック
// fn name<T, ...>( ...)
// struct name<T, ...> { ... }
// enum name<T, ...> { ... }
// trait 名前<T, ...> { ... }
// impl <T, ...> Trait<T, ...> { ... }
// impl <T, ...> Trait<T, ...> for A<T, ...> { ... }

// * Option
// enum Option<T> { None, Some(T) }

// * 使用例
// fn find_if <T> (pred: fn(&T) -> bool, table: &[T]) -> Option<&T> {
//   for x in table {
//      if pred(x) { return Some(x); }
//   }
//   None
// }

// パターンマッチでデータの取り出し
// match find_if(evenp, &a) {
//   Some(x) => x,
//   None => ()
// }

// if let pattern = expr { ... } else { ... } パターンマッチに成功したらthen節実行

// * Result
// enum Result <T, E> { Ok(T), Err(E) }

// # 型パラメータの境界(トレイト境界, ジェネリック境界とも)
// <T : U>
// <T : U + V + ... > or ( ... ) where T: U, V, ... { ... } で複数の境界

// # Box<T>
// ヒープ領域からメモリを取得するとき
// C++ のスマートポインタに近い
// let var: T
// Box::new(var) : Box<T>
// * でデリファレンス
// trait Drop::drop() を実装で開放時の処理記述できる

// * Ex
// let p = Box::new(Point { x: 0, y: 0 });
// p.x // (*p).x と同じ

// * 連結リスト
// #[derive(Debug)]
// enum List {
//     Nil, Cons(i32, Box<List>)
// }

// impl Drop for List {
//     fn drop(&mut self) {
//         println!("Drop List {:?}", self);
//     }
// }

// impl List {
//     // 空リストを返す
//     fn new() -> List {
//         List::Nil
//     }

//     // 連結リストの先頭にデータを追加する
//     fn cons(self, x: i32) -> List {
//         List::Cons(x, Box::new(self))
//     }
// }

// # トレイトオブジェクト
// 動的ディスパッチ, C++の仮想関数に似ている
// Ex
// trait Foo {
//     fn method(&self);
// }

// struct Bar;
// struct Baz;

// impl Foo for Bar {
//     fn method(&self) { println!("Bar method"); }
// }

// impl Foo for Baz {
//     fn method(&self) { println!("Baz method"); }
// }

// fn call_method(func: &Foo) {
//     func.method();    // 動的ディスパッチ
// }

// fn call_method_box(func: Box<Foo>) {
//     func.method();
// }

// # クロージャ / ラムダ
// |v: T, ...| -> R { ... }
// 参照可能な局所変数の集合を「環境」と呼ぶ
// let mut inc_b = || b += 1 // 変数 b を mutable で借用
// let mut add_c = move |x| {c += x; c}; // move クロージャ(所有権をクロージャに移動)

// # クロージャと高階関数
// 関数とクロージャでは方が異なる -> クロージャの型を境界条件としたジェネリクス関数 or トレイトオブジェクトを渡す

// fn apply1<F, V>(func: F, x: V) -> V where F: Fn(V) -> V {
//     func(x)
// }
// fn apply11<V>(func: &Fn(V) -> V, x: V) -> V {
//     func(x)
// }
// fn square(x: f64) -> f64 { x * x };
// apply1(|x| x * x, 123);
// apply11(&|x| x * x, 123);
// apply1(square, 1.111);
// apply11(&square, 1.111);

// # クロージャを返す
// ジェネリクスを使えない, move クロージャを使わなければいけないという制約あり
// トレイトオブジェクトを使う: Box<Fn(t: T ...) -> R> が返り値の型

// # ライフタイムパラメータ
// 'static はプログラム全体
// <'a, ...>
// * struct で参照を格納するときは必要
// この例では ライフタイムが y == z なのでコンパイル可能

// struct Foo<'a> {
//    x: &'a i32
// }
// let y = 123;
// let z = Foo { x: &y };

// # type
// type New = T;

// # イテレータ
// Trait Iterator を実装するとなる(関連型 Item と next() -> Option<Self::Item>) が必要

// iter()
// iter_mut() mutable iterator
// into_iter() 要素は move

// # 要素の推定
// let xs: Vec<_> = (1..101).map(change).collect();

// # モジュール
// mod Module { ... }
// モジュール内は private
// pub mod でモジュール外に公開

// # use
// use NS1::NS2::Mod as Alias;
// use NS1::NS2::ModA; // Modでアクセス可能
// use NS1::NS2::{ ModA, ModB ... };
// use NS1::NS2::*;

// # エラー処理
// Option や Result を使う
// panic! マクロ
// Option::unwrap(), Result::unwrap() は T を取り出す 異常型のときはパニック
// and_then() で多重ラップを防げる

// * マクロ try! を使うと Err(E) が帰ってきたらリターン: Err(E), Ok(T) なら :T
// ? で書き換え可能
// try!(s.parse()); -> s.parse()?

// # 演算子多重定義
// * 例
// use std::ops::Add;

// #[derive(Debug, Copy, Clone)]
// struct Point { x: f64, y: f64 }

// #[derive(Debug, Copy, Clone)]
// struct Point3d { x: f64, y: f64, z: f64 }

// impl Point {
//     fn new(x0: f64, y0: f64) -> Point {
//         Point { x: x0, y: y0 }
//     }
// }

// impl Point3d {
//     fn new(x0: f64, y0: f64, z0: f64) -> Point3d {
//         Point3d { x: x0, y: y0, z: z0 }
//     }
// }

// // 左辺と右辺でデータ型が同じ場合
// impl Add for Point {
//     type Output = Point;
//     fn add(self, other: Point) -> Point {
//         Point { x: self.x + other.x, y: self.y + other.y }
//     }
// }

// impl Add for Point3d {
//     type Output = Point3d;
//     fn add(self, other: Point3d) -> Point3d {
//         Point3d { x: self.x + other.x, y: self.y + other.y, z: self.z + other.z }
//     }
// }

// // 右辺と左辺でデータ型が違う場合
// impl Add<Point3d> for Point {
//     type Output = Point3d;
//     fn add(self, other: Point3d) -> Point3d {
//         Point3d { x: self.x + other.x, y: self.y + other.y, z: other.z }
//     }
// }

// impl Add<Point> for Point3d {
//     type Output = Point3d;
//     fn add(self, other: Point) -> Point3d {
//         Point3d { x: self.x + other.x, y: self.y + other.y, z: self.z}
//     }
// }

// # サイズ不定型
// Sized はコンパイル時にサイズが決まることを表すトレイト
// 決まらないとき [T] はだめで &[T] ポインタを使ってアクセス
// ?Size をつけることで制約はずせる

// struct Foo <T: ?Sized> {
//    buff: T      // 大きさが異なる配列でも格納できる = T is [E; ∀n]
// }

// # Deref トレイト
// type Target: ?Sized と Deref::deref() -> Self::Target を実装
// # DerefMut ( ::deref_mut(&mut self) ) で mutable

// # Rc<T>
// Box<T> に参照カウンタをつけたもの
// C++ の shared_ptr<T> みたいな
// Rc<T> を clone() するとコピーされず参照カウンタ +1, 外れると -1, 0 で開放
// Rc は * で moveできないするときは fn try_unwrap(this: Rc<T>) -> Result<T, Rc<T>> を使う
// 参照カウンタが1のときのみ成功

// # Cell<T>
// immutable なデータの中で mutable な操作をするとき: Copy 制約
// Cell::new() 生成, .get() 読み取り, .set() 書き換え
// # RefCell<T>
// .borrow() -> Ref<T>, .borrow_mut() -> RefMut<T>
// これで Rust の immutableな参照 と mutableな参照 を同時に使う事ができないという制限を緩和できる

// # std::collections
// # VecDeque<T> 両端キュー
// # LinkedList<T> 双方向連結リスト
// # HashMap<K, V>
// # HashSet<T>

// # スレッド
// # チャネル
// # Arc / Mutex / RwRock

// # ポインタ
// *const T, *mut T 生ポインタ (unsafe)

// # マクロ
// Schemeの健全なマクロと同様の機能
// マッチャー => テンプレート
// マッチャーは $name: identifer で記述
// identifer: block, expr, ident, item, pat, path, stmt, tt, ty

// macro_rules! Macro {
//    (pattern1) => (template1);
//    (pattern2) => (template2);
//}

// * 例: 遅延評価
// use std::cell::RefCell;

// // 遅延評価
// struct Delay<'a, T: 'a> {
//     value: RefCell<Option<T>>, func: Box<Fn() -> T + 'a>
// }

// impl<'a, T: 'a> Delay<'a, T> {
//     fn new<F: 'a>(f: F) -> Delay<'a, T> where F: Fn() -> T {
//         Delay { func: Box::new(f), value: RefCell::new(None) }
//     }
//     fn force(&self) -> &T {
//         let mut val = self.value.borrow_mut();
//         if val.is_none() {
//             *val = Some((self.func)());
//         }
//         match unsafe { self.value.as_ptr().as_ref().unwrap() } {
//             &Some(ref x) => x,
//             _ => unreachable!()
//         }
//     }
// }

// // Delay を生成するマクロ
// // delay! を定義することで使いやすくなる
// macro_rules! delay {
//     ($e:expr) => (Delay::new(move || $e));
// }

// // たらいまわし関数
// fn tarai(x: i32, y: i32, z: Delay<i32>) -> i32 {
//     if x <= y {
//         y
//     } else {
//         let zz = *z.force();
//         tarai(tarai(x - 1, y, z), tarai(y - 1, zz, delay!(x)), delay!(tarai(zz - 1, x, delay!(y))))
//     }
// }

// # ライフタイム境界
// T: 'a T内のすべての参照は 'a より長生き
// T: Trait + 'a さらに Trait 実装

// # Transmute
// unsafe な型変換, サイズが合わないとコンパイルエラー

// * 例
// use std::mem::transmute;
// unsafe {
//   transmute::<f64, u64>(1.2345)
//   transmute::<[u8; 4], u32>(a) // [u8] を変換するときはエンディアン考慮する必要
// }
```

### minesweeper

```rust
// rewrite minesweeper.c with Rust
// 2018/12/18

extern crate rand;
use std::io;
use std::iter::{ self };
use rand::{ thread_rng, seq };

extern crate num;
use num::traits::FromPrimitive;

const BOARD_SIZE: usize = 8;

// マス目の状態
#[derive(Debug, Eq, PartialEq, Copy, Clone)]
enum State { Closing, Opening, Flagging }

impl FromPrimitive for State {
  fn from_usize(n: usize) -> Option<State> {
    match n {
      0 => Some(State::Closing),
      1 => Some(State::Opening),
      2 => Some(State::Flagging),
      _ => None,
    }
  }

  fn from_i64(n: i64) -> Option<State> {
    Self::from_usize(n as usize)
  }

  fn from_u64(n: u64) -> Option<State> {
    Self::from_usize(n as usize)
  }
}

#[derive(Debug, Eq, PartialEq, Copy, Clone)]
struct Cell { m: i8, state: State }

type Board = [[Cell; BOARD_SIZE]; BOARD_SIZE];

// 特定の座標の周囲9マスを返す
fn arround <'a> (board: &'a Board, &(x, y): &(i32, i32)) -> Vec<Cell> {
  let indice = [ (x - 1, y - 1), (x, y - 1), (x + 1, y - 1), (x - 1, y), (x + 1, y), (x - 1, y + 1), (x, y + 1), (x + 1, y + 1)];
  indice.into_iter().filter(within).map(|&(x, y)| { board[y as usize][x as usize] }).collect::<Vec<Cell>>()
}

// // like `scanf`
// fn read_vec<T: std::str::FromStr>() -> Vec<T> {
//     let mut s = String::new();
//     std::io::stdin().read_line(&mut s).ok();
//     s.trim().split_whitespace().map(|e| e.parse().ok().unwrap()).collect()
// }

// 盤面内の座標かどうか判定します
fn within(&&(x, y): &(&(i32, i32))) -> bool {
  0 <= x && x < BOARD_SIZE as i32 && 0 <= y && y < BOARD_SIZE as i32
}

// 重複なしに MINES 個の座標を選択して配列に代入します
fn select_mine_positions(mines: usize, board: &mut Board) {
  let mut rng = thread_rng();
  let poses = seq::sample_iter(&mut rng, 0..(BOARD_SIZE * BOARD_SIZE), 5)
    .unwrap()
    .into_iter()
    .map(|index| ((index / BOARD_SIZE) as usize, (index % BOARD_SIZE) as usize))
    .for_each(|pos| {
      board[pos.1][pos.0].m = -1 as i8;
    });
}

// // 各セルについて地雷の数を数えマップに記録
fn map_hint(board: &mut Board) {
  for j in 0..BOARD_SIZE {
    for i in 0..BOARD_SIZE {
      if board[i][j].m == -1 { 
        continue;
      }
      board[i][j] = arround(&board, &(i, j)).iter().filter(|c| c.m != -1 ).count()
    }
  }

// 近傍8ます
fn open_cells(board: &mut Board, &(x, y): &(usize, usize)) {
  board[y][x] = State::Opening;
  for cell in arround(&board, &(x, y)) {
    if cell.m == -1 {
      continue;
    } else {
      cell.state = State::Opening;
    }
  }
}

// セルを変更します
fn set_cell(board: &mut Board, pos: &(usize, usize), command: &State) {
  match command {
    State::Opening => open_cells(board, &pos),
    State::Flagging => {
      board[pos.1][pos.0] = 
      if board[pos.1][pos.0] == State::Flagging {
        State::Closing 
      } else { 
        State::Flagging 
      };
    }
    _ => {}
  }
}

// 出力
fn display(board: &Board) {
  print!("[y]\n\n");
  for y in 0..BOARD_SIZE {
    print!("{}", format!("{:2} | ", y));
    for x in 0..BOARD_SIZE {
      let out = match board[y][x].state {
        State::Closing => " * ".to_string(),
        State::Opening if board[y][x].m == -1 => " @ ".to_string(),
        State::Opening => format!(" {} ", board[y][x].m),
        State::Flagging => " F ".to_string()
      };
      print!("{}", out);
    }
    println!();
  }

  print!("    ");
  for _ in 0..BOARD_SIZE {
    print!("---");
  }
  print!("\n     ");
  for x in 0..BOARD_SIZE {
    print!(" {} ", x);
  }
  println!();
}

// 開いているセルの数をカウントします
fn count_opening_cells(&mut board: Board) -> usize {
  board.iter_mut().flat_map(|itr| itr.iter_mut()).filter(|c| c.state == State::Opening ).count()
}

// 入力が正しいかチェック
fn validatate(board: &Board, pos: &Position, command: &State) -> bool {
  if !within(&pos) {
    println!("(0, 0) ~ ({}, {})を選択してください", BOARD_SIZE - 1usize, BOARD_SIZE - 1usize);
    return false;
  }

  match command {
    State::Opening if board[pos.y][pos.x] == State::Opening => {
      println!("すでに開いています");
      false
    },
    State::Opening if board[pos.y][pos.x] == State::Flagging => {
      println!("フラグが立っているマスなので開けません");
      false
    },
    State::Flagging if board[pos.y][pos.x] == State::Opening => {
      println!("開かれているマスにはフラグは立てられません");
      false
    },
    State::Closing => {
      println!("モードが不正です 1 か 2を選択してください");
      false
    },
    _ => true
  }
}

fn main() {
  // 盤面
  let mut board = [[Cell { m: 0, state: State::Closing }; BOARD_SIZE]; BOARD_SIZE];

  // for cell in board.iter_mut().flat_map(|itr| itr.iter_mut()) {
  //   cell.state = State::Opening;
  // }

  for cell in arround(&board, &(1, 2)) {
    println!("{:?}", cell);
  }

  for cell in arround(&board, &(0, 0)) {
    println!("{:?}", cell);
  }
}

  // select_mine_positions(3, &mut board);

  // display(&board);
  // // 地雷の数を入力
  // let mut mines: usize = 0;
  // loop {
  //   println!("地雷の数は? (0 - {})", CELLS);
  //   let mut num = String::new();
  //   io::stdin().read_line(&mut num).expect("Failed to read line");
  //   mines = match num.trim().parse() {
  //     Ok(num) => num,
  //     Err(_) => continue
  //   };
  //   if mines <= CELLS {
  //     println!("mines > {}", mines);
  //     break;
  //   }
  // }

  // // 地雷の位置を決める
  // select_mine_positions(mines, &mut mine_map);

  // // 各セルの8近傍の地雷の数をマッピング
  // map_hint(&mut mine_map);

  // while count_opening_cells(&board, &mine_map) < BOARD_SIZE * BOARD_SIZE - mines {
  //   // 表示
  //   display(&board, &mine_map);

  //   // 入力
  //   println!("mode(1 : OPEN, 2 : FLAG) x y ?: ");
  //   let inputs = read_vec::<usize>();
  //   if inputs.len() < 3 {
  //     println!("invalid input");
  //     continue;
  //   }
  //   let (command, pos) = (State::from_usize(inputs[0]).unwrap(), Position { x: inputs[1], y: inputs[2] });
  //   println!("{:?} {} {}", command, pos.x, pos.y);

  //   if !validatate(&board, &pos, &command) {
  //     continue;
  //   }

  //   set_cell(&mut board, &mut mine_map, &pos, &command);

  //   if command == State::Opening && mine_map[pos.y][pos.x] == -1 {
  //     println!("地雷です");

  //     for y in 1..=BOARD_SIZE {
  //       for x in 1..=BOARD_SIZE {
  //         board[y][x] = State::Opening;
  //       }
  //     }
  //     display(&board, &mine_map);

  //     break;
  //   }
  // }
// }
```

### Iterator

```rust
// Vec<Vec<T>> に impl できないのでラップ
struct Wrap<T>(Vec<Vec<T>>);

impl <T> Wrap<T> {
  // return 1D-iterator with index
  pub fn iter(&self) -> impl Iterator<Item = ((usize, usize), &T)> {
    self.0.iter().enumerate().flat_map(|(y, row)|
      row.iter().enumerate().map(move |(x, column)| ((x, y), column) )
    )
  }
}

// original iterator
struct Arround<I> { itr: I, center: (usize, usize) }
impl<I> Iterator for Arround<I> where I: Iterator {
  type Item = I::Item;

  fn next(&mut self) -> Option<Self::Item> {
    // unknown container size from iterator
    match self.itr.next() {
      // cannot tuple destructuring because
      // doesn't contain type infomation in `self.itr.next(): I::Item`
      Some((index, item)) if within(???, &index) => Some((index, item)),
      _ => None
    }
  }
}

// iterator adapter
trait IterExt : Sized {
  fn arround(self, (usize, usize)) -> Arround<Self>;
}

impl <I: Iterator> IterExt for I {
  // return iterator that itarates 8cells centered on `c`
  fn arround(self, c: (usize, usize)) -> Arround<Self> {
    Arround { itr: self, center: c }
  }
}

fn main () {
  let g = Wrap(vec![vec![1, 2, 3], vec![2, 3, 4]]);
  for t in g.iter().arround((1, 1)) {
    println!("{:?}", t);
  }
}
```
