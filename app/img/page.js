"use client";
import React, { useEffect, useState } from "react";
import Image from "next/legacy/image"
import Header from "@/components/Header";
import LiveCamera from "@/components/LiveCamera";
import ImageSample from "@/components/ImageSample";
import UploadCamera from "@/components/UploadCamera";
import Analysis from "@/components/Analysis";
import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import TableCSV from "@/components/TableCSV";
import axios from "axios";
import ImageColumn from "@/components/ImageColumn";

function Page() {

    const [imageSample, setImageSample] = useState([''])
    const [figPie, setFigPie] = useState('')
    const [isRunning, setisRunning] = useState(false)
    const [ergo, setErgo] = useState({})
    const [csv, setCSV] = useState('')
    const [typeUser, setTypeUser] = useState('live')
    const [timer, setTimer] = useState(0);
    const [allImages, setAllImages] = useState([])

    async function start(){
        setTimer(0)
        console.log("Fired Start!")
        setisRunning(true)
        const resp = await axios.get(`http://127.0.0.1:5001/start`)
        setFigPie('')
        setImageSample([])
        setErgo({})  
        setCSV('')
        setAllImages([])
    }

    async function stop(){
        console.log("Fired Stop!")
        setisRunning(false)
        const resp = await axios.get(`http://127.0.0.1:5001/stop`)
        const {data} = await resp
        setFigPie(data.detect.pie_graph)
        setImageSample(data.detect.image_sample)
        setErgo(data.detect.ergo_status)
        setCSV(data.detect.csv_data)
        setAllImages(data.detect.all_images)
    }

    async function getDetect(){
        const resp = await axios.get(`http://127.0.0.1:5001/detect`)
        const {data} = await resp
        console.log(csv)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getDetect()
        }, 1000)
        return () => clearInterval(interval)
    })

    useEffect(() => {
      let interval = null;
  
      if (isRunning) {
        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [isRunning]);

    const handleShowTypeChange = (event) => {
        setTypeUser(event.target.value);
        setFigPie('')
        setImageSample([])
        setErgo({})
        setTimer(0)
        setCSV('')
        setAllImages([])
      };
    
  return (
     <div className="bg-slate-700 w-screen">
        <Header />
     <h2>Select Show Type</h2>
     <div className="grid grid-cols-2">
      <div>
        <input
          type="radio"
          id="live"
          name="showType"
          value="live"
          checked={typeUser === 'live'}
          onChange={handleShowTypeChange}
        />
        <label htmlFor="live"> Live Show</label>
      </div>
      <div>
        <input
          type="radio"
          id="upload"
          name="showType"
          value="upload"
          checked={typeUser === 'upload'}
          onChange={handleShowTypeChange}
        />
        <label htmlFor="upload"> Upload</label>
      </div>
      </div>
        <div className="grid grid-cols-2 bg-slate-800 w-screen">
        
        {typeUser === "live" && (
            <LiveCamera url={'http://127.0.0.1:5001/live'} start={start} stop={stop} isRunning={isRunning}/>
        )}

        {typeUser === "upload" && (
            <UploadCamera start={start} setFigPie={setFigPie} setImageSample={setImageSample} setErgo={setErgo} setTimer={setTimer} setCSV={setCSV} setAllImages={setAllImages}/>
        )}

        <ImageSample imageSample={imageSample} isRunning={isRunning} timer={timer}/>
        </div>

        <div className="grid grid-cols-2 border">
        <Analysis figPie={figPie}/>
        <Table>
        {Object.keys(ergo).map((key, index) => {
              return (
              <TableRow name={key.replaceAll('_',' ')} status_ergo={ergo[key]} />
              );
            })}
        </Table>
        </div>
      {csv !== '' && (
     <TableCSV csv_url={csv}/>
          )}
      {allImages.length >= 1 && (
      <ImageColumn images={allImages}/>
      )}
     </div> 
  );
}
  
export default Page;
