import React from 'react'
import { LeftDashboard, RightDashboard } from './components'

const Home = () => {
  return (
    <div className="row vh-100 p-3">
      <LeftDashboard />
      <div className="col-10">
        <div className="right-bar p-5 h-100">
        <div className="page-healine">
                <span>Today main focus </span>
                <h3>Latest task with 08:00 am</h3>
            </div>
          <RightDashboard />
        </div>
      </div>
    </div>
  )
}

export default Home;