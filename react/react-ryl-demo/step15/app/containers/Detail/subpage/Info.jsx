import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getInfoData } from  '../../../fetch/detail/detail'
import DetailInfo from '../../../components/DetailInfo'

import InfoData from '../../../../mock/detail/info.js'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          info: false
        }
    }
    render() {
        return (
            <div>
                {
                  this.state.info
                  ? <DetailInfo data={this.state.info} />
                  : ''
                }
            </div>
        )
    }
    componentDidMount(){
      //获取商户信息
      this.getInfo()
    }

    getInfo(){
      //静态数据
      const json = InfoData
      this.setState({
        info: json
      })

      // const id = this.props.id
      // const result = getInfoData(id)
      // result.then(res => {
      //   return res.json()
      // }).then(json => {
      //   this.setState({
      //     info: json
      //   })
      // }).catch( ex => {
      //   if(__DEV__){
      //     console.error('详情页，获取商户信息出错,',ex.message);
      //   }
      // })
    }
}

export default Info
