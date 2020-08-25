import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom"

class UserAdd extends Component {
    constructor(props) {
        super(props);
    }


    handleAddUser = (e) => {
        e.preventDefault();
        console.log('handleAddUser')
    }

    render() {

        return (

            <section id="main-content">
                <section className="wrapper">
                    <div className="row mt">
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb">
                                    <i className="fa fa-angle-right" /> Add User
                                </h4>
                                <form className="form-horizontal style-form" method="get" onSubmit={(e) => this.handleAddUser(e)}>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                            Default
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                            Help text
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" />
                                            <span className="help-block">
                                                A block of help text that breaks onto a new line and may
                                                extend beyond one line.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                            Rounder
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control round-form" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                            Input focus
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                id="focusedInput"
                                                type="text"
                                                defaultValue="This is focused..."
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                            Placeholder
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="placeholder"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                            Password
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-10">
                                            <p className="form-control-static">email@example.com</p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                            State
                                        </label>
                                        <div className="col-sm-10">
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-10">
                                            <div class="form-send">
                                                <button type="submit" class="btn btn-large btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {}
                    </div>
                </section>
                {}
            </section>

        )
    }
}

export default UserAdd;
