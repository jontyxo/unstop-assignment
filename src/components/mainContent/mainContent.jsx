import React from 'react'
import "./MainContent.css"
import MainContentHeader from '../mainContentHeader/mainContentHeader'
import MainContentOverview from '../mainContentOverview/mainContentOverview'
import MainContentCard from '../mainContentCard/mainContentCard'

function MainContent() {
  return (
    <div className="MainContent">
      <div><MainContentHeader /></div>
      <div><MainContentOverview /></div>
      <div><MainContentCard /></div>
    </div>
  )
}

export default MainContent