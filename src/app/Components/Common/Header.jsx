"use client";

import { ContextProvider } from '@/app/Store/Store';
import React, { useContext } from 'react';
import {FaRegSun, FaRegMoon} from 'react-icons/fa6';
import {CiSearch} from 'react-icons/ci';
import {MdAccountCircle} from 'react-icons/md';
import Link from 'next/link';
import {useSearchParams} from 'react-router-dom'

const Header = () => {
    const {darkMode, setDarkMode, user, logOut, router, setApiRoute, setIsLoading} = useContext(ContextProvider);
    const [params, setParam] = useSearchParams()
    const search = (e)=> {
        if(e.target.value) {
            if(e.key==="Enter") {
                setApiRoute('search');
                router.push(`../search?query=${e.target.value}`);
                setIsLoading(true);
            }
        }
    }

    const goToProfilePage = ()=> {
        if(user) router.push('../profile');
    }
  return (
    <div className=' header flex items-center px-5  bg-[#2d9dcd] dark:bg-black text-white '>
        <div className=' text-[2rem]' onClick={()=> setDarkMode(!darkMode)}>
            {darkMode?<FaRegMoon/> : <FaRegSun/>}
        </div>

        <div className=' w-[200px] flex items-center relative border-b-[2px] focus-within:border-b-[red] mx-auto'>
            <CiSearch className=' absolute text-2xl'/>
            <input type="text" id='search' onKeyUp={(e)=> search(e)} placeholder='Search...' className=' w-[88%] ml-auto outline-none bg-transparent' autoComplete='off' />
        </div> 

        <div className=' flex text-[1.8rem] items-center px-2'>
            {user?<h1 className='text-2xl mr-2 cursor-pointer' onClick={()=> logOut()} >LogOut</h1>:<Link href={'../login'} className=' cursor-pointer text-2xl mr-2'>Login</Link>}
            <MdAccountCircle className='cursor-pointer' onClick={()=> goToProfilePage()}/>
        </div>
    </div>
  )
}

export default Header