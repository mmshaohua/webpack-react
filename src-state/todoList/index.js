import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '', // 输入框的值
      todoList: [] // 待办事项列表
    }
  }
  // 双向绑定 inputVal 类似于 v-model="inputVal"
  handleChange(e) {
    let value = e.target.value
    this.setState({
      inputVal: value
    })
  }

  // 添加 todo 事项
  handleAdd() {
    this.setState({
      todoList: [...this.state.todoList, this.state.inputVal],
      inputVal: ''
    })
    this.refs.myInput.focus()
  }

  // 删除 todo 事项
  handleDel(index) {
    // console.log(index)
    let newList = JSON.parse(JSON.stringify(this.state.todoList))
    newList.splice(index, 1)
    this.setState({
      todoList: newList
    })
  }

  render() {
    let { inputVal, todoList } = this.state
    return (
      <div>
        <input
          type="text"
          ref='myInput'
          value={ inputVal }
          onChange={ this.handleChange.bind(this) }
        />
        <button onClick={ this.handleAdd.bind(this) }>ADD</button>
        <ul>
          {
            todoList.map((item, index) => (
            <li key = { index }>
              { item }
              <button onClick={ this.handleDel.bind(this, index) }>DEL</button>
            </li>
            ))
          }
        </ul>
      </div>
    )
  }
}