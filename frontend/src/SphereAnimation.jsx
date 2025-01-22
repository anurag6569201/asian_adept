import React, { useEffect, useRef } from 'react';
import { Spheres1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.5/build/backgrounds/spheres1.cdn.min.js';
import './pages/home/css/home.css';
import Carousal from './pages/home/components/swiper';
import backMark1 from './pages/home/images/image.png';

const SphereAnimation = () => {
    const canvasRef = useRef(null);
    const bgRef = useRef(null); // Store bg instance
    const headingRef = useRef(null); // Store h1 reference

    useEffect(() => {
        if (!canvasRef.current) return;

        // Initialize WebGL Spheres Background
        bgRef.current = Spheres1Background(canvasRef.current, {
            count: 150,
            minSize: 0.3,
            maxSize: 0.8,
            gravity: 0
        });

        const bg = bgRef.current;

        if (typeof bg.enablePointerBall === 'function') {
            bg.enablePointerBall();
        } else {
            console.warn("Pointer Ball feature is not available in this version of Spheres1Background.");
        }

        // Toggle gravity function
        const toggleGravity = () => {
            if (bg) {
                bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 0.4 : 0;
            }
        };
        const toggleGravityOff = () => {
            if (bg) {
                bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0;
            }
        };

        // Change sphere colors
        const changeColors = () => {
            if (bg) {
                bg.spheres.setColors([
                    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                    `#${Math.floor(Math.random() * 16777215).toString(16)}`
                ]);
            }
        };

        document.getElementById('gravity-btn')?.addEventListener('mouseenter', toggleGravity);
        document.getElementById('gravity-btn')?.addEventListener('mouseleave', toggleGravityOff);
        document.getElementById('colors-btn')?.addEventListener('click', changeColors);

        // Handle contenteditable behavior
        const updateHeadingAttribute = () => {
            if (headingRef.current) {
                headingRef.current.setAttribute("data-heading", headingRef.current.innerText);
            }
        };

        headingRef.current?.addEventListener("input", updateHeadingAttribute);

        return () => {
            document.getElementById('gravity-btn')?.removeEventListener('mouseenter', toggleGravity);
            document.getElementById('colors-btn')?.removeEventListener('mouseenter', changeColors);
            headingRef.current?.removeEventListener("input", updateHeadingAttribute);
        };
    }, []); // Empty dependency array to run only once

    return (
        <>
            <div id="app">
                <div className="hero">
                    <div className="bdy_card_contain">
                        <div className="bday-card">
                            <div className="bday-decor--container">
                                <div className="bday-pic">
                                    <Carousal />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-content">
                        <h1 className="hover-target" style={{ position: 'relative', width: 'fit-content' }} ref={headingRef} contentEditable data-heading="ASIAN">
                            ASIAN
                            <img style={{ position: 'absolute', top: '-60px', width: '170%', left: '-100px', zIndex: '-1000' }} src={backMark1} alt="" />
                        </h1>
                        <h2 className="hover-target">
                            <span>ADEPT</span>
                        </h2>
                        <p>From weddings to corporate gatherings, Asian Adept crafts flawless events with creativity and precision. Let’s make your vision a reality!</p>
                        <button id="gravity-btn" className="hover-target" style={{ zIndex: '100' }}>Book Meeting</button>
                        <button id="colors-btn" className="hover-target" style={{ zIndex: '100', marginLeft: '10px',position:'sticky' }}>Change Colors</button>
                    </div>
                </div>
                <canvas ref={canvasRef} id="webgl-canvas"></canvas>
            </div>
        </>
    );
};

export default SphereAnimation;
