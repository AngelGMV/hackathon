interface PackagesProps {
    eventType: string;
    imgEventType: string;
}

const Packages: React.FC<PackagesProps> = ({
    eventType,
    imgEventType
}) => {
    return (
        <div className="flex flex-col items-center text-center bg-[#083d77] rounded-xl w-[300px] h-[400px] p-4 shadow-md">
            <img
                src={imgEventType}
                alt={eventType}
                className="w-full h-[250px] object-cover rounded-md mb-3"
            />
            <div className="text-white text-3xl font-semibold capitalize mb-4">
                {eventType}
            </div>
            <button className="bg-white text-[#083d77] rounded-full px-4 py-1 w-60 text-xl font-semibold hover:bg-gray-100 transition">
                + Info
            </button>
        </div>
    );
};

export default Packages;
