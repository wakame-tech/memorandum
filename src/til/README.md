# Today I Learned 🔥
チュートリアルや入門したものについてまとめていきます.

# Category
- JavaScript / TypeScript
  - Vue.js
  - node.js
- C#
  - Unity
- Python
  - Machine Learning
  - NLP
  - Image Processing
- C / C++
  - University Assignments
  - Lab Assignments
  - Game Programming (Siv3D)
- Go
- Swift
  - iOS App dev
- Elm
- Ruby
- R
- Kotlin
- Database
  - FireStore
  - SQL
- Infra / CICD
  - Docker
- Design Petterns / Architecture

## Diary
## 1/18 (Fri)
* `automation`: アイテム実装
* `Docker`の基礎知識

## 1/19 (Sat)
* `automation`: キャラクター強化、ロビー画面デザインなど
* アニメキャラクターの髪の色抽出の方法を模索していた

## 1/20 (Sun)
* 英語の勉強
* 応用数学

## 1/21 (Mon)
* 確率統計
* 応用数学
* 数理計画法

## 1/22 (Tue)
* 情報理論

## 1/23 (Wed)
* 蟻本通い合宿1日目

## 1/24 (Thu)
* 蟻本通い合宿2日目

## 1/25 (Fri)
* 蟻本通い合宿3日目

## 1/26 (Sat)
* 高熱

## 1/27 (Sun)
* `automation` スキル実装
* ~~LALR法のコードリーディング~~ 読めなかった

## 1/28 (Mon)
* 自作PCセットアップ
* [AtCoder Nikkei Contenst](https://atcoder.jp/contests/nikkei2019-qual) 軽くやった

## 1/29 (Tue)
* 動画制作(環境構築)
* ピアノ

## 1/30 (Wed)
* 動画制作(企画・素材収集)
* 動画制作(OP作成)

## 1/31 (Thu)
* 動画制作(OP作成)
* 動画制作(音声)

## 2/1 (Fri)
* 動画アップロード
* ピアノ

## 2/2 (Sat)
* `satellite`: C#のコーディングスタイルに、リファクタリング
* Unityシェーダーの概要
* アニメ

## 2/3 (Sun)
* QUICを理解しようとした
* Rust を理解するために `microps` の Rust 移植を試みる

## 2/4 (Mon)
* ピアノ進まない
* `microps_rust`: C言語のFFI試した
* `microps_rust`: 移植作業、Rust3日目だからなんもわからん
* `satellite::mavis_cli`: Python3 + matplotlib + numpy でパーリンノイズからヒートマップ作成
* `md2mv`: とりあえず Aviutl の exoファイル をマークダウンから生成する方向で考えている
* マイクロカーネルなるものを知った

## 2/5 (Tue)
* ~~ABCのD問題を解説ACしたい(予定)~~
* Rust一通りの仕様をおさらい
* `microps_rust`: libc, nixクレート導入, unsafeの中でrawポインタだらけのプログラムに
* `microps_rust`: 結局C言語と変わらなくなってしまいそうだからどうしようか迷ってる
* パケットに対する理解を深めた
* ルータ自作本とTAPL欲しくなった

## 2/6 (Wed)
* Rustで `Vec<Vec<T>>` に対するイテレータを作ろうとしたら１日とかした、[努力の跡](https://gist.github.com/wakame-tech/c9cb073c7af7cbbebedabd85870ee810)

## 2/7 (Thu)
* `md2mv`: exoファイルの仕様調べた

## 2/8 (Fri)
* `md2mv`: 汚いコードながらも拡張マークダウンからexoファイル生成できた

## 2/9 (Sat)
* ピアノ
* コード理論の本読んでた
* future baseの作り方学んだ

## 2/10 (Sun)
* 部屋の掃除
* [みんプロ](https://atcoder.jp/contests/yahoo-procon2019-qual)、できなかった

## 2/11 (Mon)
* `md2mv` のリファクタリングを終わらせた

## 2/12 (Tue)
* [Houdini](http://www.sidefx.jp/index.php?option=com_content&view=article&id=101) めっちゃやりたくなる
* ちょっと `automation` やった

## 2/13 (Wed)
* `automation`: 周回フィルター実装中, バトルのシステムを考えなければいけない
* Docker でマイクラのサーバーを立てた

## 2/14 (Thu)
* gradle なんもわからない
* Docker も何もわからない
* コンテナを作成: `docker run -v //c/Users/...:/home --name spigot-server -i -p 25565:25565 [name]:[tag]`
* コンテナの中にアクセス: `docker exec -it spigot-server sh`
* `Spigot on Docker` と `Spigot plugin in Kotlin with IDEA` の環境を整えた

## 2/15 (Fri)
* kotlin
* gradle便利

## 2/16 (Sat)
* `automation`: ログインボーナス実装
* ABC118
* 新概念コン論文を読むところから
* インターン応募した

## 2/17 (Sun)
* 終日外出

## 2/18 (Mon)
* 

## 2/19 (Tue)
* 

## 2/20 (Wed)
* `Anko` 入門
* `Flutter` 入門
* `automation-server`: TS移植
* `portfolio`, `automation-client`: 脆弱性解消のため、Webpack3 -> 4系に移行

## 2/21 (Thu)
* `linked-inventory`: コマンド引数をパラメータとオプションに分けるやつとか書いた
* アニメ

## 2/22 (Fri)
* 点群の凸包(convex hull) と凹包(concave hull) を求めるアルゴリズムを実装しようとした
* <https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#C.2B.2B>
* けど、JavaScriptからKotlinへの移植がつらすぎて断念
* [concaveman](https://github.com/mapbox/concaveman/blob/master/index.js)
* [rbush](https://github.com/mourner/rbush/blob/master/index.js)
* 格子平面上の格子点群なら凹包を厳密に求める必要がなさそうなことが分かったので疑似的な凹包のアルゴリズム実装した

## 2/23 (Sat)
* 明日やりたいこと

- [x] `automation-client`: Vuexをちゃんとつかう
- [ ] `automation-client`: ダンジョン部分
- [ ] `automation-server-ts`: 移植進める
- [ ] `takamari`: レイアウト学ぶ <https://flutter.io/docs/development/ui/layout>

## 2/24 (Sun)
*  遊んでた & 高熱

## 2/25 (Mon)
* Vue.jsというかJSが嫌いになった

## 2/26 (Tue)
* DOMElementと座標使う系ゲームどこまでも相性が悪い気がする
* Elm入門

## 2/27 (Wed)
* [pixiv sensei](https://sensei.pixiv.net/)

## 2/28 (Thu)
* [pixiv sensei](https://sensei.pixiv.net/)
* Open3Dによる点群構造判定やろうとした
* VS Code live share 神

# 2月下旬

- [x] インターン面接

## 3/1 (Fri)
* [pixiv sensei](https://sensei.pixiv.net/)
* 模写

## 3/2 (Sat)
* ピアノ
* [pixiv sensei](https://sensei.pixiv.net/)
* 模写
* #いいねの数だけWebアプリ作る １つめ

## 3/3 (Sun)
* 数B 数列 漸化式
* `satellite`: コンポーネント指向でリファクタリング

## 3/4 (Mon)
* インターン✨
* Elm素振り

## 3/5 (Tue)

## 3/6 (Wed)

# 3月上旬


# 3月下旬

# 4月上旬

