import React from 'react';
import PageHeader from "../components/PageHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar(){
    
    const events = [{ title: "today's event", date: new Date() }];

    return (
        <div>
            <PageHeader title="Calendar"/>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={events}
            />
        </div>
    )
}