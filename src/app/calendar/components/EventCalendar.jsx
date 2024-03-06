import React, { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import AddEvent from "./AddEvent";
import Link from "next/link";

export default function EventCalendar() {
  const localizer = dayjsLocalizer(dayjs);

  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await fetch("http://localhost:3000/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("JWT"),
      },
    });
    const data = await res.json();
    const newEvents = data.map((event) => {
      return {
        start: dayjs(event.when).toDate(),
        end: dayjs(event.when).toDate(),
        title: event.title,
        id: event.id,
      };
    });
    setEvents(newEvents);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="App">
      {/* <AddEvent /> */}
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => {
          window.location.href = "/event/" + event.id;
        }}
        views={["month"]}
      />
    </div>
  );
}
