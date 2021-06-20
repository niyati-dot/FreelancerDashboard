import React from 'react';
import PageHeader from "../components/PageHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar(){
    
    const events = [{ title: "today's event", date: new Date() }];

    const handleDateClick = (arg) => {
        var dateevent = prompt("Enter an event for date: "+arg.dateStr);
    }

    return (
        <div>
            <PageHeader title="Calendar"/>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                events={events}
                dateClick={handleDateClick}
            />
        </div>
    )
}