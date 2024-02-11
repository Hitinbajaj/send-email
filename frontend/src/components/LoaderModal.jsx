
const LoaderModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-40">
      <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
        <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-gray-900"></div>
        <p className=" text-gray-800 pl-5">Sending email...</p>
      </div>
    </div>
  );
};

export default LoaderModal;
