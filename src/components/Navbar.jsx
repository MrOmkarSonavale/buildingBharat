import CustomButton from "./CustomButton";
import './Navbar.css'; // Import the CSS for Navbar
import logo from '../assets/images/logo.jpg';
import React, { useState, useEffect } from "react";
const Navbar = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroHeight = document.getElementById("home").offsetHeight;

			setIsSticky(window.scrollY > heroHeight);
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`${isSticky ? 'sticky' : ''}`}>
			<div className="Navbar">
				<img src={logo} alt="Building Bharat logo, stylized text with blue and orange colors, on a white background"
				/>


				<div className="Navlinks">
					<ul>
						<li><a href="#home">Home</a></li>
						<li><a href="#about">Courses</a></li>
						<li><a href="#services">For College</a></li>
						<li><a href="#contact">Internships</a></li>
						<li><a href="#blog">Blogs</a></li>
					</ul>

					<div className="Navbuttons">
						<CustomButton variant="primary" size="medium">
							Start Learning
						</CustomButton>
					</div>
				</div>

			</div>
		</nav>
	)
}

export default Navbar;

