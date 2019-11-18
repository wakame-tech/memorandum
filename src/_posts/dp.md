---
title: 🎒 ナップザック問題
date: 2016-10-20
tag: [programming, 大学]
---

`オブジェクト指向` の授業でナップザック問題を解くプログラムを解く課題が出されたので解説記事を書こうと思います。

アルゴリズムにそんなに詳しいわけではないので間違っている部分があるかと思いますがその点留意してください。前期のデータ構造とアルゴリズム落としてるし。😇😇😇

# 典型的なDPの問題
ナップザック問題は `蟻本` を始めとした数々のアルゴリズム解説書で取り上げられている競技プログラミングにおいては有名な問題です。

解法は愚直に全探索でやっても良いのですが、一般的には `DP(動的計画法)` が用いられることが多いです。情報工学科の人であればもう覚えてないかもしれませんが、去年の後期のプログラミング演習でやりましたね。

動的計画法についての詳しい説明は省きます。というか自分も競技プログラミングそんなにやってきてないからあまり使ったことないだけ。

前置きはこのくらいにしておいて、ソースコードの解説に入ります。

# いつものとか初期化とか

```c
#include <stdio.h>

#define max(a, b) (a) > (b) ? (a) : (b)

int main() {
	// 荷物の総個数
	const int num = 6;
	// 荷物の名前
	const char object[num] = { 'A', 'B', 'C', 'D', 'E', 'F' };
	// 価値
	const int v[num] = { 700, 400, 800, 1200, 300, 500 };
	// 重量
	const int w[num] = { 3, 2, 4, 5, 2, 1 };
	// 最大重量
	const int limit_weight = 10;

	// 動的計画法を用いる
	// DPテーブル
	int dp[num + 1][limit_weight + 1] = { 0 };

    .
    .
```


前半は提出フォームにあるテンプレート通りほぼそのままです。
注目していただきたいのは最後の部分でDPの状態を保存するためのテーブルです。

今回の場合は横軸が `重さ` 、縦軸が `品物の種類` に対応しています。

このテーブルを漸化式のように徐々に埋めていきます。

```c
	for(int i = 0; i < num; i++) {
		for(int j = 0; j <= limit_weight; j++) {
			if(j >= w[i]) {
				dp[i + 1][j] = max(dp[i][j], dp[i][j - w[i]] + v[i]);
			} else {
				dp[i + 1][j] = dp[i][j];
			}
		}
	}

	int max_value = dp[num][limit_weight];

    .
    .
```

続いては価値の最大値を求める部分です。
`i` は `品物` について、`j` は `すべての重さ` についてループします。

for文の中では **重さjキロ制限** で `品物0からi番` のうちで最大の価値を求めています。  

ポイントは品物が1種類ずつ増えていくという所で、`0` から`i番目` の中の最大価値がわかっている時に `i+1番目` の品物を入れた方が価値が高くなる場合はそれまでの最大価値に`i+1番目` の品物の価値を足し、対応する重さの場所を更新します。入れない方が良い場合はそのままです。

![図1 DP漸化式と動的計画法のイメージ](https://i.imgur.com/3XhbjRV.png)

このようにして二重のfor文によってDPテーブルを埋めていきます。  

今、知りたいのは **重さ10キロ制限** で **すべての品物** の中から選んだ時の最大価値なのでその値は `dp[num][limit_weight]` であり、これが最大値となります。  

以上により、価値の最大化をすることができました、大抵のナップザック問題は最大値を求めるだけでよいのですが、今回はどの品物を使用したかを特定しなければなりません。  

なので、DPテーブルをもとにどの品物を使用したかを求めていきたいと思います。 
上で説明したようにDPテーブルの`i+1番目`の値は`i番目`の値から算出されるので、逆に`i+1番目`の値から`i番目`の値を逆算することができます。  
従って、`i+1番目`の値と`i番目`の値を見比べれば、`i番目`の品物を使用したかどうかがわかります。  


このように、`最大価値 V`、`制限重量 W`の状態からスタートして、もし`品物i(価値 v, 重さ w)`を取り除いた状態(`価値 V - v, 重量 W - w`)に相当するDPテーブルの値が同じであれば、辻褄が合っている、つまりその`品物i` が選択されているということになります。  
これをすべての荷物に対してループすることによって、どの品物を使用したかが特定できます。  

![図2 DPテーブルを逆にたどって使用した品物を特定する](https://i.imgur.com/GS22LGn.png)

以上のことをするソースコードが以下になります。

```c
    // DPテーブルを逆にたどる
	for(int i = num, rest = limit_weight; i > 0; i--) {
		// i番目の品物を使用しているならその分だけ価値と重量が増えるので
		if(dp[i][rest] - dp[i - 1][rest - w[i - 1]] == v[i - 1]) {
			sol[i - 1] = 1;
			rest -= w[i - 1];
		}
	}
```

これで、問題を解くことができました。 

1時間クオリティで説明も図も適当でわかりにくかったと思いますが、皆さんの一助になれば幸いです。

一応、全体のソースコードはこちらになります。

<https://gist.github.com/wakame-tech/6cc0a6590eae9afa6eb6ec6b9c6a02fa>

# 参考
* <https://qiita.com/drken/items/a5e6fe22863b7992efdb>