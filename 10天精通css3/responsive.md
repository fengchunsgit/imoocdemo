# Media Queries——媒体查询
随着科学技术不断的向前发展，网页的浏览终端越来越多样化，用户可以通过：`宽屏电视、台式电脑、笔记本电脑、平板电脑和智能手机`来访问你的网站。尽管你无法保证一个网站在不同屏幕尺寸和不同设备上看起来完全一模一样，但至少要让你的Web页面能适配用户的终端，让他更好的呈现在你的用户面前。在本节中，将会学到如何使用CSS3中的Media Queries模块来让一个页面适应不同的终端（或屏幕尺寸），从而让你的页面让用户有一个更好的体验。

## Media Queries

Media Queries是CSS3新增加的一个模块功能，其最大的特色就是通过CSS3来查询媒体，然后调用对应的样式。其实这个功能在CSS2.1中就有出现过，只不过那个时候此功能并不强大，我们最常见的就是给打印设备添加打印样式。随着时代的变化，这个模块功能越来越强大。

在彻底的了解Media Queries我们需要了解其中的两个重要部分，第一个是媒体类型，第二个是媒体特性。下面的内容我们简单的来了解这两个部分：

### 媒体类型(Media Type)

媒体类型（Media Type）在CSS2中是一个常见的属性，也是一个非常有用的属性，可以通过媒体类型对不同的设备指定不同的样式。

在CSS2中常碰到的就是all(全部)、screen(屏幕)、print(页面打印或打印预览模式)，其实媒体类型远不止这三种，W3C总共列出了10种媒体类型。如下表所示：

| 值 | 设备类型 |
|--|--|
|`All`|所有设备|
|`Braille`|盲人用点字法触觉回馈设备|
|`Embossed`|盲文打印机|
|`Handheld`|便携设备|
|`Print`|打印用纸或打印预览视图|
|`Projection`|各种投影设备|
|`Screen`|电脑显示器|
|`Speech`|语音或音频合成器|
|`Tv`|电视机类型设备|
|`Tty`|使用固定密度字母栅格的媒介，比如电传打字机和终端|

其中`Screen`、`All`和`Print`为最常见的三种媒体类型。
### 媒体类型引用方法
媒体类型的引用方法也有多种，常见的有：`link`标签、`@import`和CSS3新增的`@media`几种：

- `link`方法

  `link`方法引入媒体类型其实就是在`<link>`标签引用样式的时候，通过`<link>`标签中的media属性来指定不同的媒体类型。如下所示。
  ```css
  <link rel="stylesheet" type="text/css" href="style.css" media="screen" />
  <link rel="stylesheet" type="text/css" href="print.css" media="print" />
  ```

- `@import`方法

  `@import`可以引用样式文件，同样也可以用来引用媒体类型。`@import`引入媒体类型主要有两种方式，一种是在样式中通过@import调用另一个样式文件；另一种方法是在`<head></head>`标签中的`<style></style>`中引入，但这种使用方法在IE6~7都不被支持，如样式文件中调用另一个样式文件时，就可以指定对应的媒体类型。

  ```css
  @importurl(reset.css) screen;   
  @importurl(print.css) print;
  ```
  在`<head>`中的`<style>`标签中引入媒体类型方法。

  ```html
  <head>
  <style type="text/css">
      @importurl(style.css) all;
  </style>
  </head>
  ```
- `@media`方法

  `@media`是CSS3中新引进的一个特性，被称为媒体查询。在页面中也可以通过这个属性来引入媒体类型。`@media`引入媒体类型和`@import`有点类似也具有两方式。

  （1）在样式文件中引用媒体类型：

    ```html
    @media screen {
      选择器{/*你的样式代码写在这里…*/}
    }
    ```
    （2）使用@media引入媒体类型的方式是在`<head>`标签中的`<style>`中引用。
    ```html
    <head>
      <style type="text/css">
          @media screen{
          选择器{/*你的样式代码写在这里…*/}
      }
      </style>
    </head>
    ```

# Media Queries使用方法
了解完这些概念性的东西，同学们最想知道的是Media Queries要如何使用？下面我们一起来探讨其使用方法：

Media Queries能在不同的条件下使用不同的样式，使页面在不同在终端设备下达到不同的渲染效果。前面简单的介绍了Media Queries如何引用到项目中，但Media Queries有其自己的使用规则。具体来说,Media Queries的使用方法如下。

