import { IDosePatient } from "../interface/common";

export const patientVaccinations: IDosePatient = {
  patientId: 1,
  doseApplication: [
    {
      vaccineId: 1,
      doses: [
        { range: "rangeOne", doseName: "1st dose" },
        { range: "rangeTwo", doseName: "2st dose" },
        { range: "rangeFive", doseName: "3st dose" },
      ],
    },
    {
      vaccineId: 2,
      doses: [
        { range: "rangeThree", doseName: "1st dose" },
        { range: "rangeFour", doseName: "2st dose" },
        { range: "rangeFive", doseName: "3st dose" },
      ],
    },
    {
      vaccineId: 3,
      doses: [
        { range: "rangeThree", doseName: "1st dose" },
        { range: "rangeFour", doseName: "2st dose" },
        { range: "rangeFive", doseName: "3st dose" },
        { range: "rangeSeven", doseName: "4th dose" },
        { range: "rangeEleven", doseName: "5th dose" },
      ],
    },
    {
      vaccineId: 4,
      doses: [
        { range: "rangeThree", doseName: "1st dose" },
        { range: "rangeFour", doseName: "2st dose" },
        { range: "rangeFive", doseName: "3st dose" },
        { range: "rangeSix", doseName: "4th dose" },
      ],
    },
    {
      vaccineId: 5,
      doses: [
        { range: "rangeThree", doseName: "1st dose" },
        { range: "rangeFour", doseName: "2st dose" },
        { range: "rangeFive", doseName: "3st dose" },
        { range: "rangeSix", doseName: "4th dose" },
      ],
    },
    {
      vaccineId: 6,
      doses: [
        { range: "rangeThree", doseName: "1st dose" },
        { range: "rangeFour", doseName: "2st dose" },
        { range: "rangeFive", doseName: "3st dose" },
      ],
    },
    {
      vaccineId: 7,
      doses: [{ range: "rangeFive", doseName: "1st dose" }],
    },
    {
      vaccineId: 8,
      doses: [
        { range: "rangeSix", doseName: "1st dose" },
        { range: "rangeEleven", doseName: "2st dose" },
      ],
    },
    {
      vaccineId: 9,
      doses: [
        { range: "rangeSix", doseName: "1st dose" },
        { range: "rangeEleven", doseName: "2st dose" },
      ],
    },
    {
      vaccineId: 10,
      doses: [
        { range: "rangeSix", doseName: "1st dose" },
        { range: "rangeEight", doseName: "2st dose" },
      ],
    },
  ],
};
