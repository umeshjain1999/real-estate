import React from 'react'
import Icon from '@components/Icon';
import Link from 'next/link';
import Image from 'next/image';
import { CURRENCY } from '@constants/constant';
import { useLoginModalContext, useAuthContext } from 'hooks';

function ProjectCard(props) {
  const { projectInfo = {}, horizontal = false, feature = true, provider = true, address = true, className = '', ...remainingProps } = props
  const { toggleLoginModal } = useLoginModalContext()
  const { user, cartId } = useAuthContext()

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

  const getVariantId = () => {

  }

  const handleSaveLater = () => {
    if (user && cartId) {
      alert('call cart api')
    } else {
      toggleLoginModal()
    }
  }


  return (
    <div {...remainingProps} className={`project-res ${className}`}>
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
            {enableSaveFeature && <span onClick={() => handleSaveLater()} className={`vertical-center project-save`}><Icon icon={`${filterData.saved ? 'projectSaved' : 'projectFav'}`} /> {filterData.saved ? '' : 'Save'}</span>}
          </div>}
        </div>
      </div>
    </div>
  )
}

const enableSaveFeature = true

export default ProjectCard