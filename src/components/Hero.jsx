
import { ReactTyped } from "react-typed"
function Hero() {
    return (
        <div className="w-full h-[86vh] mt-[-32px] sm:mt-0 text-white">
            <div className="h-full flex flex-col justify-center items-center ">
                <p className="uppercase text-lg md:text-2xl lg:text-3xl text-[#00df9a] mb-2">Growing with Data Analytics</p>
                <p className="uppercase text-2xl sm:text-4xl md:text-5xl lg:text-4xl mb-1">Grow with Data</p>
                <div className="flex">
                    <p className="uppercase text-md sm:text-xl md:text-2xl lg:text-4xl">Fast, flexible financing for</p>
                    <ReactTyped
                        strings={["Data", "Science", "Fiction"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        className="ml-2 text-md sm:text-xl md:text-2xl lg:text-4xl font-bold"
                    />
                </div>
                <button className="bg-[#00df9a] p-6 mt-6 rounded-3xl text-md sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero