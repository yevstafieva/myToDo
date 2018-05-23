import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Popup from 'react-popup'

class PresentationalNewPopup extends Component {
  render() {
    if(this.props.popupDescription){
      setTimeout( () => Popup.alert(this.props.popupDescription) )
    } else {
      // Popup.close() <- not implemented
    }

    return null;
  }
}

const NewPopup = connect(
  (state) => { return { popupDescription: state.todoPopup } }
)(PresentationalNewPopup);

export default NewPopup;
