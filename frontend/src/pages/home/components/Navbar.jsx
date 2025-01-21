import { useEffect } from 'react';
import '../css/navbar.css';

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
<div class="bars" id="nav-action">
    <span class="bar"></span>
</div>

<nav id="nav">
    <ul>
        <li class="shape-circle"><a href="#">Home</a></li>
        <li class="shape-circle"><a href="#">About</a></li>
        <li class="shape-circle"><a href="#">Services</a></li>
        <li class="shape-circle"><a href="#">Portfolio</a></li>
        <li class="shape-circle"><a href="#">Blog</a></li>
        <li class="shape-circle"><a href="#">Team</a></li>
        <li class="shape-circle"><a href="#">Contact</a></li>
        <li class="shape-circle"><a href="#">Careers</a></li>
    </ul>
</nav>

        </>
    );
}

export default Navbar;
