import * as constants from './constants'

export const actionsChangeName = value => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: constants.changeName,
        value
      })
    }, 2000)
  }
}
 