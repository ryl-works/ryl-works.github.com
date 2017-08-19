##猜你喜欢





在fetch/home/home.js
#################
export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}
#################



在mock/server.js
#################
//首页 -- 推荐列表(猜你喜欢)
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page',function *(next){
  //参数
  const params = this.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('当前城市：' + paramsCity);
  console.log('当前页数: ' + params.page);
  this.body = homeListData
});
#################
添加mock/home/list.js



#################
components下添加
components/List/index.jsx
components/List/style.less
components/List/Item/index.jsx
components/List/Item/style.less
#################


#################
containers下添加
containers/Home/subpage/List.jsx
containers/Home/subpage/style.less
修改
containers/Home/index.jsx
#################



加载更多
componentDidMount() {
    // 使用滚动时自动加载更多
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let timeoutId
    function callback() {
        const top = wrapper.getBoundingClientRect().top
        const windowHeight = window.screen.height
        if (top && top < windowHeight) {
            // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
            loadMoreFn()
        }
    }
    window.addEventListener('scroll', function () {
        if (this.props.isLoadingMore) {
            return
        }
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(callback, 50)
    }.bind(this), false);
}














#################
