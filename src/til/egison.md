# Egison Tutorial - 2018/9/17
## §1 Calculate numbers
### 算術演算
> We can do arithmetic operations with '+', '-', '*', '/', 'modulo' and 'power'.

```
(+ 1 2)
(- 30 15)
(* 10 20)
(/ 20 5)
(modulo 17 4)
(power 2 10)
```

### ネスト
> We can write nested expressions.

```
(* (- 100 1) (+ 100 1))
```

### 分数
> We are supporting rational numbers.
```
(+ (/ 2 3) (/ 1 5))
(/ 42 84)
```

### 小数
> We are supporting floats, too.
```
(f.+ 10.2 1.3)
(f.* 10.2 1.3)
```

### 分数 -> 小数
> We can convert a rational number to a float number with 'rtof'.

```
(rtof (/ 1 5))
(rtof (/ 1 100))
```

### 配列
> We can handle collections of numbers.
> We construct collections with '{}'.

```
{}
{10}
{1 2 3 4 5}
```

### `car` と `cdr`
> We can decompose a collection using the 'car' and 'cdr' function.

```
(car {1 2 3 4 5})
(cdr {1 2 3 4 5})
(car (cdr {1 2 3 4 5}))
```

`car` で先頭1要素、 `cdr` で残りの配列を取り出せます。
`x:xs = [1, 2, 3]` 的な？

### Take
> With the 'take' function, we can extract a head part of a collection.'.

```
(take 0 {1 2 3 4 5})
(take 3 {1 2 3 4 5})
```

先頭n要素を取り出す `take`

### 無限リスト
> We can handle infinite lists.
> For example, 'nats' and 'primes' are an infinite list that contains all natural numbers and prime numbers respectively.
> Try to extract a head part from them.

```
(take 10 nats)
(take 30 nats)
(take 10 primes)
(take 30 primes)
```

`nats` は自然数列で `primes` は素数列ですね。

### 部分適用
> We can create a partially applied function using '$' as an argument.

```
((* $ 2) 10)
((modulo $ 3) 10)
```

`$` の部分が引数みたいになる。

### Map
> With the 'map' function, we can operate each element of the collection at once.

```
(take 100 (map (* $ 2) nats))
(take 100 (map (modulo $ 3) nats))
```

おなじみ `Map`。
`NaturalNumbers().map { it * 2 }.take(100)` 的な？

### Fold
> With the 'foldl' function, we can gather together all elements of the collection using an operator you like.

```
(foldl + 0 {1 2 3 4 5})
(foldl * 1 {1 2 3 4 5})
```

左畳み込みですね。1から100までの総和は `(foldl + 0 (take 100 nats))` で得られますね。  

`1 + 1/2 + ... 1/100` は `(rtof (foldl + 0 (take 100 (map (/ 1 $) nats))))` で得られます。

## §2 Basics of functional programming
### 変数定義
> We can bind a value to a variable with a 'define' expression.
> We can easily get the value we bound to a variable.

```
(define $x 10)
x // 10
(define $y (+ 1 x))
y // 11
```

### 再帰
> We support recursive definitions. It enables us to define an collection with infinite elements.
```
(define $ones {1 @ones})
(take 100 ones) // {1 1 ... 1}
(define $nats {1 @(map (+ $ 1) nats)})
(take 100 nats)
(define $odds {1 @(map (+ $ 2) odds)})
(take 100 odds)
```
`ones` は無限に1が続く無限リストとなっています(試しに `(length ones)` したらTime outした)。

### ラムダ式
> We can create a function with a 'lambda' expression. Let's define functions and test them.

```
(define $increment (lambda [$x] (+ x 1)))
(increment 10)
(define $multiply (lambda [$x $y] (* x y)))
(multiply 10 20)
(define $sum (lambda [$n] (foldl + 0 (take n nats))))
(sum 10)
```

ラムダ式です。 階乗を求めるには `(define $fact (lambda [$n] (foldl * 1 (take n nats))))` ですかね。

### 真偽値
> We can compare numbers using functions that return '#t' or '#f'.
> '#t' means the true.
> '#f' means the false.
> Functions that return '#t' or '#f' are called "predicates".

```
(eq? 1 1) // #t
(gt? 1 1)
(lt? 1 1)
(gte? 1 1)
(lte? 1 1)
```

`#t(true)` または `#f(false)` を返す関数を `predicates` と呼ぶそうです。  
`predicate` という単語自体は知っていたけど、`述語` という意味があるらしい。

### take-while
> With the 'take-while' function, we can extract all head elements that satisfy the predicate.
> 'primes' is a infinite list that contains all prime numbers.

```
(take-while (lt? $ 100) primes)
(take-while (lt? $ 1000) primes)
```

