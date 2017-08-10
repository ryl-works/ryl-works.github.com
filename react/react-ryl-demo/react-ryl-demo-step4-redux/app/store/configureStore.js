import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState){
  //触发devtool-redux
  const store = createStore(rootReducer,initialState,window.devToolsExtension ? window.devToolsExtension() : undefined)
}
