import './banner.css'
const Banner = () => {
    return (
        <div>
            <div className="md:grid  grid-cols-3 gap-5 ">
                <div className="col-span-2 flex justify-center items-center text-white ps-10 rounded-md bg-1 shadow-md mb-5 md:h-full h-[350px]">
                    <div className='space-y-5'>
                    <h1 className="text-4xl">Exclusive toys</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tempora!</p>
                    <button className='bg-4 px-4 py-1 rounded-md text-xl font-semibold text-white '>Shop now</button>
                    </div>
                    <div className='an'>
                    <img  className="w-96 " src="/public/pngwing.com.png" alt="" />
                    </div> 
                </div>
                <div className='flex flex-col gap-y-5 h-full '>
                    <div className='bg-3 p-5 rounded-md text-center h-full space-y-3'>
                    <h1 className="text-3xl">Up to 50% off</h1>
                    <p>on selected items</p>
                    
                    <button className='bg-4 px-4 py-1 rounded-md text-xl font-semibold text-white hover:shadow-lg'>Shop now</button>
                    
                   
                    </div>
                    <div className='bg-3  p-5 rounded-md text-center h-full space-y-3'>
                    <h1 className=" text-3xl">Up to 50% off</h1>
                    <p>on selected items</p>
                    <button className='bg-4 px-4 py-1 rounded-md text-xl font-semibold text-white shadow-lg'>Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;