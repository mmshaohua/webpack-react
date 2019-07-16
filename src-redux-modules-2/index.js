import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import TodoList from './components/todoList'
import Hello from './components/hello'
import './index.scss'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>TodoList</h1>
        <hr/>
        <TodoList />
        <hr />
        <Hello />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
