"use client";
import React from 'react';

const ImageColumn = ({images}) => {
  console.log("IMAGE COLUMN", images)
  return (
    <div className='border'>
    <h1 className='text-2xl font-bold underline text-center'>All Image</h1>
    <div className="grid grid-cols-3 gap-3">
      {Object.keys(images).map((key, index) => (
        <div key={index} className="relative border">
          <img src={`http://127.0.0.1:5001/${images[index]}`}  alt={`Image ${index}`} className="w-full h-auto" />
          <div className="border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl bg-black bg-opacity-50 p-2 rounded">
            {images[index].split('/').pop().split('_').pop().replace('.jpeg', '').replace(/\./g, ':')}
          </div>
          <div className="border absolute top-1 left-1 transform  text-white font-bold text-xl bg-black bg-opacity-50 p-2 rounded">
            {images[index].split('/')[2].split('_').slice(0, 2).join(' ')}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageColumn;
