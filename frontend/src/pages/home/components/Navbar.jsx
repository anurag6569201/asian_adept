import { useEffect } from 'react';
import '../css/navbar.css';
import Cursor from '../../../Cursor'
import TopLinks from './TopLinks';

function Navbar() {
    useEffect(() => {
        const bars = document.getElementById("nav-action");
        const nav = document.getElementById("nav");

        function barClicked() {
            bars.classList.toggle('active');
            nav.classList.toggle('visible');
        }

        if (bars) {
            bars.addEventListener("click", barClicked);
        }

        // Cleanup function to remove event listener when component unmounts
        return () => {
            if (bars) {
                bars.removeEventListener("click", barClicked);
            }
        };
    }, []);

    return (
        <>
            <Cursor />
            <TopLinks />
            <div class="bars" id="nav-action">
                <span class="bar"></span>
            </div>

            <nav id="nav">
                <ul>
                    <li class="shape-circle"><a className='hover-target' href="#">Home</a></li>
                    <li class="shape-circle"><a className='hover-target' href="#">About</a></li>
                    <li class="shape-circle"><a className='hover-target' href="#">Services</a></li>
                    <li class="shape-circle"><a className='hover-target' href="#">Portfolio</a></li>
                    <li class="shape-circle"><a className='hover-target' href="#">Blog</a></li>
                    <li class="shape-circle"><a className='hover-target' href="#">Team</a></li>
                    <li class="shape-circle"><a className='hover-target' href="#">Contact</a></li>
                    <li class="shape-circle"><a className='hover-target' href="#">Careers</a></li>
                </ul>
            </nav>

        </>
    );
}

export default Navbar;
