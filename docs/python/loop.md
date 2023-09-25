---
id: loop
sidebar_position: 8
---

# 循环

## Python 循环

Python 有两个原始的循环命令:

-   while 循环
-   for 循环


## while循环语句

Python中while语句的一般形式：
while 判断条件：
&emsp;语句

举例一个while的经典例题，计算100个数之和。

``` py
sum = 0
count = 0
while count <= 100:
    sum += count
    count += 1
print(sum)
-------------------------
5050
```

## for循环语句

for循环可以遍历任何序列的项目（一个列表或者一个字符串等），基本语法为

```py
for <variable> in <sequence>:
    <statements>
else:
    <statements>
```

举例

```py
fruits = ['banana', 'apple', 'mango','tomato','pelar']
for fruit in range(len(fruits)):
    print('fruit: ',fruits[fruit])
------------------------------------------------
fruit:  banana
fruit:  apple
fruit:  mango
fruit:  tomato
fruit:  pelar
```

## break语句

break 语句可以跳出 for 和 while 的循环体。若遇到break而使得 for 或 while 循环中终止而且 else 块将不执行。

举例

for循环中

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

while循环中

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

## continue语句

continue语句被用来告诉Python跳过当前循环块中的剩余语句，然后继续进行下一轮循环。

举例

while循环中

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

for循环中

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

## else子句

循环语句可以有 else 子句，它在穷尽列表(以for循环)或条件变为 false (以while循环)导致循环终止时被执行,但循环被break终止时不执行。

### for else

for 循环中使用 break 语句，break 语句用于跳出当前循环体,且不执行else子句，否则执行else子句。

```py
sites = ["Baidu", "Google","UC","Taobao"]
for site in sites:
    if site == "Baidu":
        print("嗨嗨嗨")
        break
    print("循环数据 " + site)
else:
    print("没有循环数据!")
print("完成循环!")
--------------------------------
嗨嗨嗨
完成循环!
```

### while else语句

在条件语句为 false 时执行则else 的语句块，若遇到break语句则不执行else子句。

```py
count = 0
while count < 10:
    print (count, " 小于 10")
    count = count + 1
else:
    print (count, " 大于或等于 10")
-------------------------
0  小于 10
1  小于 10
2  小于 10
3  小于 10
4  小于 10
5  小于 10
6  小于 10
7  小于 10
8  小于 10
9  小于 10
10  大于或等于 10
```

## Pass语句

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


### while 循环

如果使用 while 循环，只要条件为真，我们就可以执行一组语句。

**例子 1**

如果 i 小于 10，打印 i：

```bash
i = 1
while i < 10:
  print(i)
  i += 1
```

:::tip
在这里记得递增 i，否则循环会永远继续,(也就是死循环)。

while 循环需要准备好相关的变量。在这个实例中，我们需要定义一个判断变量 i
:::

#### break 语句

使用 break 语句，当 while 条件为真，我们就可以跳出循环

**例子 2**

如果 i 等于 3，则继续下一个迭代：

```bash
i = 0
while i < 10:
  i += 1
  if i == 3:
    continue
  print(i)
```

#### else 语句

使用 else 语句，当条件不再成立时，我们可以运行一次代码块：

**例子 3**

条件为假时，打印一条消息：

```bash
i = 1
while i < 10:
  print(i)
  i += 1
else:
  print("i is no longer less than 10")
```

### for 循环

比起 while ，for 循环更为常见。for 循环用于迭代序列（即列表，元组，字典，集合或字符串）。

这与其他编程语言中的 for 关键字不太相似，而是更像其他面向对象编程语言中的迭代器方法。

通过使用 for 循环，我们可以为列表、元组、集合中的每个项目等执行一组语句。

**例子 4**

打印 courses 列表中的每种课程：

```bash
courses = ["数值计算方法实训课", "英语课", "语文课"]
for x in class:
  print(x)
```

:::tip
for 循环不需要预先设置索引变量。
:::

#### 循环遍历字符串

连字符串都是可迭代的对象，它们包含一系列的字符：

**例子 5**

循环遍历单词 "banana" 中的字母：

```bash
for x in "banana":
  print(x)
```

#### break 语句

通过使用 break 语句，我们可以在循环遍历所有项目之前跳出循环：

```bash
course = ["数值计算方法实训课", "英语课", "语文课"]
for x in courses:
  print(x)
  if x == "数值计算方法实训课":
    break
```

**例子 6**

当 x 为 "数值计算方法实训课" 时退出循环，但这次在打印之前中断：

```bash
courses = ["数值计算方法实训课", "英语课", "语文课"]
for x in class:
  if x == "数值计算方法实训课":
    break
print(x)
```

#### continue 语句

通过使用 continue 语句，我们可以停止循环的当前迭代，并继续下一个：

**例子 7**

不打印数值计算方法实训课：

```bash
courses = ["数值计算方法实训课", "英语课", "语文课"]
for x in courses:
  if x == "数值计算方法实训课":
    continue
print(x)
```

