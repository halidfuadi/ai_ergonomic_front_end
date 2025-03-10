"use client";

import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiInfo } from 'react-icons/fi';

const MessageComponent = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleStart = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div>
      {showMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <FiInfo className="text-blue-500 text-4xl" />
              <h2 className="text-2xl ml-4">Message Title</h2>
            </div>
            <p className="mb-6">This is the message content.</p>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowMessage(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
