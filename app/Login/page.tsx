import { Login } from '@/components/Login/Login'
import React from 'react'
import { Spotlight } from '@/components/ui/Spotlight'

function page() {
  return (
    <>
     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
 
    <div className="flex justify-center items-center h-screen">
    
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <Login/>
        
    </div>
    </div>
    </>
  )
}

export default page