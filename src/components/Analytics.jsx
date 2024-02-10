import img from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className="w-full bg-white py-12 px-4">
            <div className="flex justify-center flex-wrap">
                <img src={img} alt="analytics" className="w-96 md:w-3/5 lg:w-[52%]" />
                <div className='flex flex-col justify-center items-center flex-wrap max-w-[620px] pt-20'>
                    <h1 className='uppercase text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-[#00df9a] text-center'>
                        Data Analytics dashboard
                    </h1>
                    <p className='text-md font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center py-4'>
                        Get insights into your sales, customers, and overall performance.
                    </p>
                    <button className="bg-[#000] p-4 mt-6 rounded-3xl text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold text-white w-3/5">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Analytics