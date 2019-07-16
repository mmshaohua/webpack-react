import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Hello = () => (
  <Router className='page-hello'>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/movie'>Movie</Link>
        </li>
      </ul>
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/movie' component={Movie} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>我是 Home 页面</h2>
  </div>
)

const Movie = ({ match }) => (
  <div>
    <h2>我是 Movie 页面</h2>
    <ul>
      <li>
        <Link to={`${match.url}/111`}>xiaoming</Link>
      </li>
      <li>
        <Link to={`${match.url}/222`}>xiaobai</Link>
      </li>
      <li>
        <Link to={`${match.url}/333`}>xiaohong</Link>
      </li>
    </ul>
    <Route path={`${match.url}/:id`} component={details} />
    <Route
      exact
      path={match.url}
      render={() => <h3>select one </h3>}
    />
  </div>
)

const details = ({ match }) => {
  console.log(match)
  return (
    <h3>{match.url}</h3>
  )
}

export default Hello
