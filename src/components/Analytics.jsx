import img from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className="w-full bg-white py-12 px-10">
            <div className="flex justify-center flex-wrap">
                <img src={img} alt="analytics" className="w-96 md:w-3/5 xl:w-2/3" />
                <div className='flex flex-col justify-center'>
                    <h1 className='uppercase text-md sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#00df9a] text-center'>
                        Data Analytics dashboard
                    </h1>
                    <p className='text-md font-bold sm:text-lg md:text-xl lg:text-2xl'>
                        Get insights into your sales, customers, and overall performance.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Analytics