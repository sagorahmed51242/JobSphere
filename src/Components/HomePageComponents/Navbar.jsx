import { NavLink } from 'react-router-dom'
import logo1 from './../../assets/Images/logo1.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
  const [openOrClose , setOpenOrClose] = useState(true)

  return (
    <div className='py-1 shadow-md sticky top-0 z-50 bg-white/50 backdrop-blur-sm'>
      <div className='max-w-[1280px] mx-auto grid lg:grid-cols-4'>
        <div className={openOrClose ? "flex items-center justify-between  pb-5" : "flex items-center justify-between"}>
          <div className='lg:col-span-1'>
            <img className='max-w-[200px]' src={logo1} alt="" />
          </div>
          <div className='lg:hidden pr-5'>
            <button onClick={() => setOpenOrClose(!openOrClose)}>{openOrClose ? <AiOutlineClose className='text-3xl' /> : <RxHamburgerMenu className='text-3xl' /> }</button>
          </div>
        </div>
        {
          openOrClose ?
          <>
              <ul className='lg:col-span-2 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-3 lg:gap-5 text-sm font-semibold pl-5 lg:pl-0'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to="/find-a-job">Find a Job</NavLink></li>
                <li><NavLink to="/candidates">Candidates</NavLink></li>
                <li><NavLink to="/recricutes">Recriuters</NavLink></li>
                <li><NavLink to="/pages">Pages</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              <div className='lg:col-span-1 flex flex-col items-start lg:flex-row lg:gap-5 lg:justify-end lg:items-center text-sm font-semibold pl-5 lg:pl-5 space-y-2 lg:space-y-0 mt-5 lg:mt-0 pb-3 lg:pb-0'>
                <button className='lg:underline inline-block'><NavLink to="/sign-up">Register</NavLink></button>
                <button className='bg-[#3C65F5] text-white rounded-lg px-[25px] py-[10px] inline-block'><NavLink to="/log-in">Sign in</NavLink></button>
              </div>
          </>
          : ""
        }
      </div>
    </div>
  )
}

export default Navbar