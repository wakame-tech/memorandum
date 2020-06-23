---
title: 📅 GraphQLのクエリの引数で配列を使いたい時
date: 2018-12-01
tags: [web, GraphQL]
---

# 趣旨
12月1日から25日まで毎日ちょっとした技術的な知見を忘備録、日記かねて書く

## GraphQLのクエリの引数で配列を使いたい時

### スキーマ
```
query {
  harvest(fruits: [String!]!): Bool!
}
```

### 呼び出し
```js
const fruits = ['apple', 'grape']
callAPI(`query {
  harvest(fruits: ${fruits})
}`)
```

こう書いてしまうとテンプレート文字列のなかの `${fruits}` は `"apple,grape"` と展開され配列にならないので、

### 正しい呼び出し
```
const fruits = ['apple', 'grape']
const arrayToString = array => array.map(e => `"${e}"`).join(',')
callAPI(`query {
  harvest(fruits: [${arrayToString(fruits)}])
}`)
```

のように変換をかけてあげて `'["apple", "grape"]'` のような形式になるようにしましょう。

少し嵌った。