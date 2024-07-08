import React from 'react'
import { ItemList } from '../components'

const Home = () => {
  return (
    <>
      {/* Search bar */}
      <div className="mb-5">
        <form action="" className="form">
          <label htmlFor="searchTask" className="fw-semibold">Search task</label>
          <input className="form-control shadow-none border-0 p-2" id="searchTask" type="text" />
        </form>
      </div>

      {/* Task list */}
      <ul>
        <ItemList />
      </ul>
    </>

  )
}

export default Home;