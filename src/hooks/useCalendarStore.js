import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent } from '../store';

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    
    const {events,activeEvent} = useSelector(state=>state.calendar);

    const setActiveEvent = (calendarEvent) =>{
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const starSavingEvent = async(calendarEvent) =>{


        if(calendarEvent._id){
            
        }else{
            dispatch(onAddNewEvent({ ...calendarEvent,_id: new Date().getTime() }))
        }
    }
    
    return {

        //Properties
        events,
        activeEvent,
        //Metodos
        setActiveEvent,
        starSavingEvent

    }
}
