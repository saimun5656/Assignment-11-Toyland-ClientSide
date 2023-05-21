const Gallery = () => {
    return (
        <div className="mt-10">
            <h1 className="text-4xl md:text-5xl text-center text-white mb-10 font-mono font-semibol">Recent photoShoots</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-5  items-center">
            <div className="h-[220px] lg:h-[300px] bg-[#d9dee4] rounded-lg">
            <img className="h-full" src="https://i.ibb.co/n8Knrg2/removal-ai-a5de36ec-a01c-4a3e-9791-4eb101d26c79.png" alt="" />
            </div>
            <div className="  rounded-lg">
            <img className=" rounded-lg" src="https://cdn.shopify.com/s/files/1/1152/4590/files/post11-copyright.jpg?v=1676518180" alt="" />
            </div>
            <div className="h-[220px] lg:h-[300px] rounded-lg">
            <img className="h-full w-full rounded-lg"  src="https://cdn.shopify.com/s/files/1/1152/4590/files/post5-copyright.jpg?v=1676518129" alt="" />
            </div>
            <div className="rounded-lg">
            <img className=" rounded-lg"  src="https://cdn.shopify.com/s/files/1/1152/4590/files/post9-copyright.jpg?v=1676518148" alt="" />
            </div>
            
        </div>
        </div>
    );
};

export default Gallery;