import React from "react"
const RightSideBar = () => {
	
	return (

        <div className="col-lg-3 ds">
                {}
                <div className="donut-main">
                  <h4>COMPLETED ACTIONS & PROGRESS</h4>
                  <canvas id="newchart" height={130} width={130} />
                </div>
                {}
                <div className="panel terques-chart">
                  <div className="panel-body">
                    <div className="chart">
                      <div className="centered">
                        <span>TODAY EARNINGS</span>
                        <strong>$ 890,00 | 15%</strong>
                      </div>
                      <br />
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
                        data-data="[200,135,667,333,526,996,564,123,890,564,455]"
                      />
                    </div>
                  </div>
                </div>
                {}
                {}
                <h4 className="centered mt">RECENT ACTIVITY</h4>
                {}
                <div className="desc">
                  <div className="thumb">
                    <span className="badge bg-theme">
                      <i className="fa fa-clock-o" />
                    </span>
                  </div>
                  <div className="details">
                    <p>
                      Just Now
                      <br />
                      <a href="#">Paul Rudd</a> purchased an item.
                      <br />
                    </p>
                  </div>
                </div>
                {}
                <div className="desc">
                  <div className="thumb">
                    <span className="badge bg-theme">
                      <i className="fa fa-clock-o" />
                    </span>
                  </div>
                  <div className="details">
                    <p>
                      2 Minutes Ago
                      <br />
                      <a href="#">James Brown</a> subscribed to your newsletter.
                      <br />
                    </p>
                  </div>
                </div>
                {}
                <div className="desc">
                  <div className="thumb">
                    <span className="badge bg-theme">
                      <i className="fa fa-clock-o" />
                    </span>
                  </div>
                  <div className="details">
                    <p>
                      3 Hours Ago
                      <br />
                      <a href="#">Diana Kennedy</a> purchased a year
                      subscription.
                      <br />
                    </p>
                  </div>
                </div>
                {}
                <div className="desc">
                  <div className="thumb">
                    <span className="badge bg-theme">
                      <i className="fa fa-clock-o" />
                    </span>
                  </div>
                  <div className="details">
                    <p>
                      7 Hours Ago
                      <br />
                      <a href="#">Brando Page</a> purchased a year subscription.
                      <br />
                    </p>
                  </div>
                </div>
                {}
                <h4 className="centered mt">TEAM MEMBERS ONLINE</h4>
                {}
                <div className="desc">
                  <div className="thumb">
                    <img
                      className="img-circle"
                      src="img/ui-divya.jpg"
                      width="35px"
                      height="35px"
                      
                    />
                  </div>
                  <div className="details">
                    <p>
                      <a href="#">DIVYA MANIAN</a>
                      <br />
                      Available
                    </p>
                  </div>
                </div>
                {}
                <div className="desc">
                  <div className="thumb">
                    <img
                      className="img-circle"
                      src="img/ui-sherman.jpg"
                      width="35px"
                      height="35px"

                    />
                  </div>
                  <div className="details">
                    <p>
                      <a href="#">DJ SHERMAN</a>
                      <br />
                      I am Busy
                    </p>
                  </div>
                </div>
                {}
                <div className="desc">
                  <div className="thumb">
                    <img
                      className="img-circle"
                      src="img/ui-danro.jpg"
                      width="35px"
                      height="35px"
                    />
                  </div>
                  <div className="details">
                    <p>
                      <a href="#">DAN ROGERS</a>
                      <br />
                      Available
                    </p>
                  </div>
                </div>
                {}
                <div className="desc">
                  <div className="thumb">
                    <img
                      className="img-circle"
                      src="img/ui-zac.jpg"
                      width="35px"
                      height="35px"
                      
                    />
                  </div>
                  <div className="details">
                    <p>
                      <a href="#">Zac Sniders</a>
                      <br />
                      Available
                    </p>
                  </div>
                </div>
                
              </div>
            )

}

export default RightSideBar 