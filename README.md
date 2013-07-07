Farbtle
=======

A Farbox theme,Inspired by Svbtle. 

[Demo](http://sync.sh/)


##为什么叫Farbtle

Farbtle = Farbox + Svbtle

  * [Farbox](http://farbox.com) - 这个不用说明了吧！
  * [Svbtle](https://svbtle.com) - 著名的简洁博客！开源克隆品：ROR:[Obtvse](https://github.com/NateW/obtvse)和Python:[Simple](https://github.com/YCF/simple)
  
这篇文章也许能令你想到更多：[36kr-简约风格博客平台Svbtle，和它的开源模仿者Obtvse之间的创意之争](http://www.36kr.com/p/93438.html)

##使用这个主题你要注意的
1.不配置也能运行良好。
2.自动配置`about.md`和`links.md`
3.在`site.md`中可设置Twitter、微博和V2EX的链接信息，如：

``` markdown
twitter: YCF
weibo: XXXX  //我不用
v2ex: loading //通过这个生成的地址注册，您的账户会得到2银币！V2EX用户都知道。
```

如果你需要对你的站点配置个好名字，也可以在`site.md`中进行定义。（感谢Farbox提醒）

``` markdown
title: 诗云
```

4.通过修改`comment_js.md`或`comment_js.txt`使用第三方评论系统。
5.添加`custom_js.md`在每个页面底部增加您的自定义`JavaScript`、`CSS` and `What ever you want!`。注意第一行同样需要是：

```markdown
status:part
```

我加入了统计代码，我的`custom_js.md`内容像下面一样：

```javascript
status:part
<script type="text/javascript" src="http://tajs.qq.com/stats?sId=XXX" charset="UTF-8"></script>
```

6.请不要修改脚注信息，谢谢。

7.有兴趣的可以下载回去研究。什么协议？留个链接和名字就行。
