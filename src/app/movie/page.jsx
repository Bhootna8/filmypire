"use client";
import Header from '@/app/Components/Common/Header';
import SideBar from '@/app/Components/Common/SideBar';
import { ContextProvider } from '@/app/Store/Store';
import { useSearchParams } from 'next/navigation';
import React, { useContext } from 'react'
import Loading from '../Components/Common/Loading';

const page = () => {
    const {movies, darkMode} = useContext(ContextProvider)
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const filteredMovie = movies?.filter(movie=> (movie?._id===+id))
    const movie = filteredMovie[0];

  return (
    <div className={`page min-h-screen h-screen ${darkMode?'dark': ''}`}>
        <Header/>
        <SideBar/>
        <div className='content flex py-4'>
            <img src={movie?.backdrop_path} className=' w-[500px] h-[550px] mx-4' alt="" />
            <div className=' w-full flex flex-col items-center px-2'>
            <h2 className=' text-[1.3rem] font-bold'>{movie?.title}</h2>
            <p>{movie?.overview}</p>
            </div>

        </div>
    </div>
  )
}

export default page