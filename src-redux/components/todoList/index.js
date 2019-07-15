import React from 'react'
import {
  actionsChangeInput,
  actionsAddTodo,
  actionsInitTodoList,
  actionsDelTodo
} from '@/store/actions'
import store from '@/store'

export default class TodoList extends React.Component {
  constructor() {
    super()

    // console.log(store.getState())

    this.state = {
      inputVal: store.getState().inputVal, // 输入框值
      todoList: store.getState().todoList // todo 列表
    }

    store.subscribe(() => {
      // console.log(store.getState().todoList)
      this.setState({
        todoList: store.getState().todoList,
        inputVal: store.getState().inputVal
      })
    })
  }

  render() {
    return (
      <div>
        <input
          ref='myInput'
          type="text"
          value={this.state.inputVal}
          onChange={this.handleChange}
          placeholder="请输入待办事项"
        />
        <button onClick={this.handleAdd}>添加</button>
        <ul>
          {
            this.state.todoList.map((item, index) => {
              return (
                <li key={index}>
                  {item.todo}
                  <button onClick={() => {
                    this.handleDel(item.id)
                  }}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  /**
   * 输入框输入事件处理
   */
  handleChange(e) {
    store.dispatch(actionsChangeInput(e.target.value))
  }

  
  /**
   * 添加 todo 事项
   */
  handleAdd = () => {
    if (!this.state.inputVal) {
      alert('请输入内容')
      return
    }
    store.dispatch(actionsAddTodo())
    this.refs.myInput.focus()
    // this.setState({
    //   inputVal: ''
    // })
  }

  /**
   * 删除 todo 事项
   */
  handleDel = id => {
    // console.log(index)
    store.dispatch(actionsDelTodo(id))
  }

  componentDidMount() {
    store.dispatch(actionsInitTodoList())
  }
}
