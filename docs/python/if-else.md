---
id: if-else
sidebar_position: 7
---

# 分支结构

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

## if 语句

Python条件语句是通过一条或多条语句的执行结果（True或者False）来决定执行的代码块，执行语句可以是单个语句或语句块。判断条件可以是任何表达式，任何非零、或非空（null）的值均为true。

```py
if True:
    print("Hello World")
print("Goog Bye")
------------------------
Hello World
Goog Bye


if False:
    print("Hello Python")
print("Goog Bye")
------------------------
Goog Bye
```

:::tip 代码缩进

需要说明的是和C/C++、Java等语言不同，Python中没有用花括号来构造代码块而是**使用了缩进的方式来表示代码的层次结构**，如果if条件成立的情况下需要执行多条语句，只要保持多条语句具有相同的缩进就可以了。换句话说**连续的代码如果又保持了相同的缩进那么它们属于同一个代码块**，相当于是一个执行的整体。**缩进**可以使用任意数量的空格，但**通常使用4个空格**，建议大家**不要使用制表键**或者**设置你的代码编辑工具自动将制表键变成4个空格**。

:::

### if else 语句

```py
if False:
    print("No executed")
else:
    print("Executed")
------------------------
Executed
```

### if elif else

```py
age = int(input("Please your age>>:"))
if 0 < age and age <= 20:
    print("teenager")
elif 20 < age and age <= 40:
    print("Man")
elif 40 < age and age <= 60:
    print("Old")
else:
    print("Died")
------------------------
Please your age>>:30
Man
```

### if嵌套

```py
age = int(input("Please your age>>:"))
if age >= 0:
    if 0 < age and age <= 20:
        print("teenager")
    elif 20 < age and age <= 40:
        print("Man")
    elif 40 < age and age <= 60:
        print("Old")
    else:
        print("Died")
else:
    print("Your age error")
-------------------------
Please your age>>:48
Old
```