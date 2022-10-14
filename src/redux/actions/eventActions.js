import { ADD_EVENT_FAIL, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, GET_EVENT_FAIL, GET_EVENT_REQUEST, GET_EVENT_SUCCESS } from "../constants/eventConstants"
import axios from "axios"


export const addEventAction = (arg) => async ( dispatch) => {
    try {
        dispatch({type : ADD_EVENT_REQUEST})
        dispatch({type : ADD_EVENT_SUCCESS, payload:arg})
        console.log("i'm from addEventAction",arg);

         const {data} = await axios.post("http://localhost:5000/events",arg)
         console.log("post data from eventAction", data);
    } catch (error) {
        dispatch({type : ADD_EVENT_FAIL, payload:error.message})
         
    }
}


//  GET EVENT DATA



export const getEventAction = (arg) => async ( dispatch) => {
    try {
        dispatch({type : GET_EVENT_REQUEST})
        const {data} = await axios.get("http://localhost:5000/events")
        console.log("get data from geteventAction", data);
        dispatch({type : GET_EVENT_SUCCESS, payload:data})
        console.log("i'm from getEventAction",data);

        
    } catch (error) {
        dispatch({type : GET_EVENT_FAIL, payload:error.message})
         
    }
}
