##HTML的基本结构
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
* <!DOCTYPE html>是DTD文档声明,作用是告诉浏览器, 这个网页是用哪一个版本的HTML规范来编写的. 浏览器就能够按照这个规范来正确的编译/解析/渲染我们的网页
> * 声明必须是 HTML 文档的第一行
> * 声明不是 HTML 标签,所以没有结束标签
> * 浏览器并不是完全依赖于这个声明, 浏览器有一套自己的默认的处理机制,不写也能运行,但要求大家都写
> * HTML5之前有2大种规范(HTML和XHTML), 每种规范中又有3种小规范(严格的,过渡的,带有框架的),HTML5之前的DTD文档声明只做了解,例如:
```html
HTML4.01:
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

XHTML 1.0
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

* html标签的作用是告诉浏览器我是一个HTML文档
> * 所有的标签都必须写在html标签里面
* head标签的作用是给网站添加一些配置信息,如:指定网站的标题,引用外部的css/js文件
> * head标签内部的内容都不会显示给用户查看
* meta标签,元数据标签,主要用来添加网站的SEO相关的信息,浏览器适配相关的内容
> * meta标签内容都不会显示给用户查看
> * meta标签中指定的字符集可以理解为浏览器中的的一个翻译,负责把页面上的字符正确的显示出来
>> * 和现实中的翻译一样,有的通晓各国语言,有的就差一点,所以字符集也有所不同的
>> * GBK(GB2312) 仅仅会翻译汉字和一些常用外文,但他体积比较下,翻译速度快
>> 
>> * UTF-8 可以翻译世界上所有的文字,但他体积比较大,翻译速度慢
>> 
>> * 如果网站仅仅包含中文, 那么推荐使用GB2312,如果除了中文以外, 还包含了一些其它国家的语言 , 那么推荐使用UTF-8,如果懒得记就直接用UTF-8
>>
>> * 在指定字符集时,HTML文件中指定的字符集必须和保存这个文件的字符集一致,否则会出现乱码
* title标签,指定网站的标题
> * title标签必须写在head标签里面
* body标签,定义显示给用户查看的内容(文字/图片/音频/视频)
> * body标签就相当于浏览器窗口
> * 虽然说有时候你可能将内容写到了别的地方在网页中也能看到, 但是千万不要这么干, 一定要将需要显示的内容写在body中
> * 一对html标签中只能有一对body标签

##HTML的语法总结:
> * 所有标签都在<\>中
> * 大多数标签有起始标签<\>和结束标签</\>,我们称为双标签,也有只有起始标签没有结束标签的,我们称为单标签
> * 起始标签可以包括属性,属性分为名称和值,名称和值用等号连接,值一般包含在引号中,多个属性用空格
##HTML标签的分类
> * 兄弟关系(并列/平级)
```html
    <meta charset="UTF-8">
    <title>Document</title>
```
> * 父子关系(嵌套/上下级)
```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
```
##HTML5的特性
###1.兼容性
> 对于过去技术的过渡和兼容,一旦浏览器不支持H5的某项功能,备选就会悄悄的运行
###2.合理性
> 新增的标签都是从实际中提炼出来的经典,如header/footer...
###3.效率
> 用户即上帝
###4.分离
> 结构行为样式的分离,老版本中HTML的样式表现部分渐渐不被支持
###5.简化
>简化DOCTYPE,简化字符集....
###6.无插件
>canvas/video/audio....