import Modal from '@mui/material/Modal';
import React from 'react'

function CustomModal(props) {
  const {open,onClose,...remainingProps} = props
  return (
    <Modal
    {...remainingProps}
    open = {open}
    onClose = {onClose}
    disableEscapeKeyDown = {true}
    >
      <div>
        {props.children}
      </div>
    </Modal>
  )
}

export default CustomModal