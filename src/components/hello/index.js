import React from 'react'
import { actionsChangeName } from '@/store/hello/actions'
import store from '@/store'

export default class Hello extends React.Component {
  constructor() {
    super()

    this.state = {
      name: store.getState().hello.name
    }

    store.subscribe(() => {
      this.setState({
        name: store.getState().hello.name
      })
    })
  }

  render() {
    return (
      <div>
        <h1>我是 Hello 组件</h1>
        <p>仓库中的 name 叫做：{ this.state.name }</p>
        <button onClick={ this.handleChangeName }>修改仓库的 name</button>
      </div>
    )
  }

  handleChangeName = () => {
    store.dispatch(actionsChangeName('Big bai'))
  }
}
