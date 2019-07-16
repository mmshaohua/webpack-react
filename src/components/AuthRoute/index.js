import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class AuthRoute extends React.Component {
  render() {
    console.log(this.props)
    let { path, userInfo, component: Com } = this.props
    
    // if (userInfo) {
    //   // console.log(props)
    //   return <Com {...props} />
    // } else {
    //   return <Redirect to='/login?redirect=/card' />
    // }

    return (
      <Route
        path={path}
        render={
          props => {
            if (userInfo) {
              // console.log(props)
              return <Com {...props} />
            } else {
              return <Redirect to={`/login?redirect=${path}`} />
            }
          }
        }
      />
    )
  }
}

export default connect(
  state => ({
    userInfo: state.userInfo  
  })
)(AuthRoute)
