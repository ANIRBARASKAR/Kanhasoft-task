import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getEventAction } from '../redux/actions/eventActions';
export default function AllEvents() {

    const {getAllEvents} = useSelector(state => state.allEvents)
    const dispatch = useDispatch()

    console.log("I'm From getAll Event",getAllEvents);


    const test = () => {

        dispatch(getEventAction())
    }
    useEffect(() => {
        test()
    },[])
  return (
    <>

   <div className="container">

<div className="row">
   <div className="col-sm-6 offset-3">
    <button className='p-3 w-100 bg-dark text-info' onClick={test}>Click Me & See All Events</button>

  
{
    getAllEvents?.map( (item,index) => <div className="card mt-2 ">
  <div className="card-header ps-5"><h4>Event Name : {item?.eventName}</h4> </div>
  <div className="card-body">
 <p> <strong>Event Type</strong> :    {item?.eventType}               </p>
 <p> <strong>Event Description</strong> :  {item?.eventDescription}  </p>
 <p> <strong>Start Date</strong> :   {item?.eventStartDate} </p>
 <p> <strong>End Date</strong> :   {item?.eventEndDate}  </p>
 <p> <strong>Event Handle</strong> : {item?.eventHandle}   </p>
 <p> <strong>Event Organization</strong> :  {item?.eventOrgnization} </p>
 <p> <strong>Total No Of Events </strong>:  {item?.totalNoofSubEvents}  </p>
   
  
  </div>
  <div className="card-footer text-center"><h5>Wel Come !</h5></div>
</div>
    )
}

   </div>
   </div>
   </div>


    </>
  )
}
