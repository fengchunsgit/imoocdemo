# 1.1 什么是css3
CSS3是CSS2的升级版本，3只是版本号，它在CSS2.1的基础上增加了很多强大的新功能。 目前主流浏览器chrome、safari、firefox、opera、甚至360都已经支持了CSS3大部分功能了，IE10以后也开始全面支持CSS3了。

在编写CSS3样式时，不同的浏览器可能需要不同的前缀。它表示该CSS属性或规则尚未成为W3C标准的一部分，是浏览器的私有属性，虽然目前较新版本的浏览器都是不需要前缀的，但为了更好的向前兼容前缀还是少不了的。
|前缀|浏览器|
|--|--|
|-webkit|chrome和safari|
|-moz|firefox|
|-ms|IE|
|-o|opera|
# 1.2 CSS3能做什么？
CSS3给我们带来了什么好处呢？简单的说，CSS3把很多以前需要使用图片和脚本来实现的效果、甚至动画效果，只需要短短几行代码就能搞定。比如圆角，图片边框，文字阴影和盒阴影，过渡、动画等。

CSS3简化了前端开发工作人员的设计过程，加快页面载入速度。

# 2.1 CSS3边框 圆角效果 border-radius
 border-radius是向元素添加圆角边框。
 ## 使用方法：
 ```html
border-radius:10px; /* 所有角都使用半径为10px的圆角 */ 
```
```
border-radius: 5px 4px 3px 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角，顺时针 */ 
```
 不要以为border-radius的值只能用px单位，你还可以用百分比或者em，但兼容性目前还不太好。

- 实心上半圆：

方法：把高度(height)设为宽度（width）的一半，并且只设置左上角和右上角的半径与元素的高度一致（大于也是可以的）。
```
div{
    height:50px;/*是width的一半*/
    width:100px;
    background:#9da;
    border-radius:50px 50px 0 0;/*半径至少设置为height的值*/
    }

```
- 实心圆：
方法：把宽度（width）与高度(height)值设置为一致（也就是正方形），并且四个圆角值都设置为它们值的一半。如下代码：
```
div{
    height:100px;/*与width设置一致*/
    width:100px;
    background:#9da;
    border-radius:50px;/*四个圆角值都设置为宽度或高度值的一半*/
    }
```