```
@media 媒体类型and （媒体特性）{你的样式}
```
注意：使用Media Queries必须要使用`@media`开头，然后指定媒体类型（也可以称为设备类型），随后是指定媒体特性（也可以称之为设备特性）。媒体特性的书写方式和样式的书写方式非常相似，主要分为两个部分，第一个部分指的是媒体特性，第二部分为媒体特性所指定的值，而且这两个部分之间使用冒号分隔。例如：
```css
max-width: 480px
```
从前面表中可以得知，主要有十种媒体类型和13种媒体特性，将其组合就类似于不同的CSS集合。但与CSS属性不同的是，媒体特性是通过`min/max`来表示大于等于或小于做为逻辑判断，而不是使用小于（`<`）和大于（`>`）这样的符号来判断。接下来一起来看看Media Queries在实际项目中常用的方式。

## 最大宽度max-width

`max-width` 是媒体特性中最常用的一个特性，其意思是指媒体类型小于或等于指定的宽度时，样式生效。如：

```css
@media screen and (max-width:480px){
 .ads {
   display:none;
  }
}
```
上面表示的是：当屏幕小于或等于`480px`时,页面中的广告区块（`.ads`）都将被隐藏。

## 最小宽度min-width
`min-width`与`max-width`相反，指的是媒体类型大于或等于指定宽度时，样式生效。

```css
@media screen and (min-width:900px){
.wrapper{width: 980px;}
}
```

上面表示的是：当屏幕大于或等于`900px`时，容器`.wrapper`的宽度为`980px`。

## 多个媒体特性使用
Media Queries可以使用关键词`and`将多个媒体特性结合在一起。也就是说，一个Media Query中可以包含0到多个表达式，表达式又可以包含0到多个关键字，以及一种媒体类型。

当屏幕在`600px~900px`之间时，`body`的背景色渲染为`#f5f5f5`，如下所示。

```css
@media screen and (min-width:600px) and (max-width:900px){
  body {background-color:#f5f5f5;}
}
```

## 设备屏幕的输出宽度Device Width
在智能设备上，例如iPhone、iPad等，还可以根据屏幕设备的尺寸来设置相应的样式（或者调用相应的样式文件）。同样的，对于屏幕设备同样可以使用 `min/max` 对应参数，如 `min-device-width` 或者 `max-device-width` 。

```html
<link rel="stylesheet" media="screen and (max-device-width:480px)" href="iphone.css" />
```

上面的代码指的是`iphone.css`样式适用于最大设备宽度为`480px`，比如说iPhone上的显示，这里的`max-device-width`所指的是设备的实际分辨率，也就是指可视面积分辨率。

## not关键词
使用关键词`not`是用来排除某种制定的媒体类型，也就是用来排除符合表达式的设备。换句话说，`not`关键词表示对后面的表达式执行取反操作，如：

```css
@media not print and (max-width: 1200px){样式代码}
```

上面代码表示的是：样式代码将被使用在除打印设备和设备宽度小于1200px下所有设备中。

## only关键词
`only`用来指定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。其实`only`很多时候是用来对那些不支持Media Query但却支持Media Type的设备隐藏样式表的。其主要有：支持媒体特性的设备，正常调用样式，此时就当only不存在；表示不支持媒体特性但又支持媒体类型的设备，这样就会不读样式，因为其先会读取only而不是screen；另外不支持Media Queries的浏览器，不论是否支持only，样式都不会被采用。如

```html
<linkrel="stylesheet" media="only screen and (max-device-width:240px)" href="android240.css" />
```

在Media Query中如果没有明确指定Media Type，那么其默认为`all`，如：
```html
<linkrel="stylesheet" media="(min-width:701px) and (max-width:900px)" href="mediu.css" />
```

另外在样式中，还可以使用多条语句来将同一个样式应用于不同的媒体类型和媒体特性中，指定方式如下所示。

```html
<linkrel="stylesheet" type="text/css" href="style.css" media="handheld and (max-width:480px), screen and (min-width:960px)" />
```

上面代码中`style.css`样式被用在宽度小于或等于`480px`的手持设备上，或者被用于屏幕宽度大于或等于`960px`的设备上。

到目前为止，CSS3 Media Queries得到了众多浏览器支持，除了IE6-8浏览器不支持之外，在所有现代浏览器中都可以完美支持。还有一个与众不同的时，Media Queries在其他浏览器中`不需要像其他CSS3属性一样在不同的浏览器中添加前缀`。

# Responsive设计
什么是响应式设计呢？维基百科是这样对响应式作的描述：“Responsive设计简单的称为RWD，是精心提供各种设备都能浏览网页的一种设计方法，RWD能让你的网页在不同的设备中展现不同的设计风格。”从这一点描述来说，RWD不是流体布局，也不是网格布局，而是一种独特的网页设计方法。

响应式设计要考虑元素布局的秩序，而且还需要做到“有求必应”，那就需要满足以下三个条件：网站必须建立灵活的网格基础；引用到网站的图片必须是可伸缩的；不同的显示风格，需要在Media Queries上写不同的样式。

