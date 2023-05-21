import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContext) 
  
    const navItems= 
    <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/alltoys'>All Toys</Link></li>
    {
      user?<>
      <li><Link to='/mytoys'>My Toys</Link></li> 
      </>:''
    }
    <li><Link to='/addtoy'>Add A Toy</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn border-0 ps-0 me-5 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-[#ededed] rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <img className="w-8 rotate-45 me-4 inline" src="./jigsaw.png" alt="" />
    <a className="normal-case text-xl font-bold text-sky-500">Toy<span className="text-red-500">land</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   {user?<>
    <img className="w-8 rounded-full me-5" src={user.photoURL} alt="" />
   <button onClick={logOut}>Logout</button>
   
   </>:
   <Link to='/auth/login'>Login</Link>}
  </div>
</div>
    );
};

export default Header;