import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'


class RouteMap extends React.Component{
  render(){
    return(
        <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='list' component={List}/>
                <Route path='detail/:id' component={Detail}/>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
    )
  }
  updateHandle(){
    // console.log();
  }
}

export default RouteMap
