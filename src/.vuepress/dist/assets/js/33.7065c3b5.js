(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{424:function(t,r,a){"use strict";a.r(r);var _=a(1),v=Object(_.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"そうだ、ソシャゲ作ろう。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#そうだ、ソシャゲ作ろう。"}},[t._v("#")]),t._v(" そうだ、ソシャゲ作ろう。")]),t._v(" "),a("p",[t._v("いかなるスマホのソシャゲも長続きしない今日この頃。\n理由は")]),t._v(" "),a("ul",[a("li",[t._v("どれも似通っている")]),t._v(" "),a("li",[t._v("素材集めの為の周回が面倒くさい")]),t._v(" "),a("li",[t._v("ガチャで目当てのキャラが出なくて萎える")])]),t._v(" "),a("p",[t._v("新しいタイトルが出たと聞いてゲームシステムの内容を聞いてみれば既存のタイトルと酷似していたりと目新しさが感じられず結局手を出さず終いとなってしまいます。なんなら最早スマホのソシャゲやるより自分にとっての "),a("strong",[t._v("理想のソシャゲを作った方が面白いのでは？")]),t._v(" と考え始めたのが動機です。")]),t._v(" "),a("h1",{attrs:{id:"ゲームシステムの設計がしたい"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ゲームシステムの設計がしたい"}},[t._v("#")]),t._v(" ゲームシステムの設計がしたい")]),t._v(" "),a("p",[t._v("さてソシャゲを作りたいという運びとなりましたが、実際に新規タイトルを1から企画・開発してリリースするのは不可能です。そういうのはスマホゲーム制作企業が数十人単位で何ヶ月もかけて開発するものです。もちろんそんなリソースも能力もないです。")]),t._v(" "),a("p",[t._v("ソシャゲを作りたいというのは正確に言うとゲーム自体を作りたいのではなくてシステムが作りたいのです。目的としてはソシャゲ作りを通じてシステム/ソフトウェア開発の学習をしたいって感じです。"),a("br"),t._v("\nゲームは主にキャラクター、シナリオ、ゲームシステムが要となりますが、サービス開発の学習が主目的なので、今の所"),a("strong",[t._v("シナリオは無し")]),t._v("で、"),a("strong",[t._v("絵は一切書かない")]),t._v("です。キャラクターはユーザーが投稿できるようなシステムにしようと考えています。\n"),a("s",[t._v("妖怪惑星クラリスかな？")]),t._v("\n最近は　"),a("a",{attrs:{href:"https://charat.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CHARAT"),a("OutboundLink")],1),t._v(" を始めとするアバター作成サービスや "),a("a",{attrs:{href:"https://waifulabs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Waifu Labs"),a("OutboundLink")],1),t._v("などのAIによる画像自動生成、 "),a("a",{attrs:{href:"https://biz.moneyforward.com/blog/21173/#i-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("フリー素材"),a("OutboundLink")],1),t._v(" などが充実しているのでユーザーにこれらのサービスを使ってもらうことで代替になると考えています。")]),t._v(" "),a("p",[t._v("また、"),a("a",{attrs:{href:"https://azure.microsoft.com/ja-jp/services/playfab/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure PlayFab"),a("OutboundLink")],1),t._v(" や、 "),a("a",{attrs:{href:"https://github.com/heroiclabs/nakama",target:"_blank",rel:"noopener noreferrer"}},[t._v("nakama"),a("OutboundLink")],1),t._v(" 等のソーシャルゲームサーバのフレームワーク・BaaSがありますが、これらは使用しません。(参考にすることはあるかもしれない)")]),t._v(" "),a("h1",{attrs:{id:"要求定義"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要求定義"}},[t._v("#")]),t._v(" 要求定義")]),t._v(" "),a("p",[t._v("以上の要求をまとめると")]),t._v(" "),a("ul",[a("li",[t._v("理想のソシャゲもどきが作りたい")]),t._v(" "),a("li",[t._v("グラフィックはどうでもいい")]),t._v(" "),a("li",[t._v("Web開発の勉強をしたい")])]),t._v(" "),a("p",[t._v("となります。")]),t._v(" "),a("h1",{attrs:{id:"技術まわりの話"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技術まわりの話"}},[t._v("#")]),t._v(" 技術まわりの話")]),t._v(" "),a("h2",{attrs:{id:"アーキテクチャ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アーキテクチャ"}},[t._v("#")]),t._v(" アーキテクチャ")]),t._v(" "),a("p",[t._v("個人開発ですが、最近気になっている "),a("code",[t._v("マイクロサービスアーキテクチャ")]),t._v(" を実践したいです。また、フロントエンドは "),a("code",[t._v("クリーンアーキテクチャ")]),t._v(" を勉強しつつ実践していきたいと考えてます。")]),t._v(" "),a("h2",{attrs:{id:"インフラ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インフラ"}},[t._v("#")]),t._v(" インフラ")]),t._v(" "),a("p",[t._v("サービスを複数つくる予定なので "),a("code",[t._v("Kubernetes")]),t._v(" によりコンテナオーケストレーションしたいです。 "),a("code",[t._v("k8s")]),t._v(" ずっと触りたいって言ってたし。もちろんサーバレスです。"),a("code",[t._v("AWS EKS")]),t._v(" あたりを使いたいところだけど学習コストがえげつなさそうなので最初は "),a("code",[t._v("docker-compose")]),t._v(" でがんばります。")]),t._v(" "),a("h2",{attrs:{id:"バックエンド"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#バックエンド"}},[t._v("#")]),t._v(" バックエンド")]),t._v(" "),a("p",[t._v("前述の通り "),a("code",[t._v("なんちゃってマイクロサービス")]),t._v(" にしたいので各サービスサーバーとクライアントの間に "),a("code",[t._v("Backend For Frontend")]),t._v(" サーバーをはさみたいと考えています。流行に乗りたい。"),a("br"),t._v("\n言語は "),a("code",[t._v("TypeScript")]),t._v("。\nAPIはGraphQLで頑張りたいので、RDBのGraphQLなORMとCRUDを提供してくれる "),a("code",[t._v("Prisma v1")]),t._v(" を使用しようと考えています。")]),t._v(" "),a("h2",{attrs:{id:"フロントエンド"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#フロントエンド"}},[t._v("#")]),t._v(" フロントエンド")]),t._v(" "),a("p",[a("code",[t._v("Vue.js")]),t._v(" + "),a("code",[t._v("TypeScript")]),t._v(" 大好き人間なので、またも、"),a("code",[t._v("nuxt.js")]),t._v(" + "),a("code",[t._v("TypeScript")]),t._v(" で行きます。 Vue 3.x で導入予定の "),a("code",[t._v("vue-function-api")]),t._v(" も導入します。"),a("br"),t._v("\nCSSフレームワークは直感的にかけてとてもリッチな "),a("code",[t._v("Vuetify 2.0")]),t._v(" を導入予定です。")]),t._v(" "),a("h1",{attrs:{id:"大切なこと"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大切なこと"}},[t._v("#")]),t._v(" 大切なこと")]),t._v(" "),a("p",[t._v("つらつらと色々な願望を書いてきましたが、最後に大切なことを思い出しました。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://miro.medium.com/max/1200/1*qkg_vW-2oLMlT51w9GiWhQ.jpeg",alt:""}})]),t._v(" "),a("p",[t._v("大事なことなのでもう一回")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://miro.medium.com/max/1200/1*qkg_vW-2oLMlT51w9GiWhQ.jpeg",alt:""}})]),t._v(" "),a("h1",{attrs:{id:"まとめ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#まとめ"}},[t._v("#")]),t._v(" まとめ")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://miro.medium.com/max/1200/1*qkg_vW-2oLMlT51w9GiWhQ.jpeg",alt:""}})]),t._v(" "),a("p",[t._v("『理想のソーシャルゲームが作りたい2 -モデル定義編-』へ続く")])])}),[],!1,null,null,null);r.default=v.exports}}]);