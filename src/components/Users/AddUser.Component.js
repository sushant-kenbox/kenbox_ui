import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModelBoxSuccess from "./../Common/ModelBoxSuccess"
import { useForm } from 'react-hook-form';



const UserAdd = () => {
    const [show, setShow] = useState(false);
    // const handleAddUser = (e) => {
    //     e.preventDefault();
    //     setShow(true);
    //     console.log('handleAddUser')
    // }


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    }


    const handleCloseModel = () => setShow(false);


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
            <form className="form-horizontal style-form" method="get" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        First Name
                                </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="fname" placeholder="First Name" ref={register({ required: true })}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Last Name
                                </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Last Name" name="lname"
                            ref={register({ required: true })} />

                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Phone No
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Phone No" name="phone"/>

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
                        <DatePickerWithDisabledCalander />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="Email" name="email"
                            ref={register({
                                required: "required",
                                pattern: {
                                    value: /S+@S+.S+/,
                                    message: "Entered value does not match email format"
                                }
                            })} />

                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Gender
                    </label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label className="pl-1">
                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked />

                            </label>
                            <label className="pl-1">Male</label>
                            <label className="pl-1">
                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                            </label>
                            <label className="pl-1">Female</label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-10">
                        <div className="form-send">
                            <button type="submit" style={{ backgroundColor: '#4ECDC4', color: '#FFFFFF' }}
                                className="btn btn-large">Save</button>
                        </div>
                    </div>
                </div>
            </form>

        </Fragment>

    )
}

export default UserAdd;
