export interface IMapping {
  [propertyName: string]: string;
}

export interface IHeader {
  text: string;
}

export interface ICalendarColumn {
  name: string;
  accesor: string;
}

export interface IDosePatient {
  patientId: number;
  doseApplication: {
    vaccineId: number;
    doses: { range: string; doseName: string }[];
  }[];
}

export interface ITable {
  columns: ICalendarColumn[];
  rows: any[];
  data: IDosePatient | null;
}

export interface ICalendarVaccination {
  title: string;
  calendarColumns: ICalendarColumn[];
  vaccines: any[];
  patientVaccinations: IDosePatient | null;
}

