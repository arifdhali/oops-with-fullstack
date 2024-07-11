import React from "react";
const ItemForm = () => {
  const handelInput = ()=>{
    
  }

  return (
    <>
      <div className="add-form">
        <form className="w-50 bg-white p-4 rounded-3">
          <div className="form-group mb-2">
            <label htmlFor="" >Name</label>
            <input onChange={handelInput} type="text" className="form-control py-2" />
          </div>
          <div className="form-group">
            <label htmlFor="">Duration</label>
            <input onChange={handelInput} type="text" className="form-control py-2" />
          </div>
          <div className="submit-button mt-4">
            <button type="submit" className="btn btn-primary py-2 w-100">
              Submit
            </button>
          </div>
        </form>
      </div>

    </>
  );
};

export default ItemForm;
