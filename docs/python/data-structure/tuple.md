---
id: tuple
sidebar_position: 2
---

# 元组

:::caution 必读

本课程网站内容请仔细阅读后再进行实操。因未仔细阅读内容，出现任何错误后果自负（逃～～～逃～～～逃

**所有的代码请不要复制粘贴，请手敲每一行代码。复制粘贴不会让你动脑子，而手敲每一个行代码会让你自然而然地去动脑子会想每一行代码的含义和原理。所有的操作都需要自己动手，而不是立马就去问别人，只有自己动过脑子了才能学好。**

:::

tuple 与列表类似，但元组元素不能更改
## 元组创建
```python
tup1 = ("SUEP",1951,1.13)
#当元组元素只有一个时，要加‘，’
tup2 = ("SUEP",)
```
## 元组使用
### 通过索引
```python
tup1 = ("SUEP",1951,1.13)
print(tup1[1])
"""
输出：
1951
"""
```
### 元组的运算
元组具有$+$与$*$这两种运算，$+$为元组相连，$*$为元组重复,与列表类似
```python
tup1 = ("SUEP",1951,1.13)
tup2 = ("xsm",)
print(tup1 + tup2)
print(tup2 * 2)
"""
输出：
('SUEP', 1951, 1.13, 'xsm')
('xsm', 'xsm')
"""
```
### 元组的切片
与列表一样，元组也具有切片的功能
```python
#语法为tuple[a:b],返回tuple中索引为a到b的元素
tu11 = ["SUEP",1951,1.13,19.39]
print(tu11 [1:4])
print(tu11 [4:1])
print(tu11 [-4:-1])
#也可以list[a:]，返回tuple中索引为a到结束的元素
print(tu11 [2:])
"""
输出：
[1951, 1.13, 19.39]
[]
['SUEP', 1951, 1.13]
[1.13, 19.39]
"""
```
### 可以使用的函数
```python
tul1 = ["SUEP",1951,1.13]
#获得list的长度
print(len(tul1))
#获得最大最小值
tul2 = [1,1,4,5,1]
print(min(tul2))
print(max(tul2))
"""
输出：
3
1
5
"""
```
### other
[官网文档](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#tuples-and-sequences)