`Primes().takeWhile { it < 100 }` みたいな感じか。

### Filter
> With the 'filter' function, we can extract all elements that satisfy the predicate.

```
(take 100 (filter even? nats))
(take 100 (filter prime? nats))
(take 100 (filter (lambda [$p] (eq? (modulo p 4) 1)) primes))
```

やっと来た、`filter`。  
素数列のうち、4で割って3余る素数の先頭100個は `(take 100 (filter (lambda [$p] (eq? (modulo p 4) 3)) primes))` で得られる。

### Tuples
> We combine numbers using '[]'.
> These things are called 'tuples'.

```
[1 2]
[1 2 3]
```

タプルもあるようだ。

> Note that a tuple that consists of only one element is equal with that element itself.

```
> (eq? [1] [[[1]]])
#t
> (eq? [[1] [2]] [1 2])
#t
> (eq? [2] 2)
#t
> 
```

要素が1つのタプルはその値と等しいらしい。

### Zip
> With the 'zip' function, we can combine two lists as follow.

```
(take 100 (zip nats nats)) // {[1 1] [2 2] ...}
(take 100 (zip primes primes))
```

2つのコレクションの各要素同士のタプルのコレクションを返す。

フィボナッチ数列を返す関数は `(define $fibs {1 1 @(map + (zip fibs (cdr fibs)))})` となる。


## §3 Basics of pattern-matching

### `match-all`, `join` パターン

> Let's try pattern-matching against a collection.
> The 'join' pattern divides a collection into two collections.
> Please note that the 'match-all' expression enumerates all results of pattern-matching.

```
(match-all {1 2 3} (list integer) [<join $hs $ts> [hs ts]])
// {[{} {1 2 3}] [{1} {2 3}] [{1 2} {3}] [{1 2 3} {}]}
```

`join` は対象を二分する。  
順番が考慮され、 `match-all` なのでグループを2つに分けるすべての分け方が列挙される。

### `cons` パターン
> Try another pattern-constructor 'cons'.
> The 'cons' pattern divides a collection into the head element and the rest collection.

```
(match-all {1 2 3} (list integer) [<cons $x $xs> [x xs]])
// {[1 {2 3}]}
```

`cons` はグループを先頭とそれ以外に二分するようだ。

### ワイルドカード `_`
> '_' is a wildcard and matches with any objects.

```
(match-all {1 2 3} (list integer) [<cons $x _>  x])
// {1}
(match-all {1 2 3 4 5} (list integer) [<join $hs _> hs])
// {{} {1} {1 2} {1 2 3} {1 2 3 4} {1 2 3 4 5}}
```

### 非線形パターンのマッチング
> We can write non-linear patterns.
> Non-linear pattern is a pattern that allows multiple occurrence of same variables in a pattern.
> Patterns that begins with ',' matches the object when it is equal with the expression after ','.

```
(match-all {1 1 2 3 3 2} (list integer) [<join _ <cons $x <cons ,x _>>> x])
// {1 3}
(match-all {1 1 2 3 3 2} (list integer) [<join _ <cons $x <cons ,(+ x 1) _>>> x])
// {1 2}
```

非線形パターンとはパターンの中に変数が複数回現れるマッチングの事を言うらしい。
`,` のより後ろが非線形パターンマッチングとして扱われるらしい。
上の例では2連続する要素を取り出している。
下の例では恐らく隣接2要素の差が1であるもののみをを取り出していると思われる。  

やばい、理解するのに時間かかった。

> We can pattern-match against infinite collections.
> We can enumerate twin primes using pattern-matching as follow.

パターンマッチは無限リストに対しても使用でき、例えば双子素数の組を先頭10組もとめるには、

```
(take 10 (match-all primes (list integer) [<join _ <cons $p <cons ,(+ p 2) _>>> [p (+ p 2)]]))
// {[3 5] [5 7] [11 13] [17 19] [29 31] [41 43] [59 61] [71 73] [101 103] [107 109]}
```

とすればよいことはすぐに分かる  
よろしいか？？？(某数学教授風)(内輪ネタ)

### not-pattern: `!`

> A pattern that has '!' ahead of which is called a not-pattern.
> A not-pattern matches when the target does not match against the pattern.

```
(match-all {1 1 2 2 3 4 4 5} (list integer) [<join _ <cons $x <cons  ,x _>>> x])
(match-all {1 1 2 2 3 4 4 5} (list integer) [<join _ <cons $x <cons !,x _>>> x])
```

### and-pattern:`&` 

> A pattern whose form is '(& p1 p2 ...)' is called an and-pattern.
> An and-pattern is a pattern that matches the object, if and only if all of the patterns are matched.
> And-pattern is used like an as-pattern in the following sample.

