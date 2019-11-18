# 2019/1/25 - Arihon
## BFS
```crystal
X = 10
Y = 10
# maze = [
#   "#S###",
#   "..#.#",
#   "..#.#",
#   "#...G"
# ]
maze = [
  "#S#####.#",
  "......#..#",
  ".#.##.##.#",
  ".#........",
  "##.##.####",
  "....#....#",
  ".#######.#",
  "....#.....",
  ".####.###.",
  "....#...G#"
]

def bfs(maze, sx, sy)
  flags = Array.new(Y) { Array.new(X, false) }
  queue = [{sx, sy, 0}] # x, y, distance
  until queue.empty?
    x, y, dist = queue.shift
    return dist if maze[y][x] == 'G'

    [{0, -1}, {0, 1}, {-1, 0}, {1, 0}].each {|dx, dy|
      if (0...X).includes?(x + dx) && (0...Y).includes?(y + dy)
        if maze[y + dy][x + dx] != '#' && !flags[y + dy][x + dx]
          flags[y + dy][x + dx] = true
          queue << { x + dx, y + dy, dist + 1 }
        end
      end
    }
  end
end

Y.times {|y|
  X.times{|x|
    if maze[y][x] == 'S'
      puts bfs(maze, x, y)
      exit
    end
  }
}
```

## § 2.6 数学的な問題を特コツ

### ユークリッドの互除法
* 線分 (x1, y1) -> (y1, y2) 上の始終点を除く格子点の数
-> gcd(|x1 - x2|, |y1 - y2|) - 1

```
int gcd (a, b) {
  b == 0 ? a : gcd(b, a % b)
}
```

### 拡張ユークリッドの互除法
```
extgcd (a, b, &x, &y) {
  d = a
  if b != 0
    d = extgcd(b, a % b, y, x)
    y -= (a / b) * x
  else
    x = 1, y = 0
  end
  d
}
```

### 素数判定
* エラトステネスの篩

### 区間内の素数の個数

```
is_prime[]
is_prime_small[]

// [a, b) で篩, is_prime[i - a] = true <=> i が素数
void segment_sieve(a, b) {
  i : i^2 < b { is_prime_small[i] = true }
  i : i < b - a { is_prime[i] = true }

  i = 2, i^2 < b {
    if is_prime_small[i] {
      j = 2i, j ^ 2 < b {
        is_prime_small[j] = false // [2, sqrt b) の篩
      }
      j = max(2, (a + i - 1) / i * i), j < b, j += i {
        is_prime[j - a] = false // [a, b) の篩
      }
    }
  }
}
```

# 第3章
