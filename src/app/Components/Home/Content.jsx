"use client";

import Image from 'next/image';
import React, {useContext, useEffect, useState} from 'react'
import { ContextProvider } from '@/app/Store/Store';
import Loading from '../Common/Loading';
import Link from 'next/link';

const shortText = (txt, len)=> {
  return (txt?.length>len?txt?.slice(0, len)+"...": txt);
}

const Content = () => {
  const {movies, page, setPage, isLoading, setIsLoading, searchQuery} = useContext(ContextProvider);

  const heroImg = movies[Math.floor(Math.random()*movies?.length)]

  const nextPage = ()=> {
    setIsLoading(true);
    if(page>=1) setPage(pre=> (pre+1))
  }

  const prePage = ()=> {
    if(page>1) setPage(pre=>(pre-1))
  }
  if(isLoading) return <Loading/>

  return (
    <div className=' content flex flex-wrap justify-evenly overflow-y-auto '>
      <div className="relative w-[93%] mx-auto cursor-pointer h-[500px] my-7">
        <div className=' w-full h-full flex rounded-[10px] bg-gradient-to-tr from-[#000000e7] text-white absolute'>
          <div className=' flex flex-col mt-auto mb-[100px] ml-[40px] w-[300px]'>
             <p className=' text-xl font-semibold'>{heroImg?.title}</p>
             <p className=''>{shortText(heroImg?.overview, 150)}</p>
             <p className=' text-[14px] text-[#9c9999]'>{heroImg?.release_date}</p>
          </div>
        </div>
        <img src={heroImg?.backdrop_path} className=' object-cover w-full h-full rounded-[10px]' alt="" />
      </div>


      {movies?.map(movie=> (
        <div key={movie?._id} className='w-[200px] flex flex-col items-center lg:ml-3 mb-6'>
          <section className=' relative img-container w-full h-[300px] group overflow-hidden cursor-pointer rounded-[20px]'>
          <Link href={`../movie?id=${movie._id}&no=${page}${searchQuery?`&query=${searchQuery}`:''}`}><span className=' hidden z-50 absolute top-0 w-full h-full bg-gradient-to-tr from-[#00000054] to-[#00000066] group-hover:flex'/>
            <Image src={movie.poster_path} width={250} height={300} className='top-0 group-hover:scale-110' alt='image'/></Link>
          </section>
          <p className=' font-semibold'>{movie.title}</p>
        </div>
      ))}

      <div className=' w-full px-3 lg:px-20 text-2xl flex items-center'>
        {page>1? <Link href={`../page?no=${page-1}`} onClick={()=> prePage()}>Pre Page</Link>: ''}
        <span className=' mx-auto'>{page}</span>
        {page<10?<Link href={`../page?no=${+page+1}`} onClick={()=> nextPage()}>Next Page</Link>:''}
      </div>
    </div>
  )
}

export default Content