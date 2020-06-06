---
title: もう二度とTeXを書かないようにするために
date: 2018-08-11
tags: [Markdown,Tex]
vssue: false
---

# LaTeXがきらいです
理系ならほとんどが `TeX` による組版を経験したことがあると思う。
まぁ `Microsoft Word` とか `手書き` (弊学科も１年生のときは手書きでした)とかでレポートを作成しているところもあるけど。
ところで `TeX` は好きですか？ 多くの人はNoと答えると思う。
 なぜなら、 `TeX` は少し番号リストとかを使おうとするだけで記述が煩雑だし、特に数式を表現するとき `{}` が何重にもネストされていてコンパイルエラーの温床となるしであまり良い思いがないのも事実。

 そこで今回は `Pandoc` なるツールを紹介しようと思います。(通販風)
 `Pandoc` は `Markdown`, `HTML`, `LaTeX`, `reStructuredText` などを様々な形式(`Markdown`, `reST`, `HTML`, `LaTeX`, `Word`, `PDF` ...)に変換出来るドキュメント変換ツールです。  

この `Pandoc` を利用して `オレオレMarkDown→PDF変換スクリプト`、`m2p` を作りました。これでレポート書く速度倍ぐらいになってるはず。  
流れはこうです。

1. `report.md` を `replace.rb` によってプリプロセス
2. `Pandoc` によって `report.md` を `report.tex` に
3. `report.tex` をテンプレートである `main.tex` に埋め込む
4. `main.tex` をコンパイル、PDF生成

中身も少し見てみよう。

### m2p.sh(抜粋)
```bash
# md -> tex by using pandoc
if [ "$DEBUGGING" = "TRUE" ]; then
  pandoc ${FILENAME}_m.md -o ${FILENAME}.tex > /dev/null
else
  pandoc ${FILENAME}_m.md -o ${FILENAME}.tex
fi

# delete "\tightlist"
sed -i '' '/\\tightlist/d' ${FILENAME}.tex

# $1.tex plant into main
sed -i '' -e s/\\include\{.*\}/\\include\{${FILENAME}\}/ main.tex

# compile main.tex
if [ "$DEBUGGING" = "TRUE" ]; then
  platex -halt-on-error -interaction=nonstopmode -file-line-error main.tex
else
  platex -halt-on-error -interaction=nonstopmode -file-line-error main.tex > /dev/null
fi

# dvi -> pdf
dvipdfmx main.dvi
mv main.pdf ${FILENAME}.pdf

# remove files
rm ./${FILENAME}_m.md
rm ./*.dvi
rm ./*.out
rm ./*.log
rm ./*.aux
```

### replace.rb(抜粋)
```ruby
# @ ~~~ => title
buffer.gsub!(/^@(.*)$/, '')
title = $1

# $< ~~~ >$ => equation
buffer.gsub!(/\$</, '\begin{equation}')
buffer.gsub!(/>\$/, '\end{equation}')

# =< ~~~ >= => eqnarray
buffer.gsub!(/=</, '\begin{eqnarray}')
buffer.gsub!(/>=/, '\end{eqnarray}')

# `< ~~~ >` => lstlisting
buffer.gsub!(/^\`<(.*)$/, '\begin{lstlisting}[numbers=left, caption=\1, frame=single]')
buffer.gsub!(/^>\`/, '\end{lstlisting}')

# *< ~~~ >* => thebibliography
buffer.gsub!(/^\*<$/, '\begin{thebibliography}{99}')
buffer.gsub!(/^>\*/, '\end{thebibliography}')
```

サンプルはこんなかんじです。

```
@1 XXの実験

# 理論

=<
    x &=& 1 \\
    y &=& 2
>=

# 方法
## その1

$<
    1 + 1 = 2
>$

## その2
`<hello.js
    console.log('Hello, World!')
>`

*<
 \bibbook{タイトル}{2017}{出版社}
 \bibweb{ぺーじ}{http://hoge.com}
>*
```

ついでに `TeX` による数式の記述が10倍早くなる方法も紹介します。  
[Web Equation](https://webdemo.myscript.com/views/main/math.html)  
これは手書きの数式を `TeX` 形式に変換してくれるWebサービスです。結構複雑な式でも難なく変換できるので重宝しています。  

これで `TeX` を一文字たりとも書かなくて済むようになった。  
最後にアレを言いたい。  

## **まだTeXで消耗してるの？**

# 参考文献
* [Qiita - 多様なフォーマットに対応！ドキュメント変換ツールPandocを知ろう](https://qiita.com/sky_y/items/80bcd0f353ef5b8980ee)