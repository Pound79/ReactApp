import React  from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import client from 'axios'
import thunk from 'redux-thunk'

import App from './App'
import reducer from './reducer'

// redux-devtool$B$N@_Dj(B
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// axios$B$r(Bthunk$B$NDI2C0z?t$K2C$($k(B
const thunkWithClient = thunk.withExtraArgument(client)
// redux-thunk$B$r%_%I%k%&%'%"$KE,MQ(B
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkWithClient)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
