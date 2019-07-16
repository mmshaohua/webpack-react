import React from 'react'
import { actionsChangeName } from '@/store/hello/actions'
import { connect } from 'react-redux'

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>我是 Hello 组件</h1>
        <p>仓库中的 name 叫做：{ this.props.name }</p>
        <button onClick={ this.props.handleChangeName }>修改仓库的 name</button>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      name: state.hello.name
    }
  },

  dispatch => {
    return {
      handleChangeName() {
        dispatch(actionsChangeName('Big Bai'))
      }
    }
  }
)(Hello)
