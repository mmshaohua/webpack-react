import React, { Fragment, Component } from 'react'
import ReactDOM from 'react-dom'
import { string, number } from 'prop-types'

// const name = 'Wrold'
// const h1 = <h1>Hello, { name }!</h1>
// ReactDOM.render(h1, document.getElementById('root'))

// function formatName (user) {
//   return user.firstName + '' + user.lastName
// }
// const user = {
//   firstName: 'xiao',
//   lastName: 'bai'
// }
// const element = <h1>Hello, { formatName(user) }!</h1>
// ReactDOM.render(element, document.getElementById('root'))

// const element = React.createElement('h1', { id: 'box', title: 'hello' }, [
//   React.createElement('span', null, 'hello'),
//   React.createElement('p', null, 'world'),
// ])

// console.log(element)

// let name = 'xiaobai'
// let str = '<h1>nice to meet you</h1>'

// ReactDOM.render(
//   <Fragment>
//     <p className='box'>{ name }</p>
//     {/* <p style='{ color: red }'>{ name }</p> */}
//     <p style={{ color: 'red', fontSize: '20px' }}>{ name }</p>
//     <div dangerouslySetInnerHTML={{ __html: str }}></div>
    
//     <label htmlFor="abc">abc</label>
//     <input type="text" id='abc' />
//   </Fragment>
//   , document.getElementById('root'))

// function tick () {
//   const element = (
//     <div>
//       <h1>hello, world!</h1>
//       <h2>It is { new Date().toLocaleTimeString() }</h2>
//     </div> 
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }
// setInterval(tick, 1000)

// 函数式组件
// const Foo = (props) => {
//   // console.log(props)
//   return <div>xiaobai---{ props.id }</div>
// }

// // 类组件
// class Bar extends Component {
//   render () {
//     return (
//       <div>xiaobai---{ this.props.age }</div>
//       )
//   }
// }

// Foo.prototype = {
//   id: string
// }
  
// ReactDOM.render(
//   <div>
//     <Foo id='box'>hello</Foo>
//     <Bar age={222}>world</Bar>
//   </div>,
//   document.getElementById('root')
// )

// const handleLogin = (isLogin) => {
//   console.log(isLogin)
//   isLogin = false
// }
// const handleLogout = (isLogin) =>{
//   console.log(isLogin)
// }
// class App extends Component {
//   render() {
//     let btn = null
//     if (this.props.isLogin) {
//       btn = <button onClick={() => { handleLogin(this.props.isLogin)}}>login</button>
//     } else {
//       btn = <button onClick={() => { handleLogout(this.props.isLogin)}}>logout</button>
//     }
//     return (
//       <div>
//         仲恺后台管理系统 { btn }
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <App isLogin={true} />,
//   document.getElementById('root')
// )

// class App extends Component {
//   render () {
//     let list = ['apple', 'banner', 'orange']
//     let res = []
//     for (let i = 0; i < list.length; i++) {
//       res.push(<li>{list[i]}</li>)
//       // res = list.map(item => (
//       //   <li>{item}</li>
//       // ))
//     }
//     return (
//       <div>
//         <h1>水果拼盘</h1>
//         <ul>{ res }</ul>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'))

// let list = ['a', 'b', 'c']
// const handleAdd = () => {
//   // console.log(111)
//   let myInput = document.getElementById('myInput')
//   list.push(myInput.value)
//   myInput.value = ''
//   myInput.focus()
//   // console.log(list)
//   ReactDOM.render(<App />, document.getElementById('root'))
// }
// const handleDel = (index, event) => {
//   // console.log(index, event)
//   list.splice(index, 1)
//   ReactDOM.render(<App />, document.getElementById('root'))
// }
// const App = () => {
//   return (
//     <div>
//       <input type="text" id="myInput" />
//       <button onClick={ handleAdd }>ADD</button>
//       <ul>
//         {
//           /* list.map((item, index) => {
//             return (
//               <li key={index}>
//                 {item}
//                 <button onClick={() => {
//                   handleDel(index)
//                 }}>delete</button>
//               </li>
//             )
//           }) */
//         }
//         {
//           list.map((item, index) => {
//             return (
//               <li key={index}>
//                 {item}
//                 <button onClick={ handleDel.bind(this, index) }>delete</button>
//               </li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }
// ReactDOM.render(<App />, document.getElementById('root'))

// function Clock (props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }
// class Clock extends Component {
//   constructor (props) {
//     super(props)
//     this.state = { date: new Date() }
//   }
//   componentDidMount() {
//     this.timer = setInterval(
//       () => this.tick(), 1000
//     )
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }
//   render () {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// )

// setInterval(tick, 1000);

// let list = []
// const handleAdd = () => {
//   let myInput = document.getElementById('myInput')
//   list.push(myInput.value)
//   myInput.value = ''
//   myInput.focus()
//   ReactDOM.render(<App />, document.getElementById('root'))
// }
// const handleDel = (index, event) => {
//   list.splice(index, 1)
//   ReactDOM.render(<App />, document.getElementById('root'))
// }

// let list = []
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputVal: ''
    }
  }
  componentDidMount() {
    // console.log(this)
  }
  handleAdd() {
    // console.log(this)
    // let myInput = document.getElementById('myInput')
    // console.log(myInput.value)
    // this.setState((state) => ({
    //   list: state.list.push(state.inputVal)
    // }))
    // // list = 1 ? 返回的是长度

    // let newList = this.state.list
    // newList.push(this.state.inputVal)
    // this.setState({
    //   list: newList
    // })
    if (this.state.inputVal) {
      this.setState({
        list: [...this.state.list, this.state.inputVal],
        inputVal: ''
      })
      // console.log(this.refs.myInput.focus)
      this.refs.myInput.focus()
    }

    // this.state.list.push(myInput.value)
    // myInput.value = ''
    // myInput.focus()
    // console.log(this.state.list)
    // ReactDOM.render(<App />, document.getElementById('root'))
    // this.handleUpdate()
  }
  handleDel(index) {
    let newList = JSON.parse(JSON.stringify(this.state.list))
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
    // this.state.list.splice(index, 1)
    // ReactDOM.render(<App />, document.getElementById('root'))
  }
  handleChange(event) {
    let value = event.target.value
    this.setState({
      inputVal: value
    })
  }
  // handleUpdate() {
  //   this.setState({
  //     list
  //   })
  // }
  render() {
    let { list, inputVal } = this.state
    return (
      <div>
        <input type="text" ref="myInput" value={inputVal} onChange={this.handleChange.bind(this)} id="myInput" />
        <button onClick={ this.handleAdd.bind(this) }>ADD</button>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={ this.handleDel.bind(this, index) }>delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
// const App = () => {
//   return (
//     <div>
//       <input type="text" id="myInput" />
//       <button onClick={ handleAdd }>ADD</button>
//       <ul>
//         {
//           list.map((item, index) => {
//             return (
//               <li key={index}>
//                 {item}
//                 <button onClick={ handleDel.bind(this, index) }>delete</button>
//               </li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }
ReactDOM.render(<App />, document.getElementById('root'))
