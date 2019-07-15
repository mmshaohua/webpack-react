import React from 'react'
import { AddTodo, DelTodo, ChangeInput } from '@/store/actionCreates'
import store from '@/store'

// console.log(store.getState().todoList)

export default class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      inputVal: store.getState().inputVal,
      todoList: store.getState().todoList
    }

    store.subscribe(() => {
      // console.log(store.getState())
      // let list = this.state.todoList
      // list.push(store.getState().todoList)
      this.setState({
        todoList: store.getState().todoList,
        inputVal: store.getState().inputVal
      })
      
      // console.log(this.state.todoList)
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
                  {item}
                  <button onClick={() => {
                    this.handleDel(index)
                  }}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  
  handleChange = (e) => {
    store.dispatch(ChangeInput(e.target.value))
  //   this.setState({
  //     inputVal: e.target.value
  //   })
  }

  // 普通方式 自定义动作对象
  handleAdd = () => {
    // let action = {
    //   type: 'actionsAddTodo',
    //   value: this.state.inputVal
    // }
    
    // if (this.state.inputVal) {
    //   store.dispatch(action)
    // }
    store.dispatch(AddTodo(this.state.inputVal))
    
    this.refs.myInput.focus()
    // console.log(111)
  }
  handleDel = index => {
    // let action = {
    //   type: 'actionsDelTodo',
    //   index
    // }
    
    // store.dispatch(action)
    
    store.dispatch(DelTodo(index))
  }
}
