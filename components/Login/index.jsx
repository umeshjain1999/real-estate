import React from 'react'
import CustomModal from '@components/Modal';
import Card from '@components/Card';
function Login({
  open,
  onClose
}) {
  return (
    <CustomModal open = {open} onClose = {onClose}>
      <Card title = {'Sign in to continue'} className='login-modal center' >
        :o
      </Card>
    </CustomModal>
  )
}

export default Login