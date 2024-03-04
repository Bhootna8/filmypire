"use client";
import React, { useContext, useState } from 'react'
import { ContextProvider } from '../Store/Store';
import Link from 'next/link';

const page = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined)
  const {signIn} = useContext(ContextProvider);

  const handleSubmit = (e)=> {
    e.preventDefault();
    signIn(email, password);
  }
  return (
    <main className=" flex items-center justify-center h-screen">
        <form onSubmit={(e)=> handleSubmit(e)} action="" className=' w-[450px] bg-[orange] flex items-center flex-col rounded-[10px]'>
          <h1>SignIn</h1>
          <input type="email" onChange={(e)=> setEmail(e.target.value)} autoComplete='off' spellCheck="false" id='email' placeholder='Email ID...' />
          <input type="password" onChange={(e)=> setPassword(e.target.value)} autoComplete='off' id='password' placeholder='Password...' />
          <button type='submit'>Login</button>
          <p>New user <Link href={'../signup'} className=' text-xl text-[#5329a1]'>Signup</Link></p>
        </form>
    </main>
  )
}

export default page