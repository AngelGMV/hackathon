import { useState, type JSX } from "react";

interface PackagesProps {
  eventType: string;
  imgEventType: string;
  description: JSX.Element; 
}

const Packages: React.FC<PackagesProps> = ({ eventType, imgEventType, description }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center text-center bg-[#083d77] hover:bg-[#da4167] rounded-xl w-[300px] h-[450px] p-4 shadow-md">
        <img src={imgEventType} alt={eventType} className="w-full h-[250px] object-cover rounded-md mb-3" />
        <div className="text-white text-3xl font-semibold capitalize mb-8">{eventType}</div>
        <button
          className="bg-white text-[#083d77] w-65  h-10 rounded-full px-4 py-1 text-2xl font-semibold hover:bg-gray-100 transition"
          onClick={() => setShowModal(true)}
        >
          + Info
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-[#00000066] flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            {description}
          </div>
        </div>
      )}
    </>
  );
};

export default Packages;
