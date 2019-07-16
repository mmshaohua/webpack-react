import React from 'react'
import { connect } from 'react-redux'
import { actionsChangeInput, actionsAddTodo, actionsDelTodo, actionsInitTodoList } from '@/store/todo/actions'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.inputVal}
          onChange={this.props.handleChange}
          placeholder="请输入待办事项"
        />
        <button onClick={this.props.handleAdd}>添加</button>
        <ul>
          {
            this.props.todoList.map(item => {
              return (
                <li key={item.id}>
                  {item.todo}
                  <button onClick={() => {
                    this.props.handleDel(item.id)
                  }}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.props.initTodoList()
  }
}

const mapStateToProps = state => {
  return {
    inputVal: state.todo.inputVal,
    todoList: state.todo.todoList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange(e) { // 输入框值改变
      dispatch(actionsChangeInput(e.target.value))
    },

    handleAdd() { // 添加 todo 事项
      dispatch(actionsAddTodo())
    },

    handleDel(id) { // 删除 todo 事项
      dispatch(actionsDelTodo(id))
    },

    initTodoList() { // 初始化 todoList
      dispatch(actionsInitTodoList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
