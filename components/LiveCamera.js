"use client";
import React, { useEffect, useState } from "react";


const LiveCamera = ({url, start, stop, isRunning}) => {
  return (
    <div className="col-span-1 grid grid-cols-1 border">
    <h1 className="px-2 py-2 underline text-2xl font-bold text-white animate-pulse">LIVE CAMERA !</h1>

    <div className="grid grid-cols-2 gap-2">
        <button onClick={start} className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}>START</button>
        <button  onClick={stop} className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${isRunning ? '':'opacity-50 cursor-not-allowed'}`}>STOP</button>
    </div>
    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
    <img className='object-fill  border-sky-600 border-4' src={url} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }}></img>
    </div>
    </div>
</div>
  )
}

export default LiveCamera
