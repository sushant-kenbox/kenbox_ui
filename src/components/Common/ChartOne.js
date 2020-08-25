import React from "react"
import { Link } from "react-router-dom"


const ChartOne = () => {
  console.log("%c RENDER Nav', 'color: orange; font-size: 20px")

  return (

    <div className="row mt">

    <div className="col-md-4 col-sm-4 mb">
      <div className="grey-panel pn donut-chart">
        <div className="grey-header">
          <h5>SERVER LOAD</h5>
        </div>
        <canvas id="serverstatus01" height={120} width={120} />
        <div className="row">
          <div className="col-sm-6 col-xs-6 goleft">
            <p>
              Usage
              <br />
              Increase:
            </p>
          </div>
          <div className="col-sm-6 col-xs-6">
            <h2>21%</h2>
          </div>
        </div>
      </div>

    </div>
  
    <div className="col-md-4 col-sm-4 mb">
      <div className="darkblue-panel pn">
        <div className="darkblue-header">
          <h5>DROPBOX STATICS</h5>
        </div>
        <canvas id="serverstatus02" height={120} width={120} />
        <p>April 17, 2014</p>
        <footer>
          <div className="pull-left">
            <h5>
              <i className="fa fa-hdd-o" /> 17 GB
            </h5>
          </div>
          <div className="pull-right">
            <h5>60% Used</h5>
          </div>
        </footer>
      </div>

    </div>
  
    <div className="col-md-4 col-sm-4 mb">
    
      <div className="green-panel pn">
        <div className="green-header">
          <h5>REVENUE</h5>
        </div>
        <div className="chart mt">
          <div
            className="sparkline"
            data-type="line"
            data-resize="true"
            data-height={75}
            data-width="90%"
            data-line-width={1}
            data-line-color="#fff"
            data-spot-color="#fff"
            data-fill-color
            data-highlight-line-color="#fff"
            data-spot-radius={4}
            data-data="[200,135,667,333,526,996,564,123,890,464,655]"
          />
        </div>
        <p className="mt">
          <b>$ 17,980</b>
          <br />
          Month Income
        </p>
      </div>
    </div>
  
  </div>

  )

}

export default ChartOne 