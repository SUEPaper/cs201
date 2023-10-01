---
id: function
sidebar_position: 9
---

# 函数与作用域

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

在讲解本章节的内容之前，我们先来研究一道数学题，请说出下面的方程有多少组正整数解。

$$
x_1 + x_2 + x_3 + x_4 = 8
$$

事实上，上面的问题等同于将8个苹果分成四组每组至少一个苹果有多少种方案。想到这一点问题的答案就呼之欲出了。

$$
C_M^N = \frac{M!}{N!(M-N!)}, (M=7, N=3)
$$

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `function01.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

m = int(input('m = '))
n = int(input('n = '))
fm = 1
for num in range(1, m + 1):
    fm *= num
fn = 1
for num in range(1, n + 1):
    fn *= num
fm_n = 1
for num in range(1, m - n + 1):
    fm_n *= num
print(fm // fn // fm_n)
```

## 函数的作用

不知道大家是否注意到，在上面的代码中，我们做了3次求阶乘，这样的代码实际上就是重复代码。编程大师Martin Fowler先生曾经说过：“**代码有很多种坏味道，重复是最坏的一种！**”，要写出高质量的代码首先要解决的就是重复代码的问题。对于上面的代码来说，我们可以将计算阶乘的功能封装到一个称之为“函数”的功能模块中，在需要计算阶乘的地方，我们只需要“调用”这个“函数”就可以了。

函数是所有程序的要素，无论规模大小，并且在编程语言中作为我们表达计算过程的主要媒介。

**函数是被定义的、可重复使用的，用来实现单一，或相关联功能的代码段。**

**函数能提高应用的模块性，和代码的重复利用率。（可以使用函数来简化算法）**

## Python 函数的分类

-   1、内置函数：是 Python 编程语言中预先定义的函数。
-   2、标准库函数：需要用 import 语句进行导入，常见标准库有 time，os 等
-   3、第三方库：需要另外下载到本地的库，例如 opencv 库，然后用 import 导入
-   4、自定义函数：自己在模块里的写的函数
    （我们用的比较多的是内置函数与自定义函数）

## Python 内建函数

在 Python 中，内置了很多函数，需要导入它们来使用这些元素。例如，math 模块提供了大量的常用数学函数：

```python
from math import sqrt, exp
print(sqrt(256))
print(exp(1))
```

## Python 自定义函数

在Python中可以使用`def`关键字来定义函数，和变量一样每个函数也有一个响亮的名字，而且命名规则跟变量的命名规则是一致的。在函数名后面的圆括号中可以放置传递给函数的参数，这一点和数学上的函数非常相似，程序中函数的参数就相当于是数学上说的函数的自变量，而函数执行完成后我们可以通过`return`关键字来返回一个值，这相当于数学上说的函数的因变量。如下是一个实例

```python
def say_hello():
    # 该块属于这一函数
    print('hello world')
# 函数结束
say_hello()  # 调用函数
say_hello()  # 再次调用函数
```

:::tip 定义函数

-   函数代码块以**def 关键词开头**，后接函数标识符名称和圆括号()。
-   任何传入**参数和自变量必须放在圆括号中间**。圆括号之间可以用于定义参数。
-   函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。
-   函数内容以**冒号**起始，并且缩进。
-   return [ 表达式 ] 结束函数，选择性地返回一个值给调用方。不带表达式的 return 相当于返回 None。

:::

函数定义包含 `def` 语句，它标明了 `name`（名称）和一列带有名字的 `formal parameters`（形式参数）。之后，`return`（返回）语句叫做函数体，指定了函数的 `return expression`（返回表达式），它是函数无论什么时候调用都需要求值的表达式。

```python
def <name>(<formal parameters>):
    return <return expression>
```

需要说明的是和C/C++、Java等语言不同，Python中没有用花括号来构造代码块而是**使用了缩进的方式来表示代码的层次结构**，因此第二行必须**缩进**！按照惯例我们应该缩进四个空格，而不是一个 Tab，返回表达式并不是立即求值，它储存为新定义函数的一部分，并且只在函数最终调用时会被求出。（很快就会发现在函数内部缩进区域可以跨越多行!）。

:::tip

