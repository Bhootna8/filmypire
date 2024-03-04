"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../Components/Common/Header';
import SideBar from '../Components/Common/SideBar';
import Content from '../Components/Home/Content';

const page = () => {
  return (
    <div className=" page ">
      <Header/>
      <SideBar/>
      <Content/>
    </div>
  )
}

export default page