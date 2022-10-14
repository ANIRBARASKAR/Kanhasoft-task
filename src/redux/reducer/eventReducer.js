import { ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, GET_EVENT_SUCCESS } from "../constants/eventConstants";


export const eventReducer = ( state={allEvent:[], getAllEvents:[]}, {type,payload}) => {

    switch (type){

        case ADD_EVENT_SUCCESS: return {allEvent:payload}


        case GET_EVENT_SUCCESS: return {getAllEvents:payload}   

        default : return state
    }
}