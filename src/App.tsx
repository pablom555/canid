import React from "react";
import CalendarVaccination from "./components/CalendarVaccination";
import { calendarColumns, title, vaccines } from "./utils/constant";
import { patientVaccinations } from "./utils/data";

function App() {
  return (
    <div className="w-screen h-screen">
      <CalendarVaccination 
        title={title} 
        calendarColumns={calendarColumns} 
        vaccines={vaccines} 
        patientVaccinations={patientVaccinations} />
    </div>
  );
}

export default App;
