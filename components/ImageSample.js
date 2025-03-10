import React from 'react'
import Image from "next/legacy/image"

const ImageSample = ({imageSample, isRunning, timer}) => {

  return (
    <div className="col-span-1">
            <h1 className="px-1 font-bold text-xl border">IMAGES SAMPLES</h1>
            {imageSample == '' && <h1 className="text-2xl text-center item-center text-green-500">NO DATA SAMPLES FOUND</h1>}
            <div className="grid grid-cols-2 border gap-1">
            {Object.keys(imageSample).map((key, index) => {
              return (
                <div className='col-span-1 border'>
                <Image key={index} src={`http://127.0.0.1:5001/${imageSample[index]}`} width="1200px" height="1200px" />
                </div>);
            })}
            </div>

            <div className="grid grid-cols-1">
            <div className="gap">
            <h1 className={`text-2xl font-mono ${isRunning ? "text-red-500": "text-green-700"}`}>STATUS : {isRunning ? "RUNNING AI" : "IDLE"}</h1>
            <h1 className="text-2xl font-mono text-cyan-400">CYCLE TIME : {timer} Sec </h1>
            <h1 className="text-xl font-mono">INTERNAL DEVELOPMENT BY TMMIN</h1>
            </div>
            
        </div>
    </div>
  )
}

export default ImageSample
