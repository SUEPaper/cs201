---
id: generator
sidebar_position: 15
---

# 迭代器与生成器

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

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
