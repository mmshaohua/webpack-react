import React from 'react'
import './index.css'

export default class UserList extends React.PureComponent {
  state = {
    userList: [],
    cityList: []
  }

  render() {
    let { userList } = this.state
    return (
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>密码</th>
            <th>性别</th>
            <th>城市</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{ item.id }</td>
                  <td>{ item.userName }</td>
                  <td>{ item.password }</td>
                  <td>{ item.sex }</td>
                  <td>{ item.city }</td>
                  <td><button onClick={ () => { this.handleDel(item.id) }}>删除</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
  getUserList = () => {
    fetch('http://localhost:9090/users')
      .then(response => response.json())
      .then(res => {
        // res.map(item => (item.sex === '0' ? '女' : '男'))
        res.map(item => (item.sex = item.sex === 0 ? '女' : '男'))
        res.map(item => {
           let aaa = this.state.cityList.filter(city => (item.city === city.cityId))
          // console.log(aaa)
          return item.city = aaa[0].city
        })
        this.setState({
          userList: res
        })
        
        // console.log(res)
        // console.log(this.state.cityList)
      })
  }

  getCityList = () => {
    fetch('http://localhost:9090/cityList')
      .then(response => response.json())
      .then(res => {
        this.setState({
          cityList: res
        })
      })
  }

  handleDel = id => {
    // console.log(index)
    // let list = this.state.userList
    // list.splice(index, 1)
    // this.setState({
    //   userList: list
    // })
    // console.log(this.state.userList)

    fetch(`http://localhost:9090/users/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-type':'application/json'
      }
    })
      .then(response => response.json())
      .then(res => {
        // this.setState({
        //   userList: res
        // })
        this.getUserList()
        console.log(res)
      })
  }

  // componentDidUpdate(props, state) {
  //   if (state.userList === this.state.userList) {
  //     this.getUserList()
  //   }
  // }

  componentDidMount() {
    this.getCityList()
    this.getUserList()
  }
}
