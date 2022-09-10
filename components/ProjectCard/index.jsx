/* library */
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
/* components */
import Icon from '@components/Icon';
/* constant */
import { CURRENCY, ERROR_MESSAGE } from '@constants/constant';
/* hooks */
import { useLoginModalContext, useAuthContext } from 'hooks';
/* helpers */
import { getProjectDetail, addCartProject, deleteCartProject } from 'helpers';

function ProjectCard(props) {
  const { enqueueSnackbar } = useSnackbar()
  const { projectInfo = {}, horizontal = false, feature = true, provider = true, address = true, className = '', ...remainingProps } = props
  const { toggleLoginModal } = useLoginModalContext()
  const { user } = useAuthContext()
  const cartId = user?.metadata || null
  const [Saved, setSaved] = useState(false)
  const [ItemId, setItemId] = useState(null)

  const filterData = {
    id: projectInfo?.id || '1',
    name: projectInfo?.name || 'none',
    price: projectInfo?.price || 'none',
    picturePath: projectInfo?.image || '/assets/images/image-loader.svg',
    provider: projectInfo?.provider || 'sqfthomes',
    address: projectInfo?.address || 'none',
    rooms: projectInfo?.rooms || false,
    bathrooms: projectInfo?.bathrooms || false,
    parking: projectInfo?.parking || false,
    area: projectInfo?.area || false,
    saved: projectInfo?.saved || false,
  }

  const handleAddCartApi = async () => {
    const res = await getProjectDetail(filterData?.id)
    if (res && res?.variants && res?.variants[0] && res?.variants[0]?.id) {
      const variantId = res?.variants[0]?.id
      const addCartRes = await addCartProject({
        cartId: cartId,
        variantId: variantId
      })
      if (addCartRes && addCartRes?.cart && addCartRes?.cart?.items?.length) {
        setSaved(true)
        setItemId(addCartRes?.cart?.items[0]?.id)
        enqueueSnackbar("Added to Wishlist!", { variant: 'success' })
      } else {
        enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
      }
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  const handleDeleteCartApi = async () => {
    const res = await deleteCartProject({
      cartId: cartId,
      itemId: ItemId
    })
    if (res) {
      enqueueSnackbar("Removed from Wishlist.", { variant: 'info' })
      setSaved(false)
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  const handleSaveLater = () => {
    if (user && cartId) {
      if (!Saved) {
        handleAddCartApi()
      } else {
        handleDeleteCartApi()
      }
    } else {
      toggleLoginModal()
    }
  }


  return (
    <div {...remainingProps} className={`project-res animation-fade-in-top ${className}`}>
      <Link href={`/projects/${filterData.id}`}>
        <a className="project-overlay"></a>
      </Link>
      <div className={`project-card ${horizontal ? 'project-horizontal' : ''}`}>
        <div className="project-img">
          <Image
            src={filterData?.picturePath}
            alt={'Property'}
            layout="fill"
            sizes='50vw'
            placeholder='blur'
            blurDataURL='/assets/images/image-loader.svg'
          />
        </div>
        <div className='project-wrap'>
          <div className="project-content">
            <div className="project-name-wrap">
              <div className="project-name">{filterData.name}</div>
              <div className="project-price">{CURRENCY} {filterData.price}</div>
            </div>
            {provider && <div className="project-provider">{filterData.provider}</div>}
            {address && <div className="project-address vertical-center"><Icon icon='projectDirection' /><span className='project-text'>{filterData.address}</span></div>}
          </div>
          {feature && <div className="project-feat">
            <div className='project-feat-left'>
              {filterData.rooms && <span className='project-feat-icon vertical-center'><Icon icon='projectBed' /> {filterData.rooms}</span>}
              {filterData.bathrooms && <span className='project-feat-icon vertical-center'><Icon icon='projectShower' /> {filterData.bathrooms}</span>}
              {filterData.parking && <span className='project-feat-icon vertical-center'><Icon icon='projectCar' /> {filterData.parking}</span>}
              {filterData.area && <span className='project-feat-icon vertical-center'><Icon icon='projectArea' /> {filterData.area}</span>}
            </div>
            {enableSaveFeature && <span onClick={() => handleSaveLater()} className={`vertical-center project-save`} title="Add to Wishlist"><Icon icon={`${filterData.saved || Saved ? 'projectSaved' : 'projectFav'}`} /> {filterData.saved || Saved ? '' : 'Save'}</span>}
          </div>}
        </div>
      </div>
    </div>
  )
}

const enableSaveFeature = true

export default ProjectCard