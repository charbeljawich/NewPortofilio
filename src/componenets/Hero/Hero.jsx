import React, { Suspense } from 'react'
import HeroText from './HeroText'
import { ParallaxBackground } from '../ui/ParallaxBackground'
import { Canvas, useFrame } from '@react-three/fiber'
import { Astronaut } from '../ui/Astronaut'
import { Float} from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import Loader from '../ui/Loader'

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 })

  return (
    <section  id="Home" className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
      <HeroText />
      <ParallaxBackground />

      <figure
        className='absolute inset-0'
        style={{ width: '100vw', height: '100vh' }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [0, -1, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  )
}

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    )
  })
  return null
}

export default Hero
