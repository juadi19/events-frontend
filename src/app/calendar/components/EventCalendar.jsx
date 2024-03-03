import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

// import "../styles/App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function EventCalendar() {
  const localizer = momentLocalizer(moment);

  const state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title 19:00HR",
      },
    ],
  };

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={state.events}
        style={{ height: "100vh" }}
      />
    </div>
  );
}
