import React, { useEffect, useRef } from 'react'
import { Spheres1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.5/build/backgrounds/spheres1.cdn.min.js'
import './pages/home/css/home.css'

const SphereAnimation = () => {
    const canvasRef = useRef(null)
    let bg = null
  
    useEffect(() => {
      if (!canvasRef.current) return
  
      // Initialize WebGL Spheres Background
      bg = Spheres1Background(canvasRef.current, {
        count: 250,
        minSize: 0.3,
        maxSize: 1,
        gravity: 0.4
      })
      if (bg.enablePointerBall) {
        bg.enablePointerBall();
        } else {
            console.warn("Pointer Ball feature is not available in this version of Spheres1Background.");
        }
  
      // Add event listeners
      const toggleGravity = () => {
        if (bg) bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0
      }
  
      const changeColors = () => {
        if (bg) {
          bg.spheres.setColors([
            0xffffff * Math.random(),
            0xffffff * Math.random(),
            0xffffff * Math.random()
          ])
        }
      }
  
      document.getElementById('gravity-btn')?.addEventListener('click', toggleGravity)
      document.getElementById('colors-btn')?.addEventListener('click', changeColors)
  
      return () => {
        document.getElementById('gravity-btn')?.removeEventListener('click', toggleGravity)
        document.getElementById('colors-btn')?.removeEventListener('click', changeColors)
      }
    }, [])

  return (
    <div id="app">
      <div className="hero">
        <h1>Asian</h1>
        <h2>Adept</h2>
      </div>
      <canvas ref={canvasRef} id="webgl-canvas"></canvas>
    </div>
  )
}

export default SphereAnimation
