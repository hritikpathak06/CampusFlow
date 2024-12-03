"use client";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const events = [
  {
    "id": 1,
    "title": "Event 1: Business Summit",
    "time": "10:00AM - 12:00PM",
    "description": "An insightful summit for business enthusiasts."
  },
  {
    "id": 2,
    "title": "Event 2: Coding Bootcamp",
    "time": "2:00PM - 5:00PM",
    "description": "A hands-on bootcamp for aspiring developers."
  },
  {
    "id": 3,
    "title": "Event 3: Art Workshop",
    "time": "1:00PM - 3:00PM",
    "description": "Explore your creativity in this art workshop."
  },
  {
    "id": 4,
    "title": "Event 4: Music Festival",
    "time": "6:00PM - 11:00PM",
    "description": "A night of music and celebration."
  },
  {
    "id": 5,
    "title": "Event 5: Yoga Retreat",
    "time": "7:00AM - 9:00AM",
    "description": "Relax and rejuvenate at our yoga retreat."
  },
  {
    "id": 6,
    "title": "Event 6: Tech Talk",
    "time": "3:00PM - 4:00PM",
    "description": "Insights from industry leaders in technology."
  },
  {
    "id": 7,
    "title": "Event 7: Food Expo",
    "time": "11:00AM - 2:00PM",
    "description": "Taste and explore a variety of cuisines."
  },
  {
    "id": 8,
    "title": "Event 8: Book Launch",
    "time": "5:00PM - 6:30PM",
    "description": "Celebrate the launch of an inspiring book."
  },
  {
    "id": 9,
    "title": "Event 9: Startup Pitch",
    "time": "9:00AM - 11:00AM",
    "description": "Witness innovative startup pitches."
  },
  {
    "id": 10,
    "title": "Event 10: Charity Run",
    "time": "8:00AM - 10:00AM",
    "description": "Join us for a run to support a noble cause."
  }
]


const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md w-full h-full">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default EventCalendar;
