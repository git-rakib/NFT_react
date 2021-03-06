import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import NavSearch from './NavSearch';

function NavMenu() {

  return (
    <>
        <div className='flex py-4 items-center float-left'>
        <div className='2xl:logo xl:mr-10'>
            <Link to="/"><span className='font-bold font-roboto md:text-[26px] xm:text-[24px] nav-text-grd'>Company.</span></Link>
        </div>
        <nav className='xl:inline-block lg:hidden md:hidden sm:hidden xm:hidden'>
            <ul className='flex pt-[7px]'>
                <li>
                    <NavLink exact to="/" className='nav-link' activeClassName='nav-link active-nav'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" className="nav-link"  activeClassName='nav-link active-nav'>
                        About Us
                    </NavLink>
                </li>
                <li className='nav-link group'>
                    <span className='items-center cursor-pointer flex'>
                        Explore
                        <FaAngleDown className='ml-1 font-extralight' />
                    </span>
                    <ul className='group-hover:active-dropdown invisible group-hover:visible group-hover:duration-200 duration-75'>
                        <li className='my-2'><Link to='/explore'>Product</Link></li>
                        <li className='my-2 cursor-pointer'>Explore 2</li>
                        <li className='my-2 cursor-pointer'>Explore 3</li>
                    </ul>
                </li>
                <li className='nav-link group'>
                    <span className='flex cursor-pointer items-center'>
                        Pages
                        <FaAngleDown className='ml-1 font-extralight' />
                    </span>
                    <ul className='group-hover:active-dropdown invisible group-hover:visible group-hover:duration-200 duration-75'>
                        <li className='my-2 cursor-pointer'>Pages 1</li>
                        <li className='my-2 cursor-pointer'>Pages 2</li>
                        <li className='my-2 cursor-pointer'>Pages 3</li>
                    </ul>
                </li>
                <li className='nav-link group'>
                    <span className='flex cursor-pointer items-center'>
                        Blog
                        <FaAngleDown className='ml-1 font-extralight' />
                    </span>
                    <ul className='group-hover:active-dropdown invisible group-hover:visible group-hover:duration-200 duration-75'>
                        <li className='my-2'><Link to='/blog'>All Blog</Link></li>
                        <li className='my-2 cursor-pointer'>Comment</li>
                        <li className='my-2 cursor-pointer'>Blog 3</li>
                    </ul>
                </li>
                <li className='nav-link mr-0'>
                    <NavLink exact to="/contact" className='nav-link mr-0'  activeClassName='nav-link active-nav'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
        <div className='float-right py-4'>
        <NavSearch />
        </div>
    </>
  )
}

export default NavMenu