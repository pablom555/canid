import { ICalendarColumn, IDosePatient } from '../../types';

export interface ICalendarVaccination {
  title: string;
  calendarColumns: ICalendarColumn[];
  vaccines: any[];
  patientVaccinations: IDosePatient | null;
}
