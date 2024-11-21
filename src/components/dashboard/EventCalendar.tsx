"use client";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className=" w-full h-full">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default EventCalendar;
