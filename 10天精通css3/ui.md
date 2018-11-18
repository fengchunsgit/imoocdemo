# 自由缩放属性resize
为了增强用户体验，CSS3增加了很多新的属性，其中`resize`就是一个重要的属性，它允许用户通过拖动的方式来修改元素的尺寸来改变元素的大小。任何拥有`overflow`属性的任何容器元素都可以使用。

## 基本语法

```css
resize: none | both | horizontal | vertical | inherit
```
## 属性值

|属性值|属性值说明|
|--|--|
|`none`|用户不能拖动元素修改尺寸大小。|
|`both`|用户可以拖动元素，同时修改元素的宽度和高度|
|`horizontal`|用户可以拖动元素，仅可以修改元素的宽度，但不能修改元素的高度。|
|`vertical`|用户可以拖动元素，仅可以修改元素的高度，但不能修改元素的宽度。|
|`inherit`|继承父元素的resize属性值。|

例如：

通过`resize`属性，让文本域可以沿水平方向拖大。代码为：

```css
textarea {
  -webkit-resize: horizontal;
  -moz-resize: horizontal;
  -o-resize: horizontal;
  -ms-resize: horizontal;
  resize: horizontal;
}
```
# CSS3外轮廓属性
外轮廓`outline`在页面中呈现的效果和边框`border`呈现的效果极其相似，但和元素边框`border`完全不同，外轮廓线不占用网页布局空间，不一定是矩形，外轮廓是属于一种动态样式，`只有元素获取到焦点或者被激活时呈现`。

`outline`属性早在CSS2中就出现了，主要是用来在元素周围绘制一条轮廓线，可以起到突出元素的作用。但是并未得到各主流浏览器的广泛支持，在CSS3中对`outline`作了一定的扩展，在以前的基础上增加新特性。

## 基本语法

```css
outline: ［outline-color］ || [outline-style] || [outline-width] || [outline-offset] || inherit
```

从语法中可以看出`outline`和`border`边框属性的使用方法极其类似。`outline-color`相当于`border-color、outline-style`相当于`border-style`，而`outline-width`相当于`border-width`，只不过CSS3给outline属性增加了一个`outline-offset`属性。

## 属性值

|属性值|属性值说明|
|--|--|
|outline-color|	定义轮廓线的颜色，属性值为CSS中定义的颜色值。在实际应用中，可以将此参数省略，省略时此参数的默认值为黑色。|
|outline-style|定义轮廓线的样式，属性为CSS中定义线的样式。在实际应用中，可以将此参数省略，省略时此参数的默认值为none，省略后不对该轮廓线进行任何绘制。|
|outline-width|定义轮廓线的宽度，属性值可以为一个宽度值。在实际应用中，可以将此参数省略，省略时此参数的默认值为medium，表示绘制中等宽度的轮廓线。|
|outline-offset|定义轮廓边框的偏移位置的数值，此值可以取负数值。当此参数的值为正数值，表示轮廓边框向外偏离多少个像素；当此参数的值为负数值，表示轮廓边框向内偏移多少个像素。|
|inherit|元素继承父元素的outline效果。|

# CSS生成内容content
在Web中插入内容，在CSS2.1时代依靠的是JavaScript来实现。但进入CSS3进代之后我们可以通过CSS3的伪类`:before`，`:after`和CSS3的伪元素`::before`、`::after`来实现，其关键是依靠CSS3中的`content`属性来实现。不过这个属性对于`img`和`input`元素不起作用。

`conten`t配合CSS的伪类或者伪元素，一般可以做以下四件事情：

|功能|功能说明|
|--|--|
|none|不生成任何内容|
|attr|插入标签属性值|
|url|使用指定的绝对或相对地址插入一个外部资源（图像，声频，视频或浏览器支持的其他任何资源）|
|string|插入字符串|


## 实例展示

在CSS中有一种清除浮动的方法叫`clearfix`。而这个`clearfix`方法就中就使用了`content`，只不过只是在这里插入了一个空格。如下所示：

```css
.clearfix:before,
.clearfix:after {
  content:””;
  display:table;
}

.clearfix:after {
  clear:both;
  overflow:hidden;
}
```
上面这个示例是最常见的，也是最简单的，我们再来看一个插入元素属性值的方法。

假设我们有一个元素：
```html
<a href="##" title="我是一个title属性值，我插在你的后面">我是元素</a>
```
可以通过`:after`和`content:attr(title)`将元素的`title`值插入到元素内容`我是元素`之后：

```css
a:after {
  content:attr(title);
  color:#f00;
}
```

