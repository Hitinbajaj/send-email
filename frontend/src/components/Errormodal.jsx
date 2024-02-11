import { useEffect } from 'react';

const ErrorModal = ({ onClose }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          onClose();
        }, 1400);
    
        return () => clearTimeout(timer);
      }, [onClose]);


    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50">
        <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="pl-3 text-gray-800">Failed to send email</p>
        </div>
        </div>
    );
};

export default ErrorModal;