-   每个函数都应该只做一个任务。这个任务可以使用短小的名称来定义，使用一行文本来标识。顺序执行多个任务的函数应该拆分在多个函数中。
-   不要重复劳动（DRY）是软件工程的中心法则。所谓的 DRY 原则规定多个代码段不应该描述重复的逻辑。反之，逻辑应该只实现一次，指定一个名称，并且多次使用。如果你发现自己在复制粘贴一段代码，你可能发现了一个使用函数抽象的机会。
-   函数应该定义得通常一些。

:::


在了解了如何定义函数后，我们可以对上面的代码进行重构，所谓重构就是在不影响代码执行结果的前提下对代码的结构进行调整，重构之后的代码如下所示。

将 `function01.py` 文件的代码更改如下，并运行。

```python
# -*- coding: utf-8 -*-

def fac(num):
    """求阶乘"""
    result = 1
    for n in range(1, num + 1):
        result *= n
    return result


m = int(input('m = '))
n = int(input('n = '))
# 当需要计算阶乘的时候不用再写循环求阶乘而是直接调用已经定义好的函数
print(fac(m) // fac(n) // fac(m - n))
```

## Python 无参数函数

函数定义时，函数名后跟一对空的括号，那它就是无参数函数。
在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `function02.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

def print_pattern():
    size = 4
    for i in range(size):
        print("*" * size)

print_pattern()
```

:::tip

在调用的时候，你必须在函数名后加一对空括号。

:::

## Python 有 1 个参数的函数

函数定义时，函数名后的括号中是一个或多个参数的列表，下面是一个参数的函数案例。
在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `function03.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

def print_pattern(num_rows):
    for i in range(num_rows):
        for num_cols in range(num_rows-i):
            print("*", end="")
        print()

print_pattern(3)
print("-----------------------------")
print_pattern(5)
print("-----------------------------")
print_pattern(8)
print("-----------------------------")
```

你可以看到不同的 num_rows 值，输出不同的结果：

```bash
***
**
*
-----------------------------
*****
****
***
**
*
-----------------------------
********
*******
******
*****
****
***
**
*
```

:::tip 

当调用函数时，我们只需要传递一个值作为参数，该值会被函数定义中使用参数的地方替代。

:::

## Python 多个参数的函数

为了定义 2 个或多个参数，我们只需要将它们用逗号进行分割：
在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `function04.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

def print_pattern(num_rows, char):
	for i in range(num_rows):
		for num_cols in range(num_rows-i):
			print(char, end="")
		print()

print_pattern(5, "A")
print()
print_pattern(8, "%")
print()
print_pattern(10, "#")
```

你可以看到下面带有自定义字符的输出，是通过我们传了 2 个参数的调用输出的。

```bash
AAAAA
AAAA
AAA
AA
A

%%%%%%%%
%%%%%%%
%%%%%%
%%%%%
%%%%
%%%
%%
%

##########
#########
########
#######
######
#####
####
###
##
#
```

## Python 如何返回值

### 返回一个值

我们经常需要从函数中返回一个值，而 return 语句可以做到。我们只需要将 return 语句加到函数的定义中。
当发现 return 语句时，函数会立即停止执行并返回值。

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `function05.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

def get_rectangle_area(length, width):
    return length * width
area = get_rectangle_area(4, 5)
print(area)
```

:::tip
如果函数没有 `return` 语句，函数将会返回默认值 `None`。
返回语句要保持一致。函数中的 `return` 语句，要么所有的都返回一个表达式，要么都不要返回。如果确定让所有返回语句都返回一个表达式，那么对于那些没有返回值的函数应该明确地说明返回值为 `None`，且在函数的结尾要有一个显式的 `return` 语句（如果可以执行到 `return` 语句）。
:::

### 返回多个值

Python中的函数是可以返回多个值的，在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `function06.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

def get_rectangle_info(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter
area, perimeter = get_rectangle_info(4, 5)
print(area)
print(perimeter)
```

## 默认参数

通常在Python函数中，我们会设置一个参数的默认值，在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `function06.py` 的 Python 源代码文件。
输入如下代码，并运行。

```python
# -*- coding: utf-8 -*-

def print_pattern(num_rows, char="*"):
	for i in range(num_rows):
		for num_cols in range(num_rows-i):
			print(char, end="")
		print()

print_pattern(5)
print_pattern(6, "&")
```

