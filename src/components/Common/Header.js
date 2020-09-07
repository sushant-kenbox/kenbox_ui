import React, { useState } from "react"

const Header = () => {


  const divStyle = {
    display: 'block',
    opacity: '1'
  };


  return (

    <div className="container-fluid toast-msg">
      <div className="col-md-12 bg-left">
        <div className="toast" data-autohide="false" style={divStyle} >
          <div className="toast-header">
            <strong className="mr-auto text-primary">Toast Header</strong>
            <small className="text-muted">5 mins ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              datadismiss="toast"
            >
              ×
          </button>
          </div>
          <div className="toast-body">Some text inside the toast body</div>
        </div>
      </div>
    </div>
  
  )

}

export default Header