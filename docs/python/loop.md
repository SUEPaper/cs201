---
id: loop
sidebar_position: 8
---

# 循环结构

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

我们在写程序的时候，一定会遇到需要重复执行某条或某些指令的场景。循环结构就是程序中控制某条或某些指令重复执行的结构。在Python中构造循环结构有两种做法，一种是`for-in`循环，一种是`while`循环。

## `for-in`循环语句

如果明确的知道循环执行的次数或者要对一个容器进行迭代（后面会讲到），那么我们推荐使用`for-in`循环，基本语法为

```python
for <variable> in <sequence>:
    <statements>
else:
    <statements>
```

例如下面代码中计算1~100求和的结果 $\sum \limits_{n=1}^{100}n$

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `loop01.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
sum = 0
for x in range(101):
    sum += x
print(sum)
```

需要说明的是上面代码中的`range(1, 101)`可以用来构造一个从1到100的范围，当我们把这样一个范围放到`for-in`循环中，就可以通过前面的循环变量x依次取出从1到100的整数。当然，`range`的用法非常灵活，下面给出了一个例子：

- `range(101)`：可以用来产生0到100范围的整数，需要注意的是取不到101。
- `range(1, 101)`：可以用来产生1到100范围的整数，相当于前面是闭区间后面是开区间。
- `range(1, 101, 2)`：可以用来产生1到100的奇数，其中2是步长，即每次数值递增的值。
- `range(100, 0, -2)`：可以用来产生100到1的偶数，其中-2是步长，即每次数字递减的值。

知道了这一点，我们可以用下面的代码来实现1~100之间的偶数求和。

```python
sum = 0
for x in range(2, 101, 2):
    sum += x
print(sum)
```

当然，也可以通过在循环中使用分支结构的方式来实现相同的功能，代码如下所示。(*实际编程中不推荐这种做法，因为这种代码的写法不够优雅。一名程序员在写代码的时候实际上是在创造这个世界上不存在的东西，因此我们不仅要让自己写的代码见名知意，还需要足够优雅。*)

```python
sum = 0
for x in range(1, 101):
    if x % 2 == 0:
        sum += x
print(sum)
```

### 嵌套循环

嵌套循环是循环内的循环, `外循环`每迭代一次，`内循环`将执行一次：

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `loop02.py` 的 Python 源代码文件。
输入如下代码，并运行

```bash
adj = ["有趣的", "困难的", "奇妙的"]
courses = ["数值计算方法实训课", "英语课", "语文课"]
for x in adj:
  for y in courses:
    print(x, y)
```

### 循环遍历字符串

连字符串都是可迭代的对象，它们包含一系列的字符：

循环遍历单词 "banana" 中的字母：

```bash
for x in "banana":
  print(x)
```

## `while`循环语句

Python中while语句的一般形式：

```python
while 判断条件：
  <statements>
```

例如下面`while`来计算1~100求和的结果 $\sum \limits_{n=1}^{100}n$

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `loop03.py` 的 Python 源代码文件。
输入如下代码，并运行

``` py
sum = 0
count = 0
while count <= 100:
    sum += count
    count += 1
print(sum)
```

在条件语句为 false 时执行则else 的语句块，若遇到break语句则不执行else子句。

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `loop04.py` 的 Python 源代码文件。
输入如下代码，并运行

```py
count = 0
while count < 10:
    print (count, " 小于 10")
    count = count + 1
else:
    print (count, " 大于或等于 10")
```

## `break`语句

break 语句可以跳出 for 和 while 的循环体。若遇到break而使得 for 或 while 循环中终止而且 else 块将不执行。

举例

### `for-in`循环中

```py
for megs in 'Hello Python':
    if megs == 'y':
        break
    print ('输出的当前字母为 :',megs)
--------------------------------
输出的当前字母为 : H
输出的当前字母为 : e
输出的当前字母为 : l
输出的当前字母为 : l
输出的当前字母为 : o
输出的当前字母为 :  
输出的当前字母为 : P
```

### `while`循环中

```py
counts = 0
while counts < 6:
    print("counts:" ,counts)
    if counts == 3:
        break
    counts += 1
---------------------------------
counts: 0
counts: 1
counts: 2
counts: 3
```

## `continue`语句

continue语句被用来告诉Python跳过当前循环块中的剩余语句，然后继续进行下一轮循环。

### `for-in`循环中

```py
counts = 0
while counts < 6:
    counts += 1
    if counts == 3:
        continue
    print("counts:", counts)
--------------------------------
counts: 1
counts: 2
counts: 4
counts: 5
counts: 6
```

### `while`循环中

```py
for megs in 'Hello Python':
    if megs == 'y':
        continue
    print ('输出的当前字母为 :',megs)
--------------------------------
输出的当前字母为 : H
输出的当前字母为 : e
输出的当前字母为 : l
输出的当前字母为 : l
输出的当前字母为 : o
输出的当前字母为 :  
输出的当前字母为 : P
输出的当前字母为 : t
输出的当前字母为 : h
输出的当前字母为 : o
输出的当前字母为 : n-for
```

## `pass`语句

pass是空语句，是为了保持程序结构的完整性。pass 不做任何事情，一般用做占位语句。

```py
for char in "Hello World":
    if char == 'W':
        pass
        print("执行pass语句")
    print("char: " ,char)
------------------------------
char:  H
char:  e
char:  l
char:  l
char:  o
char:   
执行pass语句
char:  W
char:  o
char:  r
char:  l
char:  d
```