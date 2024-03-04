"use client";
import React, { useContext, useState } from 'react'
import { ContextProvider } from '../Store/Store'
import Link from 'next/link';

const page = () => {
  const {signUp} = useContext(ContextProvider);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=> {
    e.preventDefault()
    signUp(email, password);
  }
  return (
    <div className=' w-full h-screen flex items-center justify-center'>
        <form onSubmit={(e)=> handleSubmit(e)} className=' lg:w-[450px] md:w-[80%] py-4 w-full items-center flex flex-col bg-[#c49031e7] rounded-[20px]'>
          <h1>SignUp</h1>
          <input type="email" id='email' onChange={(e)=> setEmail(e.target.value)} autoComplete='off' name='email' placeholder="Email ID..." />
          <input type="password" id='password' onChange={(e)=> setPassword(e.target.value)} autoComplete='off' name='password' placeholder='Create Password...' />
          <button type='submit' className=' bg-[red] px-4 py-1 mt-2 rounded-[10px]'>Register</button>
          <p>Already have an account? <Link href={'../login'} className=' text-xl text-[#5329a1]'>Login</Link></p>
        </form>
    </div>
  )
}

export default page