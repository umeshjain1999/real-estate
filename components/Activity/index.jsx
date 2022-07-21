import React from 'react'
import { useState } from 'react'
import Button from '@components/Button'
import ProjectCard from '@components/ProjectCard'
function Activity({
  listings = {},
  tabArr = ['saved','enquired','searches']
}) {
  const initialState = tabArr[0]
  const [currentTab,setTab] = useState(initialState)
  return (
    <div className='activity__tab'>
      <div className="activity__tab-wrap">
        {tabArr && tabArr.map((data,index) => {
          let text = data + " " + `(${listings[data]?.length ? listings[data]?.length : 0 })`
          return(
              <Button key={index} onClick={() => setTab(data)} text= {text} className = {`activity__tab-wrap-btn ${data === currentTab ? 'active' : ''}`}/>
          )
        })}
      </div>
      <div className="activity__tab-data">
        {listings && listings[currentTab] && listings[currentTab].length ? listings[currentTab].map((data) => {
          return(
            <ProjectCard
              projectInfo = {data}
              key = {currentTab + data.id}
              horizontal = {true}
              feature = {false}
              provider = {false}
              className = 'animation-fade-in-top'
            />
          )
        }) : "No properties here"}
      </div>
    </div>
  )
}

export default Activity