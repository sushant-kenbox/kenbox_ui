import React from "react";
import product from "./../../assets/img/product.jpg"
class ViewUser extends React.Component {
  render() {
    return (
      <div className="chat-room mt">
        <aside className="mid-side">
          <div className="chat-room-head">
            <h3>User Information</h3>
            <form action="#" className="pull-right position">
              <input
                type="text"
                placeholder="Search"
                className="form-control search-btn "
              />
            </form>
          </div>
          <div className="group-rom">
            <div className="first-part odd">Sam Soffes</div>
            <div className="second-part">Hi Mark, have a minute?</div>
          </div>
          <div className="group-rom">
            <div className="first-part">Mark Simmons</div>
            <div className="second-part">Of course Sam, what you need?</div>
          </div>
          <div className="group-rom">
            <div className="first-part odd">Sam Soffes</div>
            <div className="second-part">
              I want you examine the new product
            </div>
          </div>
          <div className="group-rom">
            <div className="first-part">Mark Simmons</div>
            <div className="second-part">Ok, send me the pic</div>
          </div>
          <div className="group-rom">
            <div className="first-part odd">Sam Soffes</div>
            <div className="second-part">
              <a href="#">product.jpg</a>{" "}
              <span className="text-muted">35.4KB</span>
              <p>
                <img className="img-responsive" src={product} alt />
              </p>
            </div>
          </div>
          <div className="group-rom">
            <div className="first-part">Mark Simmons</div>
            <div className="second-part">Fantastic job, love it :)</div>
          </div>
          <div className="group-rom last-group">
            <div className="first-part odd">Sam Soffes</div>
            <div className="second-part">Thanks!!</div>
          </div>
          <div className="group-rom last-group">
          <footer>
            <button className="btn btn-theme pull-right">Send</button>
          </footer>
          </div>
        </aside>
       </div>
    );
  }
}

export default ViewUser;
