# Scala
## 2018/11/9

```scala
object Main {
  class Animal
  class Person extends Animal
  class Student extends Person

  // # 上限境界(Aと同じかサブ型)
  class School1[A <: Person]
  // ERROR: new School1[Animal]

  // # 下限境界(Aと同じかスーパー型)
  class School2[A >: Person]
  // ERROR: new School2[Student]

  // # 上下型境界
  // [A >: Student <: B]

  // Nothing すべての型のサブクラス

  // # 変異指定アノテーション
  // class List[+A]
  // ## 共変: 型の特化を許容する +A
  // ## 反変: 型の汎化を許容する -A
  // ## 非変: その型のみを許容

  // # 型クラス
  // 1. 型クラスを定義する
  trait Who[T] {
    def who(x: T): String
  }

  // 2. 型インスタンスを定義する
  implicit object WhoInt extends Who[Int] {
    def who(x: Int) = "Int"
  }

  implicit object WhoDouble extends Who[Double] {
    def who(x: Double) = "Double"
  }

  // 3. 型クラスを利用する
  def sayWho[T](x: T)(implicit instance: Who[T]) =
    println(instance.who(x))

  def main(args: Array[String]): Unit = {
    val i = 1
    val d = 1.0
    sayWho(i)
    sayWho(d)
  }
}

```