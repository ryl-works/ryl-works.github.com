
## part1 && part2

- part1 主要介绍一些正式进入页面开发前的准备工作，但是也都非常重要（否则不会单独拿出来）
- part2 正式开发搜索页面，详解页面每一部分的开发过程

## 两个入口

从首页进入搜索结果页的场景有以下两种：

- 通过输入框输入关键字搜索
- 通过轮播图的类型搜索

输入框进入搜索页面的的实现方式，我们最后再介绍，到时候会引入`约束性和非约束性组件`的概念，内容比较多。

轮播图进入搜索页面的方式比较简单，就是通过`<Link>`组件设置一个路由就好了

```
<Link to="/search/jingdian"><li className="float-left jingdian">景点</li></Link>
<Link to="/search/ktv"><li className="float-left ktv">KTV</li></Link>

**演示过程中需要注意的是，这两种方式跳转到搜索结果页时路由是怎样的。**

## 路由配置

找到配置路由的文件`./app/router/routeMap.jsx`，找到搜索结果页的代码

```
<Router history={this.props.history}>
    <Route path='/' component={App}>
        ......
        <Route path='/search/:category(/:keyword)' component={Search}/>
        ......
    </Route>
</Router>
```
上文让大家注意两种跳转到搜索结果页的方式的路由，可以和这里的规则对应一下。
代码中如何得到这些参数呢？可以通过以下的方式得到：

```
componentDidMount() {
    const params = this.props.params
    console.log('category param: ' + params.category)
    console.log('key param:' + params.keyword)
}
```
**非约束性**

针对`<input>`输入框这种类型，你可以通过这种方式来实现（其中`defaultValue`就是原生DOM中的`value`属性）

```
<input type="text" defaultValue="a" ref="input"/>
```

获取输入框的值的时候，需要这样做——即通过查询DOM，获取DOM属性的方式来做。

```
var input = this.refs.input
console.log(input.value)
```

这样做，跟之前jquery的做法一样，都是围绕着DOM来做的。缺点有两个：

- 依赖DOM操作，不符合组件化的设计，也不易扩展
- 查询DOM消耗更多性能

**约束性**

比较推荐的方式是这一种。即监控`<input>`的变化，将值实时保存到`state`中，直接从`state`中获取值。

```
<input type="text" value={this.state.name} onChange={this.handleChange} />

//...省略部分代码
handleChange: function(e) {
  this.setState({name: e.target.value});
}
```

React或者Vue都是一种基于数据驱动视图的设计方式，定好数据和视图的规则之后，只更改数据，不直接操作DOM。操作DOM的事情，交给React或者Vue这个框架的代码来搞定。

最后看一下实际代码中如何修改`Home`页面的输入框。

# 搜索结果页的开发 - part2

## 抽离 SearchInput 组件

根据最终实现的效果可以看到，搜索结果页的头部有一个输入框，而首页的头部也有一个输入框，两者的作用都是一样的。因此要把这个输入框抽离成一个组件，两个地方公用。

由于搜索结果页还没有开始创建，因此处理的这个组件先给首页的头部用，即用于`HomeHeader`组件中。

创建`./app/components/SearchInput`组件，并引用到`HomeHeader`中。

```
<SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
```

引用时需要传递两个参数，`value`即引用时要显示的默认值，`enterHandle`即在其中输入内容并回车时，要触发的事件。具体的实现，看实际代码即可。

在`SearchInput`组件中，首先要满足约束性组件的条件，第二要用上传入的`enterHandle`的方法。

## SearchHeader 组件

搜索结果页的头部，也是一个红色背景的Header，但是这个Header的样子，和之前做的其他页面的都不一样，因此又要重新做一个Header组件。

创建`./app/components/SearchHeader`组件，并引用到`Search`页面中。

```
<SearchHeader keyword={params.keyword}/>
```

注意，这里要传入一个`keyword`属性，即把搜索结果页拿到的`keyword`参数传递进去 —— 因为要在头部的 input 中显示搜索的关键字。（这个`params.keyword`在 part1 的时候已经解说过了）

在`SearchHeader`组件的代码实现中，左侧有一个返回按钮，然后就是输入框。这里的输入框当然要引用刚刚抽离出来的`SearchInput`组件。

```
<SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
```

两个必要的参数是必须传的。其中传递给`value`参数的，正好是接收到的`keyword`属性值

## 结果列表

这里的结果列表和首页中的“猜你喜欢”基本差不多，也是需要在`subpage`目录下创建一个子页面，然后在子页面中获取数据，并传递给`./app/components/List`，加载更多的实现方式，也是一个样子的。

唯一不同的是，如果在搜索结果页头部的输入框中再次输入内容重新进行搜索时，就需要多一步处理。

```
    // 处理重新搜索
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState)

        // 重新加载数据
        this.loadFirstPageData()
    }
```

这里需要理解`componentDidMount`和`componentDidUpdate`两个生命周期的不同。

- 页面初次渲染，会走`componentDidMount`
- 页面再次渲染，就不会走`componentDidMount`，而只走`componentDidUpdate`




























##
