import React, { useContext, useState } from 'react'
import { assets } from '../assets/admin_assets/assets.js'
import { asset } from '../assets/frontend_assets/assets.js'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx'
const Navbar = () => {
  const [visible,setVisible] = useState(false);
  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken("");
    setCartItems({});
    navigate('/login');
  }
  return (
    <div className='flex item-center justify-between py-5 font-medium'>
     <Link to='/'  className='cursor-pointer'>
       <img src={assets.logo} className='w-36' alt='' />
       </Link> 
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col item-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col item-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col item-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col item-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex item-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={asset.search_icon} alt='' className='w-5 h-5 cursor-pointer' />
        <div className="group relative">
          <img onClick={() => token ? null : navigate('/login')} src={asset.profile_icon} alt='' className='w-5 h-5 cursor-pointer' />
          {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col  gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Order</p>
              <p onClick={() => logout()} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div> }
        </div>
        <Link to='/cart' className='relative'>
          <img src={asset.cart_icon} alt="" className='w-5 min-w-5' />
          <p className='absolute right-[-5px] top-[10px] w-5 text-center leading-4 bg-black text-white aspect-square rounded-full text-[-5px]'>{getCartCount() ||0}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={asset.menu_icon} alt="" className='w-5 h-5 cursor-pointer sm:hidden'/>
      </div>
      {/** side menubar for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${visible ? 'w-full': 'w-0'}`}>
          <div className='flex flex-col text-gray-700'>
            <div onClick={() => setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
              <img src={asset.dropdown_icon} alt="" className='h4 rotate-180' />
              <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'>COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
          </div>
      </div>
    </div>
  )
}

export default Navbar