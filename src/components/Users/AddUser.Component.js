import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModelBoxSuccess from "./../Common/ModelBoxSuccess"

const UserAdd = () => {
    const [show, setShow] = useState(false);
    const handleAddUser = (e) => {
        e.preventDefault();
        setShow(true);
        console.log('handleAddUser')
    }

    const handleCloseModel = () => setShow(false);

    const DatePickerWithCalander = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control" />
        );
    };

    const DatePickerWithDisabledCalander = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
            <DatePicker className="form-control"
                selected={startDate}
                onChange={date => setStartDate(date)}
                showYearDropdown
                dateFormatCalendar="MMMM"
                yearDropdownItemNumber={15}
                scrollableYearDropdown
            />
        );
    };

    return (
        <Fragment>
            <ModelBoxSuccess show={show} handleCloseModel={handleCloseModel} />
            <form className="form-horizontal style-form" method="get" onSubmit={(e) => handleAddUser(e)}>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        First Name
                                </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Last Name
                                </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Last Name" />

                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Phone No
                                </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" maxLength={10} placeholder="Phone No" />

                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        State
                                </label>
                    <div className="col-sm-10">
                        <select className="form-control">
                            <option>Punjab</option>
                            <option>Delhi</option>
                            <option>Haryana</option>
                            <option>Bihar</option>
                            <option>Uttar Pradesh</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        City
                                </label>
                    <div className="col-sm-10">
                        <select className="form-control">
                            <option>Bijnor</option>
                            <option>Dhampur</option>
                            <option>Jaipur</option>
                            <option>Delhi</option>
                            <option>Patna</option>
                            <option>Pathankot</option>
                            <option>GuruGram</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Dob
                                </label>
                    <div className="col-sm-10">
                        <DatePickerWithCalander />
                    </div>
                </div>
                {/* <div className="form-group">
                                <label className="col-sm-2 col-sm-2 control-label">
                                    Help text
                                </label>
                                <div className="col-sm-10">
                                    <DatePickerWithDisabledCalander />
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
                                    <input className="form-control" id="focusedInput" type="text"
                                        defaultValue="This is focused..." placeholder="placeholder" />
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label className="col-sm-2 col-sm-2 control-label">
                                    Placeholder
                                </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" placeholder="placeholder" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-sm-2 control-label">
                                    Password
                                </label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" placeholder="placeholder" />
                                </div>
                            </div> */}
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Email
                                </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="Email" />

                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-10">
                        <div className="form-send">
                            <button type="submit" style={{ backgroundColor: '#4ECDC4', color: '#FFFFFF' }}
                                className="btn btn-large">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>

        </Fragment>

    )
}

export default UserAdd;
