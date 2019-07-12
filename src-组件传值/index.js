import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      oneVal: '我是app的值',
      name: 'app',
      twoVal: 'two'
    }
  }
  render() {
    return (
      <div className='app'>
        我是 App 组件
        <p>我的名字是{ this.state.name }</p>
        <One one={this.state.oneVal} fn1={ this.handelChange } fn2={ this.handleChangeTwo } />
        <Two two={this.state.twoVal} />
      </div>
    )
  }
  handelChange = name => {
    this.setState({
      name: name
    })
  }
  handleChangeTwo = name => {
    this.setState({
      twoVal: name
    })
  }
}
class One extends Component {
  render() {
    let name = 'paa'
    // console.log(this)
    return (
      <div className='one'>
        我是 One 组件
        <p>{this.props.one}</p>
        <button onClick={() => {
          this.props.fn1(name)
        }}>点击修改app的名字为 ppa</button>
        <button onClick={() => {
          this.props.fn2(name)
        }}>点击修改two的名字为 ppa</button>
      </div>
    )
  }
}
class Two extends Component {
  render() {
    return (
      <div className='two'>
        我是 Two 组件
        <p>我的名字是{this.props.two}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
