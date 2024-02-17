import React from 'react'
import Background from './Background'
import Foreground from './Foreground'
import Card from './Card'
function PlayArea() {
  return (
    <div className='relative w-full h-screen bg-zinc-800 '>
     <Background/>
     <Foreground/>
 
    </div>
  )
}

export default PlayArea;
