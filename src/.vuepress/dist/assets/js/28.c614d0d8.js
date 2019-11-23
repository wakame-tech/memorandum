(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{417:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"休日"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#休日"}},[t._v("#")]),t._v(" 休日")]),t._v(" "),s("p",[t._v("今日は完全オフの日だからいろいろやりたかったことをやろうとしたら一日が終わっていました。もしかして一日って案外短い？\nとはいえ、 "),s("code",[t._v("Arcturus")]),t._v(" と "),s("code",[t._v("ピアノ")]),t._v(" の進捗を生み出せたのでよし。")]),t._v(" "),s("p",[s("code",[t._v("Arcturus")]),t._v(" の方はようやくリファクタリングが一段落ついたかなって感じです。 "),s("code",[t._v("Ruby")]),t._v(" にまだ慣れていないので "),s("code",[t._v("Ruby")]),t._v(" なりの書き方というものがわからない。動的型付け言語慣れない。"),s("br"),t._v("\nあと再帰が動かなかったのでデバッグしようと思ったら無限にハマって結局解決できませんでした。\nなので現バージョンでは再帰を使ったコードは禁止にしています。とはいえコードの表現力を狭めてしまうので再帰は追って動くようにします。")]),t._v(" "),s("p",[s("code",[t._v("ピアノ")]),t._v(" の方も少しだけ、今やってる曲が一段落ついたので新しい曲をやってるのですが、今までの曲と違って左手がオクターブのトレモロ("),s("code",[t._v("ド↓ド↑ド↓ド↑... みたいな")]),t._v(")ではなく、アルペジオ的な感じ("),s("code",[t._v("ソ↓レソシーレソシ...みたいな")]),t._v(") で両手で複雑な動きをするので今まで以上に時間がかかります。\n数小節弾けるようになるのに平気で２、３時間かかります。同じところで無限にミスしてやめたくなる。ただ左手が無意識に弾けるようになれば両手演奏のハードルはグッと下がるし、伴奏、メロディともに共通部分があるので最初の山を乗り越えればそんなに時間はかからなそう。８月中の完成を目指したいですね。")]),t._v(" "),s("p",[t._v("あー夏無限にやりたいことある。プログラミング関係で言えばホームページも作りたいし、"),s("code",[t._v("Ruby on Rails")]),t._v(" の勉強本買ったのに途中だったからやりたいし、友人がやってた "),s("code",[t._v("Haskell")]),t._v(" も触ってみたいし、"),s("code",[t._v("Rust本")]),t._v(" 買って "),s("code",[t._v("Rust")]),t._v(" も触りたいし、前々から "),s("code",[t._v("TypeScript")]),t._v(" 気になってるし "),s("code",[t._v("React.js本")]),t._v(" 眠ってるし "),s("code",[t._v("Unity")]),t._v(" でのゲーム制作は放置してしまってるし、そもそも "),s("code",[t._v("基本情報技術者試験")]),t._v(" の勉強しなきゃいけないし。")]),t._v(" "),s("p",[t._v("あとプログラミング関係以外のこともブログネタにしていきたい。"),s("code",[t._v("本を自炊した話")]),t._v(" とか "),s("code",[t._v("紅茶の話")]),t._v(" とか "),s("code",[t._v("アロマテラピーの話")]),t._v(" とか "),s("code",[t._v("小説の話")]),t._v(" とか "),s("code",[t._v("Vtuberの話")]),t._v(" とか "),s("code",[t._v("動画制作の話")]),t._v(" とか、機会があったら。")]),t._v(" "),s("p",[t._v("前置きが少し長くなったので本題。コミットログを追うのは今回で終わるはずです。")]),t._v(" "),s("h1",{attrs:{id:"_8-1-11日目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-11日目"}},[t._v("#")]),t._v(" 8/1(11日目)")]),t._v(" "),s("p",[t._v("大学の期末テストが終わり夏休み突入です。")]),t._v(" "),s("blockquote",{staticClass:"twitter-tweet",attrs:{"data-lang":"ja"}},[s("p",{attrs:{lang:"ja",dir:"ltr"}},[t._v("夏休みに突入した")]),t._v("— わかめ (@wakame_tech) "),s("a",{attrs:{href:"https://twitter.com/wakame_tech/status/1024468986904240129?ref_src=twsrc%5Etfw"}},[t._v("2018年8月1日")])]),t._v(" "),s("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),t._v(" "),s("p",[t._v("確かこの時３日間くらい高熱が出ていたような気がします。完徹すると１週間以内に絶対に体調崩すジンクス。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("commit 1a3cbe5ba1b5aca0bf16db6d639ea638bd186e9a '配列の宣言と添字のアクセス、代入を実装'\n")])])]),s("p",[t._v("配列を実装しました。必須ですね。")]),t._v(" "),s("h3",{attrs:{id:"array-ac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-ac"}},[t._v("#")]),t._v(" array.ac")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("array: = [1, 2, 3]\ni: = 0, j: = 100\narray[i] = j\n")])])]),s("p",[t._v("ちなみに型は内部では "),s("code",[t._v("Array<Int>")]),t._v(" "),s("code",[t._v("(内部表現: ['Array', 'Int'])")]),t._v(" となっていますが、 "),s("code",[t._v("ジェネリックプログラミング")]),t._v(" の機能をまだ実装していないので明示的に型を表現できません。なので型推論に任せています。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("commit 5a34118e04309cd2ded27cc09367226d9d2dc325 '再帰、return文に対応'\ncommit 24a284e9963eb10c9119472665c3abf09f0dcc6f 'returnに関するバグ修正'\n")])])]),s("h3",{attrs:{id:"return-ac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-ac"}},[t._v("#")]),t._v(" return.ac")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Int "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n")])])]),s("h1",{attrs:{id:"_8-2-12日目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-12日目"}},[t._v("#")]),t._v(" 8/2(12日目)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("commit 972bf14aa339c4fa08f4ada14b5340d01fe2bc63 'make node class and do refactoring'\ncommit ad77bb84f982a2010b3e15a88eb893774c9d6cb7 'refactoring traverser'\ncommit e918391d5444fd46a4c443d3f70add7142860ca9 'improve architecture and check to run to m06'\n")])])]),s("p",[t._v("何故かこの日だけコミットメッセージが英語です。何がしたかったのでしょうか🤔"),s("br"),t._v("\nとにかくリファクタリングを進めています。今まではノードを "),s("code",[t._v("['id', 'i', 'Int']")]),t._v(" のように配列で扱っていたのでソースコードがマジックナンバーだらけでした。なので "),s("code",[t._v("VariableNodeクラス")]),t._v(" などを導入してオブジェクト指向化しました。まだソースコードカオスだけど。")]),t._v(" "),s("h1",{attrs:{id:"_8-9-13日目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-9-13日目"}},[t._v("#")]),t._v(" 8/9(13日目)")]),t._v(" "),s("p",[t._v("まる一週間コミットがなかったようです。７連勤ロングシフトのせいだ。まぁ毎日エントリー書いてたし多少はね？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("commit d2b4c0792bc82ceef35721dc2944de229a4f7b53 'm08まで動くように'\ncommit 5fb93105bb7e93dd4bc6f5726e6fcf93114aa9cc 'm09動くように'\ncommit 78cb3bce8adb19b5cf341ad18ee1913a8e6cbd74 'm11まで対応、右辺代入演算子追加'\ncommit 005df1d6123b14045e448f31adea563bbc456a95 'm12まで対応、配列サポート'\n")])])]),s("p",[t._v("リファクタリングを進めながら "),s("code",[t._v("Milestones")]),t._v(" の動作確認をしています。また途中で右辺代入演算子 "),s("code",[t._v("=>")]),t._v(" を導入しています。\nこれは先日買った "),s("code",[t._v("「言語つくる本」")]),t._v(" から着想を得た("),s("s",[t._v("パクリ")]),t._v(")もので左辺値を右辺に代入する演算子です。")]),t._v(" "),s("h3",{attrs:{id:"right-assign-ac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#right-assign-ac"}},[t._v("#")]),t._v(" right_assign.ac")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" square "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("double")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n")])])]),s("p",[t._v("このようにパイプライン演算子と組み合わせることで直感的なコードがかけるはずです。")]),t._v(" "),s("h1",{attrs:{id:"_8-10-14日目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-10-14日目"}},[t._v("#")]),t._v(" 8/10(14日目)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("commit 94bfe7de5e6bad64adfb9e8d207e16dcda5cbc46 'ラムダ引数のときにラムダ式を省略してかけるように'\ncommit bf26ec92aafae2bde5c7990049e9072487c4ca6a 'support omitted lambda expression assignment'\n")])])]),s("p",[t._v("ラムダ式の省略を実装しました。今までは "),s("code",[t._v("{ 引数名:型... -> 文 }")]),t._v(" と書いていたのですが関数の引数や代入時の右辺値など型が明示的にわかっている時は引数と矢印を省略して "),s("code",[t._v("{ 文 }")]),t._v(" のように書けます。\nでは省略された引数はどうやってアクセスするのかというと、自動変数の出番です。これによりとてもスマートにラムダ式をかけるようになりました。")]),t._v(" "),s("p",[t._v("さらに関数呼び出しの方にも手を加えて関数の引数が１つのみかつその引数がラムダ式のとき関数呼び出しの括弧を省略できます。")]),t._v(" "),s("h3",{attrs:{id:"m14-ac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#m14-ac"}},[t._v("#")]),t._v(" m14.ac")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Int "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" _2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n\ndis_sq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Int "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" _2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dis_sq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 25")]),t._v("\n")])])]),s("p",[t._v("ちなみに内部では省略された引数名は "),s("code",[t._v("__argN")]),t._v(" となってます。以下が該当部分。汚いし後で見たらわからなくなりそう。")]),t._v(" "),s("h3",{attrs:{id:"interpreter-rb-一部抜粋"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interpreter-rb-一部抜粋"}},[t._v("#")]),t._v(" interpreter.rb(一部抜粋)")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elsif")]),t._v(" expected_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" given_type\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ラムダ式が省略形のときは引数を補完")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" _is_lambda_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expected_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@@FunctionTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("traversed_args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_sym"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":is_omit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        traversed_args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" expected_type\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@@FunctionTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("traversed_args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_sym"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":fn_type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" expected_type\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@@FunctionTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("traversed_args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_sym"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expected_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ArgNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__arg'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\n")])])]),s("p",[t._v("また "),s("code",[t._v("color_echo")]),t._v(" という "),s("code",[t._v("gem")]),t._v(" を導入して実行画面の見た目も整えました。")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":white")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pickup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/#{@@PremitiveTypes.join('|')}/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":index7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pickup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/#>/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":yellow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pickup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/=+.*?=+/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":index254")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":bold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pickup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<.*?>/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":green")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("このように正規表現と色を指定するだけで標準出力が色付けされます。便利。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://imgur.com/u5yj2K1.png",alt:"画像"}})]),t._v(" "),s("p",[t._v("カラフルで見やすい。ちなみにターミナルは "),s("a",{attrs:{href:"https://hyper.is",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hyper"),s("OutboundLink")],1),t._v(" 使ってます。")]),t._v(" "),s("p",[t._v("これで最新のcommitに追従出来ました。\nこれからは将来的に実装したい要素や実装した要素の解説などをしていきたいと思います。")])])}),[],!1,null,null,null);a.default=e.exports}}]);