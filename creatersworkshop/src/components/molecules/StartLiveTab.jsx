import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import '../../styles/molecules/StartLiveTab.css'

const StartLiveTab = () => {
  return (
    <div className = "StartLiveTab">
      <Link to="/live">StartLiveTab</Link>
    </div>
  )
}

export default StartLiveTab;
