"use client";
import React, { useEffect } from 'react'

const page = () => {

  useEffect(()=> {
    window.ononline= ()=> {
      window.location.href="../"
    }
  }, [])
  return (
    <div>you are offline...</div>
  )
}

export default page