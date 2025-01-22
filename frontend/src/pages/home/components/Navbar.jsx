import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import Cursor from '../../../Cursor';
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

        return () => {
            if (bars) {
                bars.removeEventListener("click", barClicked);
            }
        };
    }, []);

    // ✅ Move `hideNav` outside useEffect so JSX can use it
    function hideNav() {
        const bars = document.getElementById("nav-action");
        const nav = document.getElementById("nav");

        if (bars && nav) {
            bars.classList.remove('active');
            nav.classList.remove('visible');
        }
    }

    return (
        <>
            <Cursor />
            <TopLinks />
            <div className="bars" id="nav-action">
                <span className="bar"></span>
            </div>

            <nav id="nav">
                <ul>
                    <li className="shape-circle"><Link className='hover-target' to="/about" onClick={hideNav}>About</Link></li>
                    <li className="shape-circle"><Link className='hover-target' to="/services" onClick={hideNav}>Services</Link></li>
                    <li className="shape-circle"><Link className='hover-target' to="/portfolio" onClick={hideNav}>Portfolio</Link></li>
                    <li className="shape-circle"><Link className='hover-target' to="/blog" onClick={hideNav}>Blog</Link></li>
                    <li className="shape-circle"><Link className='hover-target' to="/team" onClick={hideNav}>Team</Link></li>
                    <li className="shape-circle"><Link className='hover-target' to="/contact" onClick={hideNav}>Contact</Link></li>
                    <li className="shape-circle"><Link className='hover-target' to="/service" onClick={hideNav}>Service</Link></li>
                    <li className="shape-circle"><Link className='hover-target' to="/" onClick={hideNav}>Home</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
