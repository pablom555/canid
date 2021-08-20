export interface IMapping {
  [propertyName: string]: string;
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




