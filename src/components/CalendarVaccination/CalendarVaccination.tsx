import React from "react";

import { ICalendarVaccination } from "./calendarVaccination.types";
import Header from "./../Header";
import Table from "./../Table";

const CalendarVaccination = ({title, calendarColumns, vaccines, patientVaccinations} : ICalendarVaccination) => {
  return (
    <div className="w-full h-full">
      <Header text={title} />
      <Table columns={calendarColumns} rows={vaccines} data={patientVaccinations} />
    </div>
  );
};

export default CalendarVaccination;
