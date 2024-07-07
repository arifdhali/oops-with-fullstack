import React from 'react'

import { FaDotCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ItemList = () => {
  return (
    <li className="task-item p-3 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <FaDotCircle fill="red" className="me-3" />
        <div className="task-name">
          New project
        </div>
      </div>
      <div className="d-flex align-items-center task-info">
        <IoMdCheckmarkCircleOutline fill="#a18aff" className="mx-2" />
      </div>
    </li>
  )
}

export default ItemList