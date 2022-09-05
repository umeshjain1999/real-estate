import Modal from '@mui/material/Modal';
import React from 'react'

function CustomModal(props) {
  const { open, onClose, backdropClick = false, ...remainingProps } = props
  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick' && backdropClick) return;
    onClose()
  }
  return (
    <Modal
      {...remainingProps}
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown={true}
    >
      <div>
        {props.children}
      </div>
    </Modal>
  )
}

export default CustomModal