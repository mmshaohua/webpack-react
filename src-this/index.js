import React, { Component, Fragment, PureComponent }  from 'react'
import ReactDOM  from 'react-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '大白',
      childName: '小白'
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  render() {
    console.log('App render')
    return (
      <Fragment>
        <h1>App Component</h1>
        <p>我的名字是--{this.state.name}</p>
        <button onClick = { this.handleChangeName.bind(this) }>修改自己的名字</button>
        <hr/>
        <Child name={ this.state.childName } fn={ this.handleClick } />
      </Fragment>
    )
  }

  // 修改 App 组件的名字
  handleChangeName() {
    this.setState({
      name: 'Big 白'
      // childName: 'Small 白'
    })
  }

  // 要安装 @babel/plugin-proposal-class-properties
  handleClick = name => {
    console.log('handleClick')
    this.setState({
      name: name
    })
  }
  // handleClick() {
  //   console.log('handleClick')
  //   this.setState({
  //     name: 'super 白'
  //   })
  // }
}

class Child extends PureComponent {
  render() {
    console.log('Child render')
    return (
      <Fragment>
        <h2>Child Component</h2>
        <p>我的名字是--{this.props.name}</p>
        <button onClick={() => {this.props.fn('super 白')} }>调用 App 的 handleClick 方法</button>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
