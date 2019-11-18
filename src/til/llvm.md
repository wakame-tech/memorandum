# LLVM

## C -> LLVM IR
```
clang -S -emit-llvm *.c
```

## Run .ll
```
lli *.ll; echo $?
```

## LLVM IR
### 'alloca'
```
%<ID> = alloca <Type>
```
yields type's opinter to ID

### 'store'
```
store <Type> <ID>, <Type> <ID>
```
store right from left's value

### 'load'
```

```

## op.c
```
int f(int a) {
  return a;
}

int main() {
  return f(42);
}
```

## op.ll
```ll
define i32 @f(i32) {
  ret i32 %0
}

define i32 @main() {
  %1 = call i32 @f(i32 42)
  ret i32 %1
}

```