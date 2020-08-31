import React from "react"

const ChartTwo = () => {
  //console.log("%c RENDER Nav', 'color: orange; font-size: 20px")

  return (
    <div className="row">
  
    <div className="col-md-4 mb">
      <div className="weather pn">
        <i className="fa fa-cloud fa-4x" />
        <h2>11º C</h2>
        <h4>BUDAPEST</h4>
      </div>
    </div>
  
  
    <div className="col-md-8 mb">
      <div className="message-p pn">
        <div className="message-header">
          <h5>DIRECT MESSAGE</h5>
        </div>
        <div className="row">
          <div className="col-md-3 centered hidden-sm hidden-xs">
            <img
              src="img/ui-danro.jpg"
              className="img-circle"
              width={65}
              alt="alt"
            />
          </div>
          <div className="col-md-9">
            <p>
              Dan Rogers
              sent you a message.
            </p>
            <p className="small">3 hours ago</p>
            <p className="message">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <form className="form-inline" role="form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText"
                  placeholder="Reply Dan"
                />
              </div>
              <button type="submit" className="btn btn-default">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    
    </div>
  
  </div>
 
  )

}

export default ChartTwo 