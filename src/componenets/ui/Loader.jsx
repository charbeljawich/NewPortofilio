import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const {progress}=useProgress();
  return (
    

    <Html  className='font-light text-xl text-center  'center>{progress}% Loaded</Html>
  )
}

export default Loader