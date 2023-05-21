import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit=(event)=>{
       event.preventDefault();
       const form = event.target;
       const toyName= form.toyName.value;
       const name =form.userName.value;
       const email = form.email.value;
       const subCategory= form.subCategory.value;
       const rating = form.rating.value;
       const price = form.price.value;
       const quantity= form.quantity.value;
       const photo = form.photo.value;
       const description= form.description.value;
       const toy ={toyName,
                   name,
                   email,
                   subCategory,
                   rating,
                   price,
                   quantity,
                   photo,
                   description,
            }
            fetch('http://localhost:5100/toy',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(toy)
            })
            .then(res=>res.json())
            .then(data=>{
            data.insertedId?
            Swal.fire({
              title: 'Toy Added!',
              text: 'A new Toy has been added',
              icon: 'success',
              confirmButtonText: 'ok'
            }):''
            console.log(data);
            })
            .catch()
       console.log(toy);
    }
    return (

        <div className=" flex md:flex-row flex-col card-side  shadow-xl mt-10">
            <div className="bg-1 md:rounded-l-md rounded-t-md flex items-center justify-center">
            <div className='an'>
                    <img  className="w-96 " src="/public/pngwing.com.png" alt="" />
                    </div> 
            </div>
            <form onSubmit={handleSubmit} className="card-body bg-3 md:rounded-r-md rounded-b-md">
                <div className=" grid lg:grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input name="toyName" type="text" placeholder="Toy name" className="input rounded-md bg-white border-0" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input name="userName" type="text" placeholder="your name" className="input rounded-md bg-white border-0" defaultValue={user.displayName}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input name="price" type="number" placeholder="price" className="input rounded-md bg-white border-0" defaultValue={user.email}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub-Category</span>
                    </label>
                    <input name="subCategory" type="text" placeholder="Sub-category" className="input rounded-md bg-white border-0" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input name="rating" step="0.01" max="5" type="number" placeholder="rating" className="input rounded-md bg-white border-0" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input name="quantity" type="number" placeholder="Available quantity
" className="input rounded-md bg-white border-0" />
                </div>
                
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input rounded-md bg-white border-0" defaultValue={user.email}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input name="photo" type="text" placeholder="photo url" className="input rounded-md bg-white border-0" />
               </div>
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <textarea className="p-5 rounded-md" name="description" id="" cols="30" rows="6" placeholder="Detail "></textarea>
                </div>
                <button type="submit" className="bg-4 px-4 py-1 rounded-md text-xl font-semibold text-white">Add Toy</button>
            </form>
            
        </div>

    );
};

export default AddToy;