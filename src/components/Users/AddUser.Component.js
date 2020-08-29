import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import ModelBoxSuccess from "./../Common/ModelBoxSuccess"
import { useForm } from 'react-hook-form';



const UserAdd = () => {
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [userState, setUserState] = useState(
        {

            fname: "",
            lname: "",
            phone: "",
            state: "",
            city: "",
            dob: new Date(),
            email: "",
            gender: "",
        }
    );

    const DatePickerWithDisabledCalander = () => {

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


    const { register, handleSubmit, errors } = useForm();


    const handleChange = (e) => {
        e.preventDefault()
        console.log("-------", e.target.name);
        setUserState({
            ...userState,
            [e.target.name]: e.target.value,
        });
    }



    const onSubmit = (e) => {
        setShow(true);
        let finalState = {
            ...userState,
            dob: moment(startDate).format('DD-MM-YYYY')
        }
        //console.log(userState, "=======", startDate , "--------" , finalState)
    };



    const handleCloseModel = () => setShow(false);




    return (
        <Fragment>
            <ModelBoxSuccess show={show} handleCloseModel={handleCloseModel} />
            <form className="form-horizontal style-form" method="get" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                            className="form-control"
                            name="fname"
                            placeholder="First Name"
                            onChange={handleChange}
                            ref={register({
                                required: 'This field is a required',
                                pattern: /^[A-Za-z]+$/i,
                                maxLength: {
                                    value: 80,
                                    message: 'Max length is 80',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Min length is 2',
                                },
                            })}
                        />
                        <span className="form-text text-danger">{errors.fname && errors.fname.message}</span>
                    </div>

                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Last Name
                                </label>
                    <div className="col-sm-10">
                        <input type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lname"
                            onChange={handleChange}
                            ref={register({
                                required: 'This field is a required',
                                pattern: /^[A-Za-z]+$/i,
                                maxLength: {
                                    value: 80,
                                    message: 'Max length is 80',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Min length is 2',
                                },
                            })} />
                        <span className="error text-danger pt-5">{errors.lname && errors.lname.message}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Phone No
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                            className="form-control"
                            placeholder="Phone No"
                            name="phone"
                            onChange={handleChange}
                            ref={register({
                                required: 'This field is a required',
                                pattern: /^[0-9]+$/i,
                                maxLength: {
                                    value: 10,
                                    message: 'Max length is 10',
                                },
                                minLength: {
                                    value: 10,
                                    message: 'Min length is 10',
                                },
                            })} />
                        <span className="error text-danger pt-5">{errors.phone && errors.phone.message}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        State
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control"
                            name="state"
                            onChange={handleChange}
                            ref={register({
                                required: "Choose state value"
                            })}>
                            <option value="">Select State</option>
                            <option>Punjab</option>
                            <option>Delhi</option>
                            <option>Haryana</option>
                            <option>Bihar</option>
                            <option>Uttar Pradesh</option>
                        </select>
                        <span className="error text-danger pt-5">{errors.state && errors.state.message}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        City
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control" name="city"
                            onChange={handleChange}
                            ref={register({
                                required: "Choose city value"
                            })}>
                            <option value="">Select City</option>
                            <option>Bijnor</option>
                            <option>Dhampur</option>
                            <option>Jaipur</option>
                            <option>Delhi</option>
                            <option>Patna</option>
                            <option>Pathankot</option>
                            <option>GuruGram</option>
                        </select>
                        <span className="error text-danger pt-5">{errors.city && errors.city.message}</span>
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
                        <input type="text"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            ref={register({
                                required: 'This field is a required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })} />
                        <span className="error text-danger pt-5">{errors.email && errors.email.message}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        Gender
                    </label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label className="pl-1">
                                <input type="radio"
                                    name="gender"
                                    value="M" defaultChecked
                                    onChange={handleChange} />

                            </label>
                            <label className="pl-1">Male</label>
                            <label className="pl-1">
                                <input type="radio"
                                    name="gender"
                                    value="F"
                                    onChange={handleChange} />
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
