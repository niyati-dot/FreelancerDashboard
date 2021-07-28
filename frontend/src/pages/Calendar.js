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
            <div className="page-container clients-container">
                <div className="page-header-container">
                    <PageHeader title="Calendar" subtitle="" />
                </div>
                <div className="page-content-container">
                    <div className="page-content">
                        <FullCalendar defaultView="dayGridMonth"
                            plugins={[dayGridPlugin, interactionPlugin]}
                            events={events} dateClick={handleDateClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}