要想灵活的使用Responsive，仅满足这几个条件还是不够的，我们必须对Responsive有一个全面的了解，那么要了解Responsive，就得先了解他的一些术语：

## 流体网格
流体网格是一个简单的网格系统，这种网格设计参考了流体设计中的网格系统，将每个网格格子使用百分比单位来控制网格大小。这种网格系统最大的好处是让你的网格大小随时根据屏幕尺寸大小做出相对应的比例缩放。

## 弹性图片
弹性图片指的是不给图片设置固定尺寸，而是根据流体网格进行缩放，用于适应各种网格的尺寸。而实现方法是比较简单，一句代码就能搞定的事情。

```css
img {max-width:100%;}
```

不幸的是，这句代码在IE8浏览器存在一个严重的问题，让你的图片会失踪。当然弹性图片在响应式设计中如何更好的实现，到目前为止都还存在争议，也还在不断的改善之中。

为每一个断点提供不同的图片，这是一个比较头痛的事情，因为Media Queries并不能改变图片“src”的属性值，那有没有办分法可以解决呢？可以参考一下下面的解决方法。使用background-image给元素使用背景图片，显示/隐藏父元素，给父元素使用不同的图片，然后通过Media Queries来控制这些图片显示或隐藏。

来看一个断点解决图片自适应的例子。

```html
<img src="image.jpg"
data-src-600px="image-600px.jpg"
data-src-800px="image-800px.jpg"
alt="" />
```

对应的CSS代码：

```css
@media (min-device-width:600px){
img[data-src-600px]{
  content: attr(data-src-600px,url);
  }
}
@media (min-device-width:800px){
  img[data-src-800px] {
  content:attr(data-src-800px,url);
  }
}
```

请注意：这仅仅是解决响应式图片自适应的一种思路，但这种方案仅仅适配的断点较少。并不太实用，此处仅为扩展同学们的思路。
## 媒体查询
媒体查询在CSS3中得到了强大的扩展。使用这个属性可以让你的设计根据用户终端设备适配对应的样式。这也是响应式设计中最为关键的。可以说`Responsive设计离开了Medial Queries`就失去了他生存的意义。简单的说媒体查询可以根据设备的尺寸，查询出适配的样式。Responsive设计最关注的就是：`根据用户的使用设备的当前宽度，你的Web页面将加载一个备用的样式，实现特定的页面风格`。

## 屏幕分辨率
屏幕分辨简单点说就是用户显示器的分辨率，深一点说，屏幕分辨率指的是用户使用的设备浏览您的Web页面时的显示屏幕的分辨率，比如说智能手机浏览器、移动电脑浏览器、平板电脑浏览器和桌面浏览器的分辨率。Responsive设计利用Media Queries属性针对浏览器使用的分辨率来适配对应的CSS样式。因此屏幕分辨率在Responsive设计中是一个很重要的东西，因为只有知道Web页面要在哪种分辨率下显示何种效果，才能调用对应的样式。

## 主要断点
主要断点，在Web开发中是一个新词，但对于Responsive设计中是一个很重要的一部分。简单的描述就是，设备`宽度的临界点`。在Media Queries中，其中媒体特性“min-width”和“max-width”对应的属性值就是响应式设计中的断点值。简单点说，就是使用主要断点和次要断点，创建媒体查询的条件。而每个断点会对应调用一个样式文件（或者样式代码），如下图所示：

上图主要显示的是主要断点，主要断点加载的不同样式文件直接将影响Web的效果。除了主要断点之外，为了满足更多效果时，还可以在这个基础上添次要断点。不过主要断点和次要断点增加之后，需要维护的样式也相应的增加，成本也相对应的增加。因此在实际使用中，需要根据自身产品需求，决定断点。

综合下来，设置断点应把握三个要点：满足主要的断点；有可能的话添加一些别的断点；设置高于1024的桌面断点

# Responsive布局技巧
通过上面的介绍，大家对响应式设计有了一定的了解，但在实际制作中还是有一些布局技巧的：
在Responsive布局中，可以毫无保留的丢弃：
## 坏的习惯
- 第一， 尽量少用无关紧要的div；

- 第二，不要使用内联元素（inline）；

- 第三，尽量少用JS或flash；

- 第四，丢弃没用的绝对定位和浮动样式；

- 第五，摒弃任何冗余结构和不使用100%设置。

有舍才有得，丢弃了一些对Responsive有影响的东东，那么有哪些东东能帮助Responsive确定更好的布局呢？
## 好的习惯
- 第一，使用HTML5 Doctype和相关指南；

