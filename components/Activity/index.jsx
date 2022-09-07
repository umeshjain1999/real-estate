/* library */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
/* components */
import Button from '@components/Button'
import ProjectCard from '@components/ProjectCard'
import Icon from '@components/Icon'
/* hooks */
import { useAuthContext } from 'hooks'
/* helpers */
import { deleteCartProject } from 'helpers'
/* constants */
import { ERROR_MESSAGE } from '@constants/constant'
function Activity({
  listings = {},
}) {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const { user } = useAuthContext()
  const cartId = user?.metadata || null

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
        enqueueSnackbar('Removed from Wishlist.', { variant: 'info' })
        //? to get updated list of cart
        router.replace(router.asPath)
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