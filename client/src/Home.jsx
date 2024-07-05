import React from 'react'
import { LeftDashboard, RightDashboard } from './components'

const Home = () => {
  return (
        <div className="row vh-100 p-3">
          <div className="col-2">
            <div className="left-bar py-5 position-relative h-100">
              <LeftDashboard />
            </div>
          </div>
          <div className="col-10">
            <div className="right-bar p-5 h-100">
              <RightDashboard />
            </div>
          </div>
      </div>
  )
}

export default Home