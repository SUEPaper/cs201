---
id: if-else
sidebar_position: 7
---

# 分支结构

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

迄今为止，我们写的Python代码都是一条一条语句顺序执行，这种代码结构通常称之为顺序结构, 然而仅有顺序结构并不能解决所有的问题。

Python条件语句是通过一条或多条语句的执行结果（True或者False）来决定执行的代码块，执行语句可以是单个语句或语句块。判断条件可以是任何表达式，任何非零、或非空（null）的值均为True。

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `if-else01.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

if True:
    print("Hello World")
print("Goog Bye")

if False:
    print("Hello Python")
print("Goog Bye")

```

:::tip 代码缩进

需要说明的是和C/C++、Java等语言不同，Python中没有用花括号来构造代码块而是**使用了缩进的方式来表示代码的层次结构**，如果if条件成立的情况下需要执行多条语句，只要保持多条语句具有相同的缩进就可以了。换句话说**连续的代码如果又保持了相同的缩进那么它们属于同一个代码块**，相当于是一个执行的整体。**缩进**可以使用任意数量的空格，但**通常使用4个空格**，建议大家**不要使用制表键**或者**设置你的代码编辑工具自动将制表键变成4个空格**。

:::

## if else 语句

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `if-else02.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

username = input('Please enter user name: ')
password = input('Please enter password: ')
# 用户名是admin且密码是123456则身份验证成功否则身份验证失败
if username == 'admin' and password == '123456':
    print('Authentication successful')
else:
    print('Authentication failed')
```

## if elif else

在分段函数求值时，我们可以用到这种结构。如下是一个分段函数的案例：

$$
f(x)= \begin{cases}
    3x - 5,  & (x > 1) \\
    x + 2, & (-1 \le x \le 1) \\
    5x + 3, & (x < -1)
\end{cases}
$$

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `if-else03.py` 的 Python 源代码文件。
输入如下代码，并运行

```python
# -*- coding: utf-8 -*-

x = float(input('x = '))
if x > 1:
    y = 3 * x - 5
elif x >= -1:
    y = x + 2
else:
    y = 5 * x + 3
print('f(%.2f) = %.2f' % (x, y))
```

## if 嵌套

当然根据实际开发的需要，分支结构是可以嵌套的, 那么我们就需要在if的内部构造出一个新的分支结构，同理elif和else中也可以再构造新的分支，我们称之为嵌套的分支结构，也就是说上面的 `if-else03.py` 的源代码可以改写成下面的样子，请实操并且并运行。

```python
# -*- coding: utf-8 -*-

x = float(input('x = '))
if x > 1:
    y = 3 * x - 5
else:
    if x >= -1:
        y = x + 2
    else:
        y = 5 * x + 3
print('f(%.2f) = %.2f' % (x, y))
```