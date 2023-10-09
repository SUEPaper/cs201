---
id: exception
sidebar_position: 16
---

# 错误与异常处理

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

- 错误：是指代码不符合解释器或者编译器语法
- 异常：是指不完整、不合法输入，或者计算出现错误

## 语法错误

语法错误可能是初学者最常遇到的，如下面熟悉的画面：

```python
SyntaxError: invalid syntax
```
语法错误又称解析错误，什么是解析错误？简单来说是基本语法结构写错了，如：多任务写成一行、for循环没加‘:’等。

## 异常

熟悉python语法后，可以避免语法错误，但是代码常会发生异常（Exception）。Python用异常对象(exception object)来表示异常情况。
遇到错误后，会引发异常。如果异常对象并未被处理或捕捉，程序就会用所谓的回溯(traceback， 一种错误信息)终止执行。

举个例子

```python
10 * (1 / 0)
```

上述代码会抛出以下的异常信息：

```python
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

## 异常的处理

一旦出错，还要一级一级上报，直到某个函数可以处理该错误（比如，给用户输出一个错误信息）。所以高级语言通常都内置了一套`try...except...finally...`的错误处理机制，Python也不例外。

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `exception01.py` 的 Python 源代码文件。
输入如下代码，并运行。

```python
# -*- coding: utf-8 -*-

def main(num):
    try:
        print('try...')
        r = 10 / 0
        print('result:', r)
    except ZeroDivisionError as e:
        print('except:', e)
    finally:
      print('finally...')
    print('END')

if __name__ == "__main__":
    main()
```

当我们认为某些代码可能会出错时，就可以用`try`来运行这段代码，如果执行出错，则后续代码不会继续执行，而是直接跳转至错误处理代码，即`except`语句块，执行完`except`后，如果有`finally`语句块，则执行`finally`语句块，至此，执行完毕。

上面的代码在计算`10 / 0`时会产生一个除法运算错误：

```txt
try...
except: division by zero
finally...
END
```

从输出可以看到，当错误发生时，后续语句`print('result:', r)`不会被执行，`except`由于捕获到`ZeroDivisionError`，因此被执行。最后，`finally`语句被执行。然后，程序继续按照流程往下走。

如果把除数`0`改成`2`，则执行结果如下：


```txt
try...
result: 5
finally...
END
```

由于没有错误发生，所以`except`语句块不会被执行，但是`finally`如果有，则一定会被执行（可以没有`finally`语句）。

你还可以猜测，错误应该有很多种类，如果发生了不同类型的错误，应该由不同的`except`语句块处理。没错，可以有多个`except`来捕获不同类型的错误。

```python
import sys

try:
    f = open('myfile.txt')
    s = f.readline()
    i = int(s.strip())
except OSError as err:
    print("OS error:", err)
except ValueError:
    print("Could not convert data to an integer.")
except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")
    raise
```

## 触发异常

`raise` 语句支持强制触发指定的异常。例如：

```python
>>> raise NameError('HiThere')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: HiThere
```

`raise` 唯一的参数就是要触发的异常。这个参数必须是异常实例或异常类（派生自 `BaseException` 类，例如 `Exception` 或其子类）。如果传递的是异常类，将通过调用没有参数的构造函数来隐式实例化。如果只想判断是否触发了异常，但并不打算处理该异常，则可以使用更简单的 `raise` 语句重新触发异常。

在`cs201-learn`的文件夹，用 VS Code 新建一个名字叫做 `exception02.py` 的 Python 源代码文件。
输入如下代码，并运行。

```python
# -*- coding: utf-8 -*-

def main(num):
  try:
    raise NameError('HiThere')
  except NameError:
    print('An exception flew by!')
    raise

if __name__ == "__main__":
  main()
```