在上述案例中，我们将"\*"作为默认值赋值给 char 参数，并且设置默认值的参数也可以在函数调用的时候重新赋值。

:::tip

带有默认值的参数，需要放在参数列表的最后面。否则，你会看到一个错误：语法错误：非默认值参数放到了默认值参数后面了。

:::

## 变量的作用域

最后，我们来讨论一下Python中有关变量作用域的问题。

```python
a = 100
def foo():
    b = 'hello'

    # Python中可以在函数内部再定义函数
    def bar():
        c = True
        print(a)
        print(b)
        print(c)

    bar()
    # print(c)  # NameError: name 'c' is not defined

# print(b)  # NameError: name 'b' is not defined
foo()

```

上面的代码能够顺利的执行并且打印出100、hello和True，但我们注意到了，在`bar`函数的内部并没有定义`a`和`b`两个变量，那么`a`和`b`是从哪里来的。我们在上面代码的`if`分支中定义了一个变量`a`，这是一个全局变量（global variable），属于全局作用域，因为它没有定义在任何一个函数中。在上面的`foo`函数中我们定义了变量`b`，这是一个定义在函数中的局部变量（local variable），属于局部作用域，在`foo`函数的外部并不能访问到它；但对于`foo`函数内部的`bar`函数来说，变量`b`属于嵌套作用域，在`bar`函数中我们是可以访问到它的。`bar`函数中的变量`c`属于局部作用域，在`bar`函数之外是无法访问的。事实上，Python查找一个变量时会按照“局部作用域”、“嵌套作用域”、“全局作用域”和“内置作用域”的顺序进行搜索，前三者我们在上面的代码中已经看到了，所谓的“内置作用域”就是Python内置的那些标识符，我们之前用过的`input`、`print`、`int`等都属于内置作用域。

再看看下面这段代码，我们希望通过函数调用修改全局变量`a`的值，但实际上下面的代码是做不到的。

```python
a = 100
def foo():
    a = 200
    print(a)  # 200
foo()
print(a)  # 100
```

在调用`foo`函数后，我们发现`a`的值仍然是100，这是因为当我们在函数`foo`中写`a = 200`的时候，是重新定义了一个名字为`a`的局部变量，它跟全局作用域的`a`并不是同一个变量，因为局部作用域中有了自己的变量`a`，因此`foo`函数不再搜索全局作用域中的`a`。如果我们希望在`foo`函数中修改全局作用域中的`a`，代码如下所示。

```python
a = 100
def foo():
    global a
    a = 200
    print(a)  # 200

foo()
print(a)  # 200
```

我们可以使用`global`关键字来指示`foo`函数中的变量`a`来自于全局作用域，如果全局作用域中没有`a`，那么下面一行的代码就会定义变量`a`并将其置于全局作用域。同理，如果我们希望函数内部的函数能够修改嵌套作用域中的变量，可以使用`nonlocal`关键字来指示变量来自于嵌套作用域，请大家自行试验。

:::note

在实际开发中，我们应该**尽量减少对全局变量的使用**，因为全局变量的作用域和影响过于广泛，可能会发生意料之外的修改和使用，除此之外全局变量比局部变量拥有更长的生命周期，可能导致对象占用的内存长时间无法被[垃圾回收](https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8))。事实上，减少对全局变量的使用，也是降低代码之间耦合度的一个重要举措，同时也是对[迪米特法则](https://zh.wikipedia.org/zh-hans/%E5%BE%97%E5%A2%A8%E5%BF%92%E8%80%B3%E5%AE%9A%E5%BE%8B)的践行。减少全局变量的使用就意味着我们应该尽量让变量的作用域在函数的内部，但是如果我们希望将一个局部变量的生命周期延长，使其在定义它的函数调用结束后依然可以使用它的值，这时候就需要使用[闭包](https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))，这个我们在后续的内容中进行讲解。

> **说明：** 很多人经常会将“闭包”和[“匿名函数”](https://zh.wikipedia.org/wiki/%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0)混为一谈，但实际上它们并不是一回事，如果想了解这个概念，可以看看[维基百科](https://zh.wikipedia.org/wiki/)的解释或者[知乎](https://www.zhihu.com/)上对这个概念的讨论。

:::