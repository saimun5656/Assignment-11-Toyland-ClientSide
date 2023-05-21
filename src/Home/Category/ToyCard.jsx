

const ToyCard = ({toy}) => {
    const{toyName,price,rating,subCategory,photo}=toy
    return (
        <div className="card md:card-side bg-base-100 shadow-xl">
            <figure><img className="w-full md:w-96 md:h-72" src={photo} alt="Movie" /></figure>
            <div className="card-body bg-slate-500 bg-opacity-20 text-white">
                <h2 className="card-title">{toyName}</h2>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;