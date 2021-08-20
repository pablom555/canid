import { ICalendarColumn, IDosePatient } from './../../interface/common';

export interface ITable {
  columns: ICalendarColumn[];
  rows: any[];
  data: IDosePatient | null;
}