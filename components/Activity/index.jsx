import React, { useState } from 'react'
import { useSnackbar } from 'notistack'
import Button from '@components/Button'
import ProjectCard from '@components/ProjectCard'
import Icon from '@components/Icon'
import { useAuthContext } from 'hooks'
import { deleteCartProject } from 'helpers'
import { ERROR_MESSAGE } from '@constants/constant'
function Activity({
  listings = {},
}) {
  const { enqueueSnackbar } = useSnackbar()
  const { cartId } = useAuthContext()

  let tabArr = []
  if (listings) {
    tabArr = Object.keys(listings)
  }
  const initialState = tabArr[0]
  const [currentTab, setTab] = useState(initialState)

  const handleDeleteItemFromCart = async (id) => {
    if (id) {
      const res = await deleteCartProject({
        cartId: cartId,
        itemId: id
      })
      if (res) {
        enqueueSnackbar('Deleted Successfully', { variant: 'info' })
      } else {
        enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
      }
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  return (
    <div className='activity__tab'>
      <div className="activity__tab-wrap">
        {tabArr && tabArr.map((data, index) => {
          let text = data + " " + `(${listings[data]?.length ? listings[data]?.length : 0})`
          return (
            <Button key={index} onClick={() => setTab(data)} text={text} className={`activity__tab-wrap-btn ${data === currentTab ? 'active' : ''}`} />
          )
        })}
      </div>
      <div className="activity__tab-card">
        {listings && listings[currentTab] && listings[currentTab].length ? listings[currentTab].map((data) => {
          return (
            <div className='activity__tab-card-wrap' key={currentTab + data.id}>
              <ProjectCard
                projectInfo={data}
                horizontal={true}
                feature={false}
                provider={false}
                className='animation-fade-in-top'
              />
              <Icon onClick={() => handleDeleteItemFromCart(data?.itemId)} icon="delete" className="item-delete" title="delete item" />
            </div>
          )
        }) : "No properties here"}
      </div>
    </div>
  )
}

export default Activity