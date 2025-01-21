import React, { useEffect, useRef } from 'react'
import { Spheres1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.5/build/backgrounds/spheres1.cdn.min.js'
import './pages/home/css/home.css'
import Cursor from './Cursor'

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
            <Cursor />
            <div id="app">
                <div className="hero">
                    <div className="bdy_card_contain">
                        <div class="bday-card">

                            <div class="bday-decor--container">

                                <div class="bday-pic ">
                                    <img src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80" />
                                </div>

                                <p class="bday-decor bday-decor--top-right float">🎈</p>
                                <p class="bday-decor bday-decor--top-left spin">🌼</p>

                            </div>

                            <div class="bday-message bday-message--paper">
                                <p>Ana, yet another year that we get to celebrate together! Hope you have a great day, and may your new age be full of health, love and laughter. Love you loads <br /> Camila</p>
                                <p class="bday-decor bday-decor--bottom-right zoom-left-in-out">a</p>
                            </div>

                        </div>
                    </div>

                    <div className='hero-content'> 
                        <h1 className='hover-target' ref={headingRef} contentEditable data-heading="ASIAN">ASIAN</h1>
                        <h2 className='hover-target'>ADEPT</h2>
                        <p>From weddings to corporate gatherings, Asian Adept crafts flawless events with creativity and precision. Let’s make your vision a reality!</p>
                    </div>
                </div>
                <canvas ref={canvasRef} id="webgl-canvas"></canvas>
            </div>
        </>
    )
}

export default SphereAnimation
