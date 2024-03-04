import Image from 'next/image'
import React from 'react'
import Spinner from '../../../../public/spinner.svg'

const Loading = () => {
  return (
    <div className=' content flex items-center justify-center'>
    <Image
    src={Spinner}
    width={60}
    height={60}
    alt=''
    priority
    />
    </div>
  )
}

export default Loading