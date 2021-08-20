import React from 'react'

const DosePill = ({color, text, isRangeRecomendation}: any) => {
  return (
    <span className={`bg-${color}-400  ${isRangeRecomendation? 'h-full' : 'h-2/4'} w-11/12 flex rounded-full  justify-center items-center`}>
      {text}
    </span>
  )
}

export default DosePill
