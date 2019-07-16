import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import AuthRoute from './components/AuthRoute'
import './index.scss'
import store from './store'

import Home from './views/home'
import About from './views/about'
import Card from './views/card'
import Login from './views/login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavLink to='/home'>首页</NavLink>
            <NavLink to='/about'>关于页</NavLink>
            <NavLink to='/card'>购物卡页</NavLink>
            <NavLink to='/login'>登录页</NavLink>
            <hr />
            <Switch>
              <Route path='/home' component={Home} />
              <AuthRoute path='/about' component={About} />
              <AuthRoute path='/card' component={Card} />
              <Route path='/login' component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))
