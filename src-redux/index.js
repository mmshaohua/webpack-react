import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/todoList'
import './index.scss'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>TodoList</h1>
        <hr/>
        <TodoList />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
