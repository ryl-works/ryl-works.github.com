import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import { getSearchData } from '../../../fetch/search/search'

//静态数据
import SearchData from '../../../../mock/search/list.js'

const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 0
}

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState
    }
    render() {
        return (
            <div>
              {
                this.state.data.length
                ? <ListComponent data={this.state.data} />
                : <div>{/* 加载中... */}</div>
              }
              {
                this.state.hasMore
                ? <LoadMore isLoadingMore={this.state.isLoadingMore}
                loadMoreFn={this.loadMoreData.bind(this)}/>
                : ''
              }
            </div>
        )
    }

    componentDidMount(){
      //获取首页数据
      this.loadFirstPageData()
    }

    //获取首页数据
    loadFirstPageData(){
      const cityName = this.props.userinfo.cityName
      const keyword = this.props.keyword || ''
      const category = this.props.category
      const result = getSearchData(0,cityName,category,keyword)
      this.resultHandle(result)
    }
    //加载更多数据
    loadMoreData(){
      //记录状态
      this.setState({
        isLoadingMore: true
      })

      const cityName = this.props.userinfo.cityName
      const page = this.state.page
      const keyword = this.props.keyword || ''
      const category = this.props.category
      const result = getSearchData(page,cityName,category,keyword)
      this.resultHandle(result)

      //更新状态
      this.setState({
        isLoadingMore: false
      })
    }

    // 处理数据
    resultHandle(result){
      const json = SearchData
      const hasMore = json.hasMore
      const data = json.data
      this.setState({
        hasMore: hasMore,
        // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
        data: this.state.data.concat(data)
      })


      //增加page计数
      // const page = this.state.page
      // this.setState({
      //   page: page + 1
      // })
      //
      // result.then(res => {
      //   return res.json()
      // }).then(json => {
      //   const hasMore = json.hasMore
      //   const data = json.data
      //   this.setState({
      //     hasMore: hasMore,
      //     // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
      //     data: this.state.data.concat(data)
      //   })
      // }).catch(ex => {
      //   if(__DEV__){
      //     console.error('搜索页获取数据报错,',ex.message);
      //   }
      // })
    }
    componentDidUpdate(prevProps,prevState){
      const keyword = this.props.keyword
      const category = this.props.category

      //搜索条件完全相等时，忽略
      if(keyword ===  prevProps.keyword && category === prevProps.category){
        return
      }

      //重置state
      this.setState(initialState)

      //重新加载数据
      this.loadFirstPageData()
    }

}
// -------------------redux react 绑定--------------------
function mapStateToProps(state){
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {}
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)
