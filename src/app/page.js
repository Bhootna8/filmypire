"use client";

import { useContext, useEffect } from "react";
import { ContextProvider } from "./Store/Store";
import Header from "./Components/Common/Header";
import SideBar from "./Components/Common/SideBar";
import Content from "./Components/Home/Content";

export default function Home() {
  const {darkMode} = useContext(ContextProvider);

  useEffect(()=> {
    window.onload =()=> {
      setTimeout(()=> {
          if(!navigator.onLine) {
              window.location.href="../offline"
          }
      }, 6000)
    }
  }, [])

  return (
    <main className={`${darkMode? 'dark': ''} page `}>
     <Header/>
     <SideBar/>
     <Content/>
    </main>
  )
}
