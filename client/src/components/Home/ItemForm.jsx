import React from "react";
import LeftDashboard from "../LeftDashboard";

const ItemForm = () => {
  return (
    <>
      <div className="row vh-100 p-3">
        <LeftDashboard />
        <div className="col-10">
          <div className="right-bar p-5 h-100">
          <div className="page-healine">
                <span>Today main focus </span>
                <h3>Latest task with 08:00 am</h3>
            </div>
            <div className="add-form">
              <form className="w-50 bg-white p-4 rounded-3">
                <div className="form-group mb-2">
                  <label htmlFor="" >Name</label>
                  <input type="text" className="form-control py-2" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Duration</label>
                  <input type="text" className="form-control py-2" />
                </div>
                <div className="submit-button mt-4">
                  <button type="submit" className="btn btn-primary py-2 w-100">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemForm;
