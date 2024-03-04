"use client";

import React, { useContext, useState } from 'react'
import { ContextProvider } from '../Store/Store';

const page = () => {
    const {setProfile} = useContext(ContextProvider);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [img, setImage] = useState(null)
  return (
    <main className=' h-screen flex'>
        <form onSubmit={(e)=> {e.preventDefault();setProfile(name, mobile, img)}} className=' m-auto items-center flex flex-col w-[400px] py-5' action="">
            <input type="text" name='fullname' onChange={(e)=> setName(e.target.value)} id="fullname" placeholder='Full Name...' className=' text-black' />
            <input type="tel" name='mobile' id='mobile' maxLength={10} onChange={(e)=> setMobile(e.target.value)} placeholder='Mobile No...' className='text-black' />
            <label htmlFor="profile-image" className=' w-[80%]'>Profile Image:</label>
            {img?'':<input type="file" name="profile-image" id="profile-image" className='border-none' inputMode='url' onChange={(e)=> {setImage(e.target.files[0]);console.log(e.target.files[0])}} />}
            <button type='submit' className=' bg-black text-white'>Set Profile</button>
        </form>
    </main>
  )
}

export default page