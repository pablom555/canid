import { ICalendarColumn } from "../types";

export const title =
  "Immunization Dosing Chart for Infants to Preschool-Aged Children";

export const calendarColumns: ICalendarColumn[] = [
  {
    name: "VACCINE",
    accesor: "vaccine",
  },
  {
    name: "BIRTH",
    accesor: "rangeOne",
  },
  {
    name: "1 MONTH",
    accesor: "rangeTwo",
  },
  {
    name: "2 MONTH",
    accesor: "rangeThree",
  },
  {
    name: "4 MONTH",
    accesor: "rangeFour",
  },
  {
    name: "6 MONTH",
    accesor: "rangeFive",
  },
  {
    name: "12 MONTH",
    accesor: "rangeSix",
  },
  {
    name: "15 MONTH",
    accesor: "rangeSeven",
  },
  {
    name: "18 MONTH",
    accesor: "rangeEight",
  },
  {
    name: "19-23 MONTH",
    accesor: "rangeNine",
  },
  {
    name: "2-3 YEARS",
    accesor: "rangeTen",
  },
  {
    name: "4-6 YEARS",
    accesor: "rangeEleven",
  },
];

export const vaccines = [
  {
    id: 1,
    vaccine: "HepB",
    color: "red",
    recommendedAdministrations: {
      rangeOne: "S-E",
      rangeTwo: "S",
      rangeThree: "E",
      rangeFive: "S",
      rangeSix: "M",
      rangeSeven: "M",
      rangeEight: "E",
    },
  },
  {
    id: 2,
    vaccine: "Rotavirus",
    color: "yellow",
    recommendedAdministrations: {
      rangeThree: "S-E",
      rangeFour: "S-E",
      rangeFive: "S-E",
    },
  },
  {
    id: 3,
    vaccine: "DTaP",
    color: "purple",
    recommendedAdministrations: {
      rangeThree: "S-E",
      rangeFour: "S-E",
      rangeFive: "S-E",
      rangeSeven: "S",
      rangeEight: "E",
      rangeEleven: "S-E",
    },
  },
  {
    id: 4,
    vaccine: "Hib",
    color: "green",
    recommendedAdministrations: {
      rangeThree: "S-E",
      rangeFour: "S-E",
      rangeFive: "S-E",
      rangeSix: "S",
      rangeSeven: "E",
    },
  },
  {
    id: 5,
    vaccine: "Pneumococcal",
    color: "blue",
    recommendedAdministrations: {
      rangeThree: "S-E",
      rangeFour: "S-E",
      rangeFive: "S-E",
      rangeSix: "S",
      rangeSeven: "E",
    },
  },
  {
    id: 6,
    vaccine: "Polio",
    color: "indigo",
    recommendedAdministrations: {
      rangeThree: "S-E",
      rangeFour: "S-E",
      rangeFive: "S",
      rangeSix: "M",
      rangeSeven: "M",
      rangeEight: "E",
      rangeEleven: "S-E",
    },
  },
  {
    id: 7,
    vaccine: "Influenza",
    color: "gray",
    recommendedAdministrations: {
      rangeFive: "S",
      rangeSix: "M",
      rangeSeven: "M",
      rangeEight: "M",
      rangeNine: "M",
      rangeTen: "M",
      rangeEleven: "E",
    },
  },
  {
    id: 8,
    vaccine: "MMR",
    color: "green",
    recommendedAdministrations: {
      rangeSix: "S",
      rangeSeven: "E",
      rangeEleven: "S-E",
    },
  },
  {
    id: 9,
    vaccine: "Varicella",
    color: "blue",
    recommendedAdministrations: {
      rangeSix: "S",
      rangeSeven: "E",
      rangeEleven: "S-E",
    },
  },
  {
    id: 10,
    vaccine: "HepA",
    color: "pink",
    recommendedAdministrations: {
      rangeSix: "S",
      rangeSeven: "E",
      rangeEight: "S",
      rangeNine: "E",
    },
  },
];