```
(match-all {1 2 4 5 6 8 9} (list integer) [<join _ <cons $x <cons (& !,(+ x 1) $y) _>>> [x y]])
// {[2 4] [6 8]}
```

### or-pattern:`|`
> A pattern whose form is '(| p1 p2 ...)' is called an or-pattern.
> An or-pattern matches with the object, if the object matches one of given patterns.
> Using it, We can enumerate prime triplets.

```
(take 10 (match-all primes (list integer) [<join _ <cons $p <cons (& $m (| ,(+ p 2) ,(+ p 4))) <cons ,(+ p 6) _>>>> [p m (+ p 6)]]))
// {[5 7 11] [7 11 13] [11 13 17] [13 17 19] [17 19 23] [37 41 43] [41 43 47] [67 71 73] [97 101 103] [101 103 107]}
```

## §4 Basics of pattern-matching

### `multiset`, Matcher
> We can also pattern-match against multisets and sets.
> We can change the way of pattern-matching by just changing a matcher.

```
(match-all {1 2 3} (list integer)     [<cons $x $xs> [x xs]])
// {[1 {2 3}]}
(match-all {1 2 3} (multiset integer) [<cons $x $xs> [x xs]])
// {[1 {2 3}] [2 {1 3}] [3 {1 2}]}
(match-all {1 2 3} (set integer)      [<cons $x $xs> [x xs]])
// {[1 {1 2 3}] [2 {1 2 3}] [3 {1 2 3}]}
```

### `join` のもう一つの使い方
> Try another pattern-constructor 'join'.
> The 'join' pattern divides a collection into two collections.

```
(match-all {1 2 3 4 5} (list integer)     [<join $xs $ys> [xs ys]])
(match-all {1 2 3 4 5} (multiset integer) [<join $xs $ys> [xs ys]])
(match-all {1 2 3 4 5} (set integer)      [<join $xs $ys> [xs ys]])
```

### `multiset` に対する非線形パターンマッチング

```
> (match-all {1 1 2 3 2} (multiset integer) [<cons $x <cons ,x _ >> x])
{1 1 2 2}

> (match-all {1 1 2 3 2} (multiset integer) [<cons $x <cons ,(+ x 2) _ >> x])
{1 1}

> (match-all {1 2 1 3 2} (multiset integer) [<cons $x !<cons ,x _ >> x])
{3}
```

### 自然数のペアー、トリプレット

> The following samples enumerate pairs and triplets of natural numbers.
> Note that Egison really enumerates all results.

```
(take 10 (match-all nats (set integer) [<cons $m <cons $n _ >> [m n]]))
// {[1 1] [1 2] [2 1] [1 3] [2 2] [3 1] [1 4] [2 3] [3 2] [4 1]}
(take 10 (match-all nats (set integer) [<cons $l <cons $m <cons $n _ >>> [l m n]]))
// {[1 1 1] [1 1 2] [1 2 1] [2 1 1] [1 1 3] [1 2 2] [1 3 1] [2 1 2] [2 2 1] [3 1 1]}
```

## §5 Symbolic computation
### 未宣言の変数

> Egison treats unbound variables as a symbol.

```
> (+ a 1)
(+ a 1)

> (+ b b)
(* 2 b)

> (+ (* 2 a) b)
(+ (* 2 a) b)
```

`Egison` では未宣言の変数はエラーにならず、シンボルとして扱われるようです。

### 正規形

> Egison automatically expands an expression to the canonical form.

```
> (* (+ a b) (+ a b))
(+ a^2 (* 2 a b) b^2)

> (** (+ a b) 2)
(+ a^2 (* 2 a b) b^2)

> (** (+ a b) 3)
(+ a^3 (* 3 a^2 b) (* 3 a b^2) b^3)
```

シンボルが含まれる式は自動的に展開とかしてくれるらしいです。

### 虚数

> Egison can handle complex numbers.
> "i" represents the imaginary unit.

```
> (* i i)
-1

> (** (+ 1 i) 2)
(* 2 i)

> (** (+ 1 i) 4)
-4
```

### 累乗根

> Egison can handle algebraic numbers such as "(sqrt 2)" and "(sqrt 3)".

```
> (sqrt 12)
(* 2 (sqrt 3))

> (* (sqrt 2) (sqrt 2))
2

> (* (sqrt 2) (sqrt 3))
(sqrt 6)

> (** (rt 3 2) 3)
2
```

### 三角関数

> Egison can handle the trigonometric functions such as "(cos θ)" and "(sin θ)".

```
> (+ (cos θ)^2 (sin θ)^2)
1
```

## §6 Differential geometry: tensor analysis
### ベクトル

> We can handle vectors.
> We construct vectors with '[| |]'.

