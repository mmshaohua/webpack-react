import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './index.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/detail/:id/:movie' component={Detail} />
            <Route path='/' component={Index} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// 电影详情页
class Detail extends Component {
  render() {
    // console.log(this.props.match.params)
    let { match: { params } } = this.props
    console.log(params)
    return (
      <div>
        <h1>电影详情页</h1>
        <div>id---{params.id}</div>
        <div>movie---{params.movie}</div>
      </div>
    )
  }
}

// 首页
class Index extends Component {
  render() {
    return (
      <div>
        <NavLink to='/home'>首页</NavLink>
        <NavLink to='/movie'>电影</NavLink>
        <NavLink to='/center'>中心</NavLink>
        <hr />
        <Route path='/home' component={Home} />
        <Route path='/movie' component={Movie} />
        <Route path='/center' component={Center} />
        <Redirect to='/home' />
      </div>
    )
  }
}

// Home 页面
class Home extends Component {
  render() {
    return (
      <div>首页</div>
    )
  }
}

// Movie 页面
class Movie extends Component {
  render() {
    const movieList = [
      { id: 1, movie: '九龙不败' },
      { id: 2, movie: '我的世界' },
      { id: 3, movie: '天天向上' }
    ]
    return (
      <div>
        <ul>
          {
            movieList.map(item => {
              return (
                <li key={item.id}>
                  <NavLink to={`/detail/${item.id}/${item.movie}`}>
                    {item.movie}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

// Center 页面
class Center extends Component {
  render() {
    return (
      <div>
        <h2>Center 页面</h2>
        <button
          onClick={() => {
            this.props.history.replace({
              pathname: '/home'
            })
          }}
        >
          go Home
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))
