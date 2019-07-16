import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/todoList'
import Hello from './components/hello'
import './index.scss'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>TodoList</h1>
        <hr/>
        <TodoList />
        <hr />
        <Hello />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
