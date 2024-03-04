import React from 'react'
import Header from '../Components/Common/Header'
import SideBar from '../Components/Common/SideBar'
import Content from '../Components/Home/Content'

const page = () => {
  return (
    <div className=' page min-h-screen h-screen'>
        <Header/>
        <SideBar/>
        <Content/>
    </div>
  )
}

export default page