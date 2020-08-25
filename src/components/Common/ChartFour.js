import React from "react"
import { Link } from "react-router-dom"


const ChartFour = () => {
	console.log("%c RENDER Nav', 'color: orange; font-size: 20px")

	return (

    <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 mb">
      <div className="product-panel-2 pn">
        <div className="badge badge-hot">HOT</div>
        <img src="img/product.jpg" width={200} alt />
        <h5 className="mt">Flat Pack Heritage</h5>
        <h6>TOTAL SALES: 1388</h6>
        <button className="btn btn-small btn-theme04">
          FULL REPORT
        </button>
      </div>
    </div>
  
  
    <div className="col-lg-4 col-md-4 col-sm-4 mb">
      <div className="content-panel pn">
        <div id="profile-02">
          <div className="user">
            <img
              src="img/friends/fr-06.jpg"
              className="img-circle"
              width={80}
            />
            <h4>DJ SHERMAN</h4>
          </div>
        </div>
        <div className="pr2-social centered">
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
        </div>
      </div>
    
    </div>
  
    <div className="col-md-4 col-sm-4 mb">
      <div className="green-panel pn">
        <div className="green-header">
          <h5>DISK SPACE</h5>
        </div>
        <canvas id="serverstatus03" height={120} width={120} />
        <h3>60% USED</h3>
      </div>
    </div>
  
  </div>
   )

}

export default ChartFour 