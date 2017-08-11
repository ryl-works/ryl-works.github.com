http://www.imooc.com/article/16082
http://www.imooc.com/article/15896
类型（轮播图）
这里轮播图，其内容其实是商户的各个类型，而且这些类型比较固定，因此我们这里不让它涉及过多的数据交互，这些类型都暂时写死到代码中。这样做也是为了更加精确的将当前教学内容定位到轮播图的讲解上，不让其他关系不大的内容分心太多。因此，就将轮播图做成一个组件。
在./app/components下创建Category文件夹，存放轮播图组件的代码。
要做轮播图，需要用到react-swipe这个插件，去 https://github.com/voronianski/react-swipe 查看文档，根据文档提示需要npm install swipe-js-iso whatwg-fetch --save。
这部分的开发分为以下步骤，大家跟着我的节奏专心看我讲解即可：
先不要管类型数据如何，咱们先使用react-swipe做一个最简单的轮播图，先让轮播图动起来，并且能控制滚动的间隔时间。
然后，再在轮播图下面，加上一个轮播图滚动时 index 标识，即下面的“小圆点儿”，跟着我的代码看即可
轮播图出来之后，我们再把正式的类型加到轮播图中，并加上样式（为了节省大家的时间，html和css代码就不一行一行写了）

webpack踩坑之路 (2)——图片的路径与打包
http://www.cnblogs.com/ghost-xyx/p/5812902.html

步骤1
npm install swipe-js-iso react-swipe --save

步骤2
在./app/components下创建Category文件夹，存放轮播图组件的代码。
./app/components/Category/Index.jsx
####
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h1>category</h1>
        )
    }
}

export default Category
######
