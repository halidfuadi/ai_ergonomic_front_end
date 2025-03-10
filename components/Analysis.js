import React from 'react'
import Image from "next/legacy/image"

const Analysis = ({figPie}) => {
  return (
    <div className="border-4 border-green-500">
        <div className='bg-gray-600'>
        <h1 className="text-xl underline font-bold text-center">ANALYSIS SUMMARY</h1>
        </div>
        {figPie == '' && <h1 className="items-center justify-center text-3xl py-2 text-center animate-pulse">WAITING DATA</h1>}
        <div className="grid grid-cols-1 gap-1">
            <Image className='' src={figPie} width="640px" height="300"/>
        </div>
    </div>
  )
}

export default Analysis
