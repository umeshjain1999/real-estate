import { CustomMultiSelect, CustomSelect } from '@components/Select'
import { PriceRange } from '@components/Projects'
import { useToggle } from 'hooks'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Filter({
  beds = false,
  locality = false,
  status = false
}) {
  const router = useRouter()
  const { toggle, updateToggle } = useToggle(true)
  const [defaultValue, setDefaultValue] = useState({})
  useEffect(() => {
    const { query } = router
    if (query) {
      setDefaultValue({ ...query })
    }
  }, [router])

  const handleClearAll = () => {
    router.push({
      query: {}
    })
  }
  const handleSelectDropdown = (type, obj) => {
    let typeValue = obj.join(',');

    const currentQuery = router.query
    if (type) {
      router.push({
        query: {
          ...currentQuery,
          [type]: typeValue
        }
      })
    }
  }
  const handlePriceRange = (min, max) => {
    if (min && max) {
      const currentQuery = router.query
      router.push({
        query: {
          ...currentQuery,
          'priceMin': min,
          'priceMax': max,
        }
      })
    }
  }
  const handlePriceRangeDefaultValue = (min, max) => {
    if (min && max && max > min) {
      const updatedMin = Math.floor(min / 1000)
      const updatedMax = Math.floor(max / 1000)
      return [updatedMin, updatedMax]
    } else {
      return [10, 50]
    }
  }
  const containerVariants = {
    open: {
      visibility: `visible`,
      height: `auto`,
      margin: `0 -1.5rem 2.5rem`,
    },
    closed: {
      visibility: `hidden`,
      height: `0px`,
      margin: `0 -1.5rem`,
    },
  }
  return (
    <>
      <div className="projects__filter-btn-wrap divider-sm">
        <div onClick={updateToggle} className="projects__filter-btn">{toggle ? "Hide Filter" : "Show Filter"}</div>
        <div onClick={handleClearAll} className="projects__filter-btn projects__filter-btn-clear">Clear all</div>
      </div>
      <motion.div
        initial={`open`}
        animate={toggle ? `open` : `closed`}
        variants={containerVariants}
        className={`projects__filter ${toggle && 'projects__filter-active'}`}>
        <CustomMultiSelect defaultValue={defaultValue['locality']?.split(",")} selectOptions={locality?.arr} title={locality?.title} queryName={locality?.queryName} onChange={handleSelectDropdown} />
        <CustomMultiSelect defaultValue={defaultValue['rooms']?.split(",")} selectOptions={beds?.arr} title={beds?.title} queryName={beds?.queryName} onChange={handleSelectDropdown} />
        <CustomSelect defaultValue={defaultValue['status']} selectOptions={status?.arr} title={status?.title} queryName={status?.queryName} onChange={handleSelectDropdown} />
        <PriceRange defaultValue={handlePriceRangeDefaultValue(defaultValue['priceMin'], defaultValue['priceMax'])} handlePriceRange={handlePriceRange} />
      </motion.div>
    </>
  )
}

export default Filter