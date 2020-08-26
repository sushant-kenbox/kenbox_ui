import React from "react";
const UserAdd = () => {


    const handleAddUser = (e) => {
        e.preventDefault();
        console.log('handleAddUser')
    }

    return (

        <form className="form-horizontal style-form" method="get" onSubmit={(e) => handleAddUser(e)}>
            <div className="form-group">
                <label className="col-sm-2 col-sm-2 control-label">
                    Default
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="placeholder" />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 col-sm-2 control-label">
                    Help text
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="placeholder" />
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
                        placeholder="placeholder"
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
                        placeholder="placeholder"
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
                    <div className="form-send">
                        <button type="submit" style={{ backgroundColor: '#4ECDC4', color: '#FFFFFF' }} className="btn btn-large">Send Message</button>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default UserAdd;