- 第二，重置好你的样式（reset.css）；

- 第三，一个简单的有语义的核心布局；

- 第四，给重要的网页元素使用简单的技巧，比如导航菜单之类元素。

使用这些技巧，无非是为了保持你的HTML简单干净，而且在你的页面布局中的关键部分（元素）不要过分的依赖现代技巧来实现，比如说CSS3特效或者JS脚本。

说了这么多，怎么样的布局或者说HTML结构才是简单干净的呢？这里教大家一个快速测试的方法。你首先禁掉你页面中所有的样式（以及与样式相关的信息），在浏览器中打开，如果你的内容排列有序，方便阅读，那么你的这个结构不会差到哪里去。

## meta标签
最后还有一个不可或缺的东东，那就是·标签，可以说，在响应式设计中如果没有这个meta标签，你就是蹩脚的，响应式设计就是空谈。

meta标签，其使用方法如下。

```html
<meta name=”viewport” content=”” />
```
在`content`属性中主要包括以下属性值，用来处理可视区域。

|Value|可能值|描述|
|-|-|-|
|`width`|一个正整数或者字符串`device-width`|以pixels（像素）为单位， 定义`viewport`（视口）的宽度|
|`height`|一个正整数或者字符串 `device-height`|以pixels（像素）为单位， 定义`viewport`（视口）的高度|
|`initial-scale`|一个`0.0` 到`10.0`之间的正数|定义设备宽度（纵向模式下的设备宽度或横向模式下的设备高度）与视口大小之间的缩放比率|
|`maximum-scale`|一个`0.0` 到`10.0`之间的正数|定义缩放的最大值；它必须大于或等于`minimum-scale`的值，不然会导致不确定的行为发生|
|`minimum-scale`|一个`0.0` 到`10.0`之间的正数|定义缩放的最小值；它必须小于或等于`maximum-scale`的值，不然会导致不确定的行为发生|
|`user-scalable`|一个布尔值(`yes` 或者`no`)|如果设置为 `no`，用户将不能放大或缩小网页。默认值为 `yes`|


在实际项目中，为了让Responsive设计在智能设备中能显示正常，也就是浏览Web页面适应屏幕的大小，显示在屏幕上，可以通过这个可视区域的meta标签进行重置，告诉他使用设备的宽度为视图的宽度，也就是说禁止其默认的自适应页面的效果，具体设置如下：

```html
<meta name=”viewport” content=”width=device-width,initial-scale=1.0” />
```

另外一点，由于Responsive设计是结合CSS3的Media Queries属性，才能尽显Responsive设计风格，但大家都清楚，在IE6-8中完全是不支持CSS3 Media。下面我们一起来看看CSS3 Meida Queries在标准设备上的运用，大家可以把这些样式加到你的样式文件中，或者单独创建一个名为`responsive.css`文件，并在相应的条件中写上你的样式，让他适合你的设计需求。

脚本下载地址： 
```html
media-queries.js(http://code.google.com/p/css3-mediaqueries-js/)      

respond.js(https://github.com/scottjehl/Respond)

<!—[if lt IE9]>
    <scriptsrc=http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js></script>
​<![endif]>
```

# Responsive设计——不同设备的分辨率设置
下面我们一起来看看CSS3 Meida Queries在标准设备上的运用，大家可以把这些样式加到你的样式文件中，或者单独创建一个名为“responsive.css”文件，并在相应的条件中写上你的样式，让他适合你的设计需求：

>**备注，应该以分辨率作为断点条件，而不是针对各种设备**
## 1024px显屏
```css
@media screen and (max-width : 1024px) {                    
/* 样式写在这里 */          
}
```
## 800px显屏
```css
@media screen and (max-width : 800px) {              
/* 样式写在这里 */          
}
```
## 640px显屏
```css
@media screen and (max-width : 640px) {              
/* 样式写在这*/            
}
```
## iPad横板显屏
```css
@media screen and (max-device-width: 1024px) and (orientation: landscape) {              
/* 样式写在这 */            
}
```
## iPad竖板显屏
```css
@media screen and (max-device-width: 768px) and (orientation: portrait) {         
/* 样式写在这 */            
}
```
## iPhone 和 Smartphones

```css
@media screen and (min-device-width: 320px) and (min-device-width: 480px) {              
/* 样式写在这 */            
} 
```

现在有关于这方面的运用也是相当的成熟，twitter的Bootstrap第二版本中就加上了这方面的运用。大家可以对比一下：

```css
@media (max-width: 480px) { ... }              

@media (max-width: 768px) { ... }              

@media (min-width: 768px) and (max-width: 980px) { ... }      

@media (min-width: 1200px) { .. }
```