"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const UploadCamera = ({ setFigPie, setImageSample, setErgo, setTimer, setCSV, setAllImages}) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setVideoFile(file);
      };
  const [videoFile, setVideoFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', videoFile);
      setUploading(true);
      const response = await axios.post('http://127.0.0.1:5001/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log("OUTPUT UPLOAD", response.data.detect)
      const { vide_url, pie_graph, image_sample, ergo_status, time, csv_data, all_images} = response.data.detect;
      setVideoUrl(vide_url);
      setFigPie(pie_graph);
      setImageSample(image_sample)
      setErgo(ergo_status)
      setUploading(false);
      setTimer(time)
      setCSV(csv_data)
      setAllImages(all_images)
    } catch (error) {
      console.error('Error uploading video:', error);
      setUploading(false);
    }
  };

  return (
    <div className="col-span-1 grid grid-cols-1 border">
    <h1 className="px-2 py-2 underline text-2xl font-bold text-white animate-pulse">UPLOAD VIDEO!</h1>
    <div className="">
        <label htmlFor="videoFile" className="">
        Select Video File:
        </label>
        <input
          id="videoFile"
          type="file"
          accept="video/*"
          className="border border-gray-300 rounded w-full"
          onChange={handleFileChange}
        />
      </div>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleUpload}
        disabled={!videoFile || uploading}
      >
        {uploading ? (
          <h1 className="animation-pulse text-xl">Processing Video...</h1>
        ) : (
          'Upload Video'
        )}
      </button>
      <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
            <video className="object-fill border-sky-600 border-4" src={videoUrl} controls autoPlay playsinline loop type="video/mp4" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }}></video>
        </div>
        </div>
</div>
  )
}

export default UploadCamera
