import React,{useState} from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Link } from 'react-router-dom';

import {useDispatch,useSelector} from "react-redux"
import { addEventAction } from '../redux/actions/eventActions';
export default function AddEvent() {

    const dispatch = useDispatch()

const [eventTypeData, seteventTypeData] = useState([]);

    const formik = useFormik({
        initialValues: ({
            eventName: "",
            eventType: "",
            eventStartDate: "",
            eventEndDate: "",
            eventDescription : "",
            eventHandle : "",
            eventOrgnization : "",
            totalNoofSubEvents : ""
        }),
        validationSchema: yup.object({
            eventName: yup
                .string()
                .required("Please Entre Your Event Name "),
            eventType: yup
                .string(),
                

           
            eventStartDate: yup
                .string()
                .required(" Entre Your Event Start Date "),
            eventEndDate: yup
                .string()
                .required(" Entre Your Event End Date "),
            eventDescription: yup
                .string()
                .required(" Entre Event Description"),
            eventHandle: yup
                .string()
                .required(" Entre Event Handler"),
            eventOrgnization: yup
                .string()
                .required(" Entre Event Orgnization"),
            totalNoofSubEvents: yup
                .string()
                .required(" Entre Total No Of SubEvents"),
           

        }),
        onSubmit: (values,{resetForm}) => {
             var obj ={eventTypelara:eventTypeData.anii}
             values.eventType=obj.eventTypelara
            console.log("without obj",values);
            // console.log("with obj",values,obj);
            seteventTypeData("")
            dispatch(addEventAction(values))
            resetForm()
        }
    })
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">

                        <div className="card">
                            <div className="card-header bg-dark text-center text-light">Add Events</div>
                            <div className="card-body ">

                                <form onSubmit={formik.handleSubmit}> 
                                {/* 1  eventName */}
                                 <div>
                                    <label htmlFor="name" className="form-label">Event name</label>
                                    <input
                                    placeholder='Enter Event Name'
                                        type="text"
                                        name='eventName'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.eventName && formik.touched.eventName ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.eventName}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.eventName}</div>
                                </div>
                                {/* 2  eventType*/}
                                <div className='mt-2'>
                                   
                                <label htmlFor="eventType">Event Type</label>
                                 <select
                                 id="eventType"
                                 className='form-select'
                                 name='eventType'
                                 value={eventTypeData.anii || formik.values.eventType.anii}
                                 onChange={ e => seteventTypeData({...eventTypeData, anii:e.target.value}) || formik.handleChange }

                                 >

                                    <option   > Choose Event</option>
                                    <option value="sport">sport</option>
                                    <option value="music">music</option>
                                    <option value="Genral">Genral</option>
                                    <option value="Children">Children</option>
                                    <option value="School">School</option>
                                 </select>
                               
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.eventType}</div>
                                </div>
                                    {/* 3  eventStartDate*/}
                                    <div className='mt-2'> 
                                    <label htmlFor="name" className="form-label">Event Start Date</label>
                                    <input
                                        type="date"
                                        name='eventStartDate'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.eventStartDate && formik.touched.eventStartDate ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.eventStartDate}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.eventStartDate}</div>
                                </div>
                                    {/* 4 eventEndDate */}
                                    <div>
                                    <label htmlFor="name" className="form-label">Event End Date</label>
                                    <input
                                        type="date"
                                        name='eventEndDate'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.eventEndDate && formik.touched.eventEndDate ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.eventEndDate}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.eventEndDate}</div>
                                </div>

                                {/* 5 eventDesc */}
                                <div>
                                    <label htmlFor="name" className="form-label">Event Description</label>
                                    <textarea
                                    placeholder='Enter Description'

                                        type="text"
                                        name='eventDescription'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.eventDescription && formik.touched.eventDescription ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.eventDescription}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.eventDescription}</div>
                                </div>
                                {/* 6 eventHandle */}

                                <div>
                                    <label htmlFor="name" className="form-label">Event Handle By</label>
                                    <input
                                    placeholder='Event Handle By'

                                        type="text"
                                        name='eventHandle'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.eventHandle && formik.touched.eventHandle ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.eventHandle}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.eventHandle}</div>
                                </div>
                               {/* 7 eventOrgnization */}
                               <div>
                                    <label htmlFor="name" className="form-label">Event Organization</label>
                                    <input
                                 placeholder='Enter Event Organization'

                                        type="text"
                                        name='eventOrgnization'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.eventOrgnization && formik.touched.eventOrgnization ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.eventOrgnization}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.eventOrgnization}</div>
                                </div>
                                 {/* 6 total no of sub events */}
                                 <div>
                                    <label htmlFor="name" className="form-label">Total No Of Sub Events</label>
                                    <input
                                    placeholder= 'Enter Total No Of Sub Events'
                                        type="number"
                                        name='totalNoofSubEvents'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.totalNoofSubEvents && formik.touched.totalNoofSubEvents ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.totalNoofSubEvents}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.totalNoofSubEvents}</div>
                                </div>


                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                      Submit Event
                                    </button>
                                    {/* <p className="text-center mt-3">
                                        Already Have Account? <Link to="/">Login</Link>
                                    </p> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
