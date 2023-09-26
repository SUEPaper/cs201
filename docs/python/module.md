---
id: module
sidebar_position: 9
---

# 模块与包

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

## 模块

对于任何一种编程语言来说，给变量、函数这样的标识符起名字都是一个让人头疼的问题，因为我们会遇到命名冲突这种尴尬的情况。最简单的场景就是在同一个.py文件中定义了两个同名函数，由于Python没有函数重载的概念，那么后面的定义会覆盖之前的定义，也就意味着两个函数同名函数实际上只有一个是存在的。

```python
def foo():
    print('hello, world!')


def foo():
    print('goodbye, world!')


# 下面的代码会输出什么呢？
foo()
```

当然上面的这种情况我们很容易就能避免，但是如果项目是由多人协作进行团队开发的时候，团队中可能有多个程序员都定义了名为`foo`的函数，那么怎么解决这种命名冲突呢？答案其实很简单，Python中每个文件就代表了一个模块（module），我们在不同的模块中可以有同名的函数，在使用函数的时候我们通过`import`关键字导入指定的模块就可以区分到底要使用的是哪个模块中的`foo`函数。

在`cs201-learn`的文件夹中新建一个文件夹叫做`module_demo`，用 VS Code 在`module_demo`文件夹中新建一个名字叫做 `module1.py` 的 Python 源代码文件，输入如下代码。

```python
def foo():
    print('hello, world!')
```

用 VS Code 在`module_demo`文件夹中新建一个名字叫做 `module2.py` 的 Python 源代码文件，输入如下代码。

```python
def foo():
    print('goodbye, world!')
```

用 VS Code 在`module_demo`文件夹中新建一个名字叫做 `test.py` 的 Python 源代码文件，输入如下代码，并且运行 `test.py` 文件。

```python
from module1 import foo

# 输出hello, world!
foo()

from module2 import foo

# 输出goodbye, world!
foo()
```

也可以按照如下所示的方式来区分到底要使用哪一个`foo`函数，将  `test.py` 代码改成如下，并运行 `test.py` 文件。

```python
import module1 as m1
import module2 as m2

m1.foo()
m2.foo()
```

但是如果将代码写成了下面的样子，那么程序中调用的是最后导入的那个`foo`，因为后导入的foo覆盖了之前导入的`foo`。

```python
from module1 import foo
from module2 import foo

# 输出goodbye, world!
foo()
```

```python
from module2 import foo
from module1 import foo

# 输出hello, world!
foo()
```

需要说明的是，如果我们导入的模块除了定义函数之外还有可以执行代码，那么Python解释器在导入这个模块时就会执行这些代码，事实上我们可能并不希望如此，因此如果我们在模块中编写了执行代码，最好是将这些执行代码放入如下所示的条件中，这样的话除非直接运行该模块，if条件下的这些代码是不会执行的，因为只有直接执行的模块的名字才是&quot;\_\_main\_\_&quot;。


用 VS Code 在`module_demo`文件夹中新建一个名字叫做 `module3.py` 的 Python 源代码文件，输入如下代码。

```python
def foo():
    pass


def bar():
    pass


# __name__是Python中一个隐含的变量它代表了模块的名字
# 只有被Python解释器直接执行的模块的名字才是__main__
if __name__ == '__main__':
    print('call foo()')
    foo()
    print('call bar()')
    bar()
```

将  `test.py` 代码改成如下，并运行 `test.py` 文件。

```python
import module3

# 导入module3时 不会执行模块中if条件成立时的代码 因为模块的名字是module3而不是__main__
```

可以看到代码没有执行，此时可以试着运行 `module3.py`。（相信最终的结果是代码成功运行了）

从现在开始我们可以将Python代码按照下面的格式进行书写，这一点点的改进其实就是在我们理解了函数和作用域的基础上跨出的巨大的一步。

```python
def main():
    # Todo: Add your code here
    pass


if __name__ == '__main__':
    main()
```

## 包

包(package)是一个文件夹，它里面会有一个`__init__.py`，还有我们自己定义的`.py`文件。而我们自己定义的`.py`文件就是前文所述的Python的模块(module)，一个模块就是一个`py`文件，里面封装了一个功能模块，可能有函数、类、变量等。

通常来说，一个模块里定义的代码行数不要太多，尽量拆分到不同的模块里，不同的模块允许出现相同名称的变量，这是划分不同模块的作用之一。
但是仅有模块好像还不够，对于一个大点的框架，再按照大的功能逻辑划分出包(package)显得更有必要。并且有了package后，相同变量名字冲突的可能性会更小。

`__init__.py`会使得普通的文件夹变为package. 实际上，`__init__.py`也是一个模块，其名称正是package的名字。

### `import` 导入模块

接下来我们来进行包的案例实现，在`cs201-learn`的文件夹中新建两个文件夹 `package01` 和 `package02`，并且分别在两个文件夹中新建 `__init__.py`和`module0.py`。在`cs201-learn`的文件夹中新建`test_package.py`文件。最终的目录结构如下所示：

```bash
cs201-learn
...
  ├── package0
  │   ├── __init__.py
  │   └── module0.py
  ├── package1
  │   ├── __init__.py
  │   └── module0.py
  └── test_package.py
```
用VS Code在`package0/module0.py`文件中输入如下代码：

```python
def module_info():
  print("This is package0's module0")
```

用VS Code在`package1/module0.py`文件中输入如下代码：

```python
def module_info():
  print("This is package1's module0")
```

用VS Code在`test_package.py`文件中输入如下代码，并且运行代码：

```python
import package0.module0
import package1.module0 as p1_m0


if __name__ == '__main__':
  package0.module0.module_info()
  p1_m0.module_info()
```

`import` 参数的最后部分必须是模块名(文件名)，而不能是包名(目录名)，比如 `import package0`，那么访问 `package0.module0` 会提示找不到 `module0` 的错误：

```python
Traceback (most recent call last):
  File "test_package.py", line 15, in <module>
    package0.module0.module_info()
AttributeError: 'module' object has no attribute 'module0'
```
:::info

- 由于包是一个目录，那么导入包中的模块时，就要指明模块所在包中的路径，Python 将路径“圆点化”表示，称为包路径。
- import 语句也可以为包或其中的模块重命名，这使得代码更简洁。

:::

:::tip 导入包与直接导入模块不同的

- 导入包指定的是“圆点化”路径，比如例子中的 `package0.module0` ，引用时需要完整的包路径。
- `__init__.py` 脚本会在第一次导入包中模块时被执行，它常用来做包的预处理。
- 使用包中模块时，必须带上完整的包路径(包名)，比如这里的 `package0.module0.module_info()`，重命名可使代码更简洁。

:::

### 部分导入包内模块

用VS Code将`test_package.py`文件修改如下，并且运行代码：

```python
# from package0 import *  # 可以导入 package0 包中所有模块
from package0 import module0
from package0.module0 import module_info
from package1 import module0 as p1_m0
from package1.module0 import module_info as m0

if __name__ == '__main__':
  module0.module_info()
  module_info()
  p1_m0.module_info()
  m0()

```

`from` 后的参数可以为包路径，也可以为模块名路径，并且可以精确指定 `import` 模块中各成员。

:::danger

尽管可以通过 `from package0 import *` 导入包中的所有模块或子包，但这种方法不要使用，很容易造成命名冲突，代码不清晰，导入应该明确要导入的模块名。

:::