#### range() 函数

如需循环一组代码指定的次数，我们可以使用 range() 函数，range() 函数返回一个数字序列，默认情况下从 0 开始，并递增 1（默认地），并以指定的数字结束。

**例子 8**

使用 range() 函数：

```bash
for x in range(10):
  print(x)
```

:::tip
range(10) 不是 0 到 10 的值，而是值 0 到 9。

range() 函数默认 0 为起始值，不过可以通过添加参数来指定起始值：range(3, 10)，这意味着值为 3 到 10（包括 3，但不包括 10）：
:::
range() 函数默认将序列递增 1，但是可以通过添加第三个参数来指定增量值：range(2, 30, 3)：

**例子 9**

使用 3 递增序列（默认值为 1）：

```bash
for x in range(3, 50, 6):
  print(x)
```

#### For 循环中的 else

for 循环中的 else 关键字指定循环结束时要执行的代码块：

**例子 10**

打印 0 到 9 的所有数字，并在循环结束时打印一条消息：

```bash
for x in range(10):
  print(x)
else:
  print("welcome to numerical computing Methods")
```

#### 嵌套循环

嵌套循环是循环内的循环。

“外循环”每迭代一次，“内循环”将执行一次：

**例子 11**

打印每个课程的每个形容词：

```bash
adj = ["有趣的", "困难的", "奇妙的"]
courses = ["数值计算方法实训课", "英语课", "语文课"]
for x in adj:
  for y in courses:
    print(x, y)
```

#### pass 语句

for 语句不能为空，但是如果您处于某种原因写了无内容的 for 语句，请使用 pass 语句来避免错误。

**例子 12**

```bash
for x in [0, 1, 2]:
  pass
```

## Python 迭代

迭代是通过重复执行的代码处理相似的数据集的过程，并且本次迭代的处理数据要依赖上一次的结果继续往下做，上一次产生的结果为下一次产生结果的初始状态，如果中途有任何停顿，都不能算是迭代。

### 可迭代对象(Iterable)：

可迭代对象并不是指某种具体的数据类型，它是指存储了元素的一个容器对象，且容器中的元素可以通过**iter**( )方法或**getitem**( )方法访问。
a.集合数据类型，如 list、tuple、dict、set、str 等；

b.生成器(generator)，包括生成器和带 yield 的生成器函数(generator function)。

### Python 迭代器

迭代器是一种对象，该对象包含值的可计数数字。

迭代器是可迭代的对象，这意味着您可以遍历所有值。

从技术上讲，在 Python 中，迭代器是实现迭代器协议的对象，它包含方法 **iter**() 和 **next**()。

### 迭代器 VS 可迭代对象（Iterable）

列表、元组、字典和集合都是可迭代的对象。它们是可迭代的容器，您可以从中获取迭代器（Iterator）。

所有这些对象都有用于获取迭代器的 iter() 方法：

**例子 13**

从元组返回一个迭代器，并打印每个值：

```bash
mytuple = ("数值计算方法实训课", "英语课", "语文课")
myit = iter(mytuple)
print(next(myit))
print(next(myit))
print(next(myit))
```

连字符串都是可迭代的对象，并且可以返回迭代器：

**例子 14**

字符串也是可迭代的对象，包含一系列字符：

```bash
mystr = "数值计算方法实训课"
myit = iter(mystr)
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
```

### 遍历迭代器

我们也可以使用 for 循环遍历可迭代对象：

**例子 15**

迭代元组的值：

```bash
mytuple = ("数值计算方法实训课", "英语课", "语文课")
for x in mytuple:
  print(x)
```

**例子 16**

```bash
mystr = "数值计算方法实训课"
for x in mystr:
  print(x)
```

:::tip
for 循环实际上创建了一个迭代器对象，并为每个循环执行 next() 方法。
:::

### 创建迭代器

要把对象/类创建为迭代器，必须为对象实现 **iter**() 和 **next**() 方法。

正如您在 Python 类/对象 一章中学到的，所有类都有名为 **init**() 的函数，它允许您在创建对象时进行一些初始化。

**iter**() 方法的作用相似，您可以执行操作（初始化等），但必须始终返回迭代器对象本身。

**next**() 方法也允许您执行操作，并且必须返回序列中的下一个项目。

**例子 17**

创建一个返回数字的迭代器，从 1 开始，每个序列将增加 1（返回 1、2、3、4、5 等）：

```bash
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    x = self.a
    self.a += 1
    return x

myclass = MyNumbers()
myiter = iter(myclass)

print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
```

### StopIteration

如果有足够的 next() 语句，或者在 for 循环中使用，则上面的例子将永远进行下去。

为了防止迭代永远进行，我们可以使用 StopIteration 语句。

在 **next**() 方法中，如果迭代完成指定的次数，我们可以添加一个终止条件来引发错误：

**例子 18**

在 20 个迭代之后停止：

```bash
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    if self.a <= 20:
      x = self.a
      self.a += 1
      return x
    else:
      raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
  print(x)
```
