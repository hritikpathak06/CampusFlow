"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Meeting with Team",
    start: new Date(2024, 11, 3, 10, 0),
    end: new Date(2024, 11, 3, 12, 0),
    description: "Discuss project milestones.",
  },
  {
    title: "Meeting with Team",
    start: new Date(2024, 11, 3, 13, 0),
    end: new Date(2024, 11, 3, 14, 0),
    description: "Discuss project milestones.",
  },
  {
    title: "Lunch Break",
    start: new Date(2024, 11, 3, 13, 0), // December 3, 2024, 1:00 PM
    end: new Date(2024, 11, 3, 14, 0), // December 3, 2024, 2:00 PM
    description: "Enjoy a relaxing lunch.",
  },
  {
    title: "Client Presentation",
    start: new Date(2024, 11, 4, 15, 0), // December 4, 2024, 3:00 PM
    end: new Date(2024, 11, 4, 16, 30), // December 4, 2024, 4:30 PM
    description: "Present the updated design to the client.",
  },
];

export const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <>
      <div>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          views={["work_week", "day"]}
          view={view}
          onView={handleOnChangeView}
          style={{ height: "98%" }}
          min={new Date(2025,1,0,8,0,0)}
          max={new Date(2025,1,0,18,0,0)}
        />
      </div>
    </>
  );
};
