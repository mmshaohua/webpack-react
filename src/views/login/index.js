import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login 页</h1>
        <button onClick={ this.props.handleLogin }>点我 login 成功</button>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch, props) => {
    // console.log(props)
    return {
      // 1. 派发动作，改变仓库登录状态
      handleLogin() {
        dispatch({
          type: 'login'
        })

        // 2. 登录成功，跳转回目标页面或首页 ?redirect=/card
        let redirect = props.location.search.replace('?', '') 
        let arr = redirect.split('&')
        let obj = {}
        arr.forEach(item => {
          let tmp = item.split('=') // { 'redirect', '/card' }
          obj[tmp[0]] = tmp[1] // { 'redirect': '/card' }
        })
        // console.log(obj) // {redirect: "/card"}
        redirect = obj.redirect || '/home'
        props.history.replace(redirect)
      }
    }
  }
)(Login)
