import React from "react";
import DosePill from "./DosePill";
import RangeBackGround from "./RangeBackGround";
import { ITable } from "./table.types";

const Table = ({ columns, rows, data }: ITable) => {
  return (
    <div className="px-2" style={{ height: "90%" }}>
      <table className="h-full items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            {columns &&
              columns.map((column, index) => (
                <th
                  key={index}
                  className="bg-gray-800 text-white pb-1 pt-4 align-middle text-lg whitespace-nowrap font-normal text-center sticky top-0"
                >
                  {column.name}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((row) => {
              const dosesPatient = data?.doseApplication.find(
                (dose) => dose.vaccineId === row.id
              );

              return (
                <tr key={row.id} className="text-gray-700">
                  {columns &&
                    columns.map((column, index) => {
                      const range =
                        row.recommendedAdministrations[column.accesor];
                      const dose = dosesPatient?.doses.find(
                        (dose) => dose.range === column.accesor
                      );

                      return (
                        <th
                          key={index}
                          className={`${
                            index === 0
                              ? "bg-gray-100 text-left text-xl font-bold p-3"
                              : "w-40 border-r-2 p-0 border-gray-200"
                          } align-middle whitespace-nowrap `}
                        >
                          {range ? (
                            
                            <RangeBackGround color={row.color} direction={range} >  
                              {dosesPatient && dose && (
                                <DosePill color={row.color} text= {dose.doseName} isRangeRecomendation={true} />
                              )}
                            </RangeBackGround>
                         
                          ) :  dosesPatient && dose ? (
                            <DosePill color={row.color} text= {dose.doseName} isRangeRecomendation={false} />
                          ) :
                            row[column.accesor]
                          }
                            
                        </th>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
