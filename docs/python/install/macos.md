---
id: macos
sidebar_position: 3
---

# MacOS 安装

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

## 安装Homebrew

打开MacOS的命令行工具，输入如下命令。

```bash
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"
```

:::tip

安装时需要输入密码，该密码为你的MacOS的开机密码。

:::

安装完成Homebrew后，需要将Homebrew的路径配置到PATH环境变量中，请在命令行工具中输入如下三个命令。

```bash
echo 'export PATH=/usr/local/bin:/opt/homebrew/bin:$PATH' >> ~/.bash_profile

echo 'export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"' >> ~/.bash_profile

source ~/.bash_profile
```

:::note

Homebrew 是啥？请看[Mac必备神器Homebrew](https://zhuanlan.zhihu.com/p/59805070)

:::

## Homebrew 安装Python

```bash
brew install python
```

## 运行Python交互式解释器(REPL)

:::tip
“读取-求值-输出”循环（英语：Read-Eval-Print Loop，简称REPL），也被称做交互式顶层构件（英语：interactive toplevel），是一个简单的，交互式的编程环境。这个词常常用于指代一个Lisp的交互式开发环境，也能指代命令行的模式。———[维基百科](https://zh.m.wikipedia.org/zh-hans/%E8%AF%BB%E5%8F%96%EF%B9%A3%E6%B1%82%E5%80%BC%EF%B9%A3%E8%BE%93%E5%87%BA%E5%BE%AA%E7%8E%AF)
:::

在命令行中输入如下命令，便可进入Python的REPL
```bash
python3
```

见到如下界面便说明Python安装成功了：

![](./img/mac_python_repl.png)