```
> [| 1 2 3 |]
[| 1 2 3 |]

> (+ [| 1 2 3 |] [| 1 2 3 |])
[| 2 4 6 |]
```

### 

> We can append an index to a vector.

```
> (+ [| 1 2 3 |]_i [| 1 2 3 |]_i)
[| 2 4 6 |]_i

> (+ [| 1 2 3 |]_i [| 1 2 3 |]_j)
[| [| 2 3 4 |] [| 3 4 5 |] [| 4 5 6 |] |]_i_j
```

### テンソル積 `.`

> The "." function is a function for multiplying tensors.

```
> (. [| 1 2 3 |]_i [| 1 2 3 |]_i)
[| 1 4 9 |]_i

> (. [| 1 2 3 |]_i [| 1 2 3 |]_j)
[| [| 1 2 3 |] [| 2 4 6 |] [| 3 6 9 |] |]_i_j
```

### 列ベクトル, 行ベクトル

> We can handle both of upperscripts(~) and subscripts(_).
> The "." function supports Einstein summation notation.

```
> (. [| 1 2 3 |]~i [| 1 2 3 |]_i)
14
```

### 行列

> Matrix is represented as a vector of vectors.

```
[| [| 1 2 |] [| 10 20 30 |] |]
```

### 行列積

> Matrix multiplication is represented as follow using tensor index notation.

```
> (. [| [| a b |] [| c d |] |]~i_j [| [| x y |] [| z w |] |]~j_k)
[| [| (+ (* 10 a) (* b z)) (+ (* 11 a) (* b w)) |] [| (+ (* 10 c) (* d z)) (+ (* 11 c) (* d w)) |] |]~i_k
```

### 自動でマッピング
> The function defined using scalar parameters (prepended by "$") are automatically mapped to each component of tensors.

```
(define $min (lambda [$x $y] (if (lt? x y) x y)))
(min [| 1 2 3 |]_i [| 10 20 30 |]_i)
(min [| 1 2 3 |]_i [| 10 20 30 |]_j)
```

### 
> The function defined using tesnor parameters (prepended by "%") treats a tensor as a whole.

```
> (define $det2 (lambda [%X] (- (* X_1_1 X_2_2) (* X_1_2 X_2_1)))) 
> (det2 [| [| 2 1 |] [| 1 2 |] |]) 
3

> (det2 [| [| a b |] [| c d |] |])
(+ (* a d) (* -1 b c))
```

## §7 Differential geometry: differential forms
###

> By default, the same indices are completed to each tensor of the arguments.

```
> (+ [| 1 2 3 |] [| 1 2 3 |]) ;=> (+ [| 1 2 3 |]_t1 [| 1 2 3 |]_t1)
[| 2 4 6 |]
```

### 
> When “!” is prepended to the function application, the different indices are completed to each tensor of the arguments.

```
> !(+ [| 1 2 3 |] [| 1 2 3 |]) ;=> (+ [| 1 2 3 |]_t1 [| 1 2 3 |]_t2)
[| [| 2 3 4 |] [| 3 4 5 |] [| 4 5 6 |] |]
```

###
> 1-forms on Euclid space and Wedge product are represented as follow.
> "!" is effectively used in the definition of Wedge product.

```
> (define $dx [| 1 0 0 |]) 
> (define $dy [| 0 1 0 |]) 
> (define $dz [| 0 0 1 |]) 
> (define $wedge (lambda [%A %B] !(. A B))) 
> (wedge dx dy)
[| [| 0 1 0 |] [| 0 0 0 |] [| 0 0 0 |] |]
```

###
> The "df-normalize" function converts a differential form to the antisymmetric tensor.

```
> (wedge dx dy) 
(* dx dy)

> (df-normalize (wedge dx dy))
Timeout. We are limiting the resource for the online interprter.
```

動かなかった。

###

> Exterior derivative is defined as follow.
> "!" is effectively used in the definition of exterior derivative.

```
> (define $params [| x y z |]) 
> (define $d (lambda [%A] !((flip ∂/∂) params A))) 
> (d (f x y z)) 
[| (f|1 10 11 z) (f|2 10 11 z) (f|3 10 11 z) |]

> (d (d (f x y z))) 
[| [| (f|1|1 10 11 z) (f|1|2 10 11 z) (f|1|3 10 11 z) |] [| (f|1|2 10 11 z) (f|2|2 10 11 z) (f|2|3 10 11 z) |] [| (f|1|3 10 11 z) (f|2|3 10 11 z) (f|3|3 10 11 z) |] |]

> (df-normalize (d (d (f x y z))))
[| [| 0 0 0 |] [| 0 0 0 |] [| 0 0 0 |] |]
```