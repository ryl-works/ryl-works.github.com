import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item,index)=>{
                      return <div key={index} className="ad-item float-left">
                        <a href={item.link} target="_blank">
                          <img src="https://ryl-works.github.io/react/img/138012-20161016191639092-2000037796.png" alt={item.title}/>
                        </a>
                      </div>
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd
