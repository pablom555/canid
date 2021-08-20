import React from 'react'
import { IMapping } from '../../types';

const roundedRangeMap: IMapping = {
  S: "rounded-l-full ml-1",
  E: "rounded-r-full mr-1",
  M: "rounded-none",
  "S-E": "rounded-full w-11/12 m-auto",
};

const RangeBackGround = ({color, direction, children}:any) => {
  return (
    <span className={`bg-${color}-100 block h-2/4 ${roundedRangeMap[direction]}`}>
      {children}                   
    </span>
  )
}

export default RangeBackGround
