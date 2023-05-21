

const ToyCard = ({toy}) => {
    const{toyName,price,rating,subCategory,photo}=toy
    return (
        <div className="card md:card-side bg-base-100 shadow-xl">
            <figure><img className="w-full md:w-96 h-full" src={photo} alt="Movie" /></figure>
            <div className="card-body bg-gray-50">
                <h2 className="card-title">{toyName}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;