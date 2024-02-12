/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const SuccessModal = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="pl-4 text-gray-800">Email sent successfully!</p>
      </div>
    </div>
  );
};

export default SuccessModal;
