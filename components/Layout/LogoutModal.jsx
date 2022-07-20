import CustomModal from '@components/Modal'
import React from 'react'
import Card from '@components/Card'
import Button from '@components/Button'
function LogoutModal({
  open,
  onClose
}) {

  const onLogout = () => {
    //! logout operation
    alert('logout operation.')
    onClose()
  }

  return (
    <CustomModal open = {open} onClose = {onClose}>
      <Card title = 'Logout' className = 'logout__modal center'>
        <div className="logout__modal-text">
          Are you sure you want to logout ?
        </div>
        <div className="logout__modal-button-wrap">
          <Button onClick = {onClose} text='no' className='logout__modal-cancel-button'/>
          <Button onClick = {onLogout} icon='check' iconPosition = 'right' text='Yes' variant='secondary' type='submit' className='logout__modal-button'/>
        </div>
      </Card>
    </CustomModal>
  )
}

export default LogoutModal