import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo/logo.png'


const NavBar = () => {
    return (
        <div className='container mx-auto py-5'>
            <div className="navbar  h-24 mb-4 p-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? "text-orange-600 " : ""}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/alltoys'
                                    className={({ isActive }) => isActive ? "text-orange-600 " : ""}
                                >
                                    All Toys
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/blogs'
                                    className={({ isActive }) => isActive ? "text-orange-600 " : ""}
                                >
                                    Blogs
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to='/' className=" normal-case text-xl font-bold w-48">
                        <img className="" src={logo} alt="" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold'>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? "text-orange-600 " : ""}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='font-bold'>
                            <NavLink
                                to='/alltoys'
                                className={({ isActive }) => isActive ? "text-orange-600 " : ""}
                            >
                                All Toys
                            </NavLink>
                        </li>
                        <li className='font-bold'>
                            <NavLink
                                to='/blogs'
                                className={({ isActive }) => isActive ? "text-orange-600 " : ""}
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className='w-2/5 rounded-full h-2/4 flex'>
                                    <img className='rounded-full w-12 h-12 mx-auto' src={user.photoURL} alt="" />
                                    {user.name}
                                    <button onClick={handleLogOut} className="btn">Sign out</button>
                                </div>
                            </> : <Link className='btn ml-3' to='/login'>Login</Link>
                    }
                </div> */}

            </div>
        </div>
    );
};

export default NavBar;