import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// export default class Card extends React.Component {
//   render() {
//     return (
//       <h1>Card 页</h1>
//     )
//   }
// }

class Card extends React.Component {
  render() {
    // console.log(this)
    
    if (this.props.userInfo) {
      return <h1>Card 页</h1>
    } else {
      return <Redirect to='/login?redirect=/card' />
    }
  }
}

export default connect(
  state => ({
    userInfo: state.userInfo  
  })
)(Card)
