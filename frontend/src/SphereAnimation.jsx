import React, { useEffect, useRef } from 'react'
import { Spheres1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.5/build/backgrounds/spheres1.cdn.min.js'
import './pages/home/css/home.css'
import Carousal from './pages/home/components/swiper'
import backMark from './pages/home/images/backMark.png'
import backMark1 from './pages/home/images/image.png'

const SphereAnimation = () => {
    const canvasRef = useRef(null)
    const bgRef = useRef(null) // Store bg instance
    const headingRef = useRef(null) // Store h1 reference

    useEffect(() => {
        if (!canvasRef.current) return

        // Initialize WebGL Spheres Background
        bgRef.current = Spheres1Background(canvasRef.current, {
            count: 150,
            minSize: 0.3,
            maxSize: .8,
            gravity: 0.4
        })

        const bg = bgRef.current

        if (typeof bg.enablePointerBall === 'function') {
            bg.enablePointerBall();
        } else {
            console.warn("Pointer Ball feature is not available in this version of Spheres1Background.");
        }

        // Toggle gravity function
        const toggleGravity = () => {
            if (bg) bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0
        }

        // Change sphere colors
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

        // Handle contenteditable behavior
        const updateHeadingAttribute = () => {
            if (headingRef.current) {
                headingRef.current.setAttribute("data-heading", headingRef.current.innerText)
            }
        }

        headingRef.current?.addEventListener("input", updateHeadingAttribute);

        return () => {
            document.getElementById('gravity-btn')?.removeEventListener('click', toggleGravity)
            document.getElementById('colors-btn')?.removeEventListener('click', changeColors)
            headingRef.current?.removeEventListener("input", updateHeadingAttribute);
        }
    }, []) // Empty dependency array to run only once

    return (
        <>
            <div id="app">
                <div className="hero">
                    <div className="bdy_card_contain">
                        <div class="bday-card">

                            <div class="bday-decor--container">

                                <div class="bday-pic ">
                                    <Carousal/>
                                </div>


                            </div>

                            <div class="bday-message bday-message--paper">
                                <p>Ana, yet another year that we get to celebrate together! Hope you have a great day, and may your new age be full of health, love and laughter. Love you loads <br /> Camila</p>
                                <p class="bday-decor bday-decor--bottom-right zoom-left-in-out">📌</p>
                            </div>

                        </div>
                    </div>

                    <div className='hero-content'> 
                        <h1 className='hover-target' style={{position:'relative',width:'fit-content'}} ref={headingRef} contentEditable data-heading="ASIAN">ASIAN <img style={{position:'absolute',top:'-60px',width:'170%',left:'-100px',zIndex:'-1000'}} src={backMark1} alt="" /></h1>
                        <h2 className='hover-target'><span>ADEPT</span></h2>
                        <p>From weddings to corporate gatherings, Asian Adept crafts flawless events with creativity and precision. Let’s make your vision a reality!</p>
                    </div>
                </div>
                <canvas ref={canvasRef} id="webgl-canvas"></canvas>
            </div>
        </>
    )
}

export default SphereAnimation
