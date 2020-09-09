import React, { useState } from "react"

const Header = () => {

  const [condition, setCondition] = useState(true);

  //console.log('come', condition)

  return (

    <div className="container-fluid toast-msg">
      <div className="col-md-12 bg-left">
        <div className={condition ? `toast show` : "toast fade hide"} data-autohide="false">
          <div className="toast-header">
            <strong className="mr-auto text-primary">Toast Header</strong>
            <small className="text-muted">5 mins ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              datadismiss="toast"
              onClick={() => setCondition(!condition)}
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