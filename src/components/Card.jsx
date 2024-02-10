import { FiUserCheck } from "react-icons/fi";

function Card() {
    return (
        <div className="flex justify-evenly flex-wrap bg-white text-black  py-14">
            <div className="flex flex-col items-center p-5 m-2 shadow-md hover:shadow-lg shadow-gray-400 ">
                <FiUserCheck className="text-7xl lg:text-8xl xl:text-9xl" />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold p-2">Single User</h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">$199</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">1 User</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">10GB Storage</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">Email Support</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">Help Center Access</p>
                <button className="bg-[#00df9a] p-3 mt-6 rounded-xl text-md sm:text-lg md:text-xl lg:text-2xl font-bold">
                    Get Started
                </button>

            </div>
            <div className="flex flex-col items-center p-5 m-2 shadow-md hover:shadow-lg shadow-gray-400 ">
                <FiUserCheck className="text-7xl lg:text-8xl xl:text-9xl" />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold p-2">Single User</h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">$199</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">1 User</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">10GB Storage</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">Email Support</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">Help Center Access</p>
                <button className="bg-[#00df9a] p-3 mt-6 rounded-xl text-md sm:text-lg md:text-xl lg:text-2xl font-bold">
                    Get Started
                </button>

            </div>
            <div className="flex flex-col items-center p-5 m-2 shadow-md hover:shadow-lg shadow-gray-400 ">
                <FiUserCheck className="text-7xl lg:text-8xl xl:text-9xl" />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold p-2">Single User</h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">$199</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">1 User</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">10GB Storage</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">Email Support</p>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">Help Center Access</p>
                <button className="bg-[#00df9a] p-3 mt-6 rounded-xl text-md sm:text-lg md:text-xl lg:text-2xl font-bold">
                    Get Started
                </button>

            </div>
        </div>
    )
}

export default Card