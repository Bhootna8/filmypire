"use client";

import { categories, genres} from '../../../Sources/SideBar'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className=' sidebar flex flex-col overflow-y-auto'>
        <h1 className=' text-[3rem] mx-auto text-[red] italic font-extrabold my-5'>Filmpire</h1>
        <hr className=' w-full h-[1px] bg-[gray] mb-5' />

        <p className=' text-[gray]'>Category</p>
        {categories.map((category, index)=> (
          <Link key={index+40} href={`../search?q=${category.text}`} className=' flex ml-10 mb-2'>
            {category.text}
          </Link>
        ))}
        <hr className=' h-[0.6px] w-full bg-[gray] my-3' />

        <p className=' text-[gray]'>Genre</p>
        {genres.map((genra, index)=> (
          <Link key={index} href={`../search?q=${genra.text}`} className=" flex ml-10 mb-2">
            {genra.text}
          </Link>
        ))}
    </div>
  )
}

export default SideBar