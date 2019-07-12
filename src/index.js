import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import User from './components/user'
import './index.scss'

class App extends React.Component {
  state = {
    userName: '',
    password: '',
    sex: '1',
    cityId: '',
    isOk: false,
    cityList: []
  }

  render() {
    return (
      <Fragment>
        <div className="form">
        <label>姓名：
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChangeUser}
            placeholder="请输入用户名"
          />
        </label>

        <label>密码：
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangeUser}
            placeholder="请输入密码"
          />
        </label>
        
        <label>性别：
          男 <input
            type="radio"
            name="sex"
            value='1'
            onChange={this.handleChangeUser}
            checked={this.state.sex === '1'}
          />
          女 <input
            type="radio"
            name="sex"
            value='0'
            onChange={this.handleChangeUser}
            checked={this.state.sex === '0'}
          />
        </label>

        <label> 城市：
          <select
            name="cityId"
            value={this.state.cityId}
            onChange={this.handleChangeUser}>
            <option disabled value="">
              请选择现住城市
            </option>
            {
              this.state.cityList.map(item => {
                return (
                  <option 
                    key={item.id}
                    value={item.cityId} 
                    onChange={this.handleChangeUser}
                  >{item.city}</option>
                )
              })
            }
          </select>
        </label>

        <label>是否同意 
          <input
            type="checkbox"
            name="isOk"
            checked={this.state.isOk}
            onChange={this.handleChangeUser}
          />
        </label>
        
        <button
          disabled={this.isDisabled()}
          onClick={this.handleRegister}
        >注册</button>
      </div>
        <hr/>
        <User />
      </Fragment>
    )
    }
  handleChangeUser = (e) => {
    // console.log(e.target.name)
    let name = e.target.name

    if (name === 'isOk') {
      this.setState({
        isOk: !this.state.isOk
      })
    } else {
      this.setState({
        [name]: e.target.value
      })
    }
  }

  isDisabled = () => {
    let { userName, password, cityId, isOk } = this.state
    if (userName && password && cityId && isOk) {
      return false
    }
    
    return true
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

  handleRegister = () => {
    fetch('http://localhost:9090/users', {
      method: 'POST',
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
        sex: parseInt(this.state.sex),
        city: this.state.cityId
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(res => {
        console.log(this)
      })
      
  }
  
  componentDidMount() {
    this.getCityList()
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
