import React from 'react'
import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import ModalActions from './ModalActions'
import './styles.scss'

const Modal = ({ open, children, onClose }) => {
  if (!open) {
    return null
  }

  const stopPropagation = event => {
    event.stopPropagation()
  }
  return (
    <div className="modal--fog" onClick={onClose}>
      <div className="modal--container" onClick={stopPropagation}>
        {children}
      </div>
    </div>
  )
}

Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Actions = ModalActions

export default Modal
