
import "./Footersection.css";
import footerLogo from "../assets/images/logo.png";

const Footersection = () => {
	return (
		<section id="footer-section">
			<div className="footer">
				<div className="footer-description">
					<figure>
						<img src={footerLogo}
							alt="logo footer"
						/>
					</figure>
					<div className="footer-des-contant">
						<p>
							<span>
								India’s most trusted policy & political education platform
							</span>
							Plot No XX, Building Bharat Campus,<br></br>
							New Delhi, India – 1100XX <br></br>
							<div className="phone">
								<ion-icon name="call"></ion-icon>
								<p>
									Contact Us: +91 XXXXXXXXXX

								</p>

							</div>

						</p>
					</div>
				</div>
				<div className="footer-contant">
					<div className="footer-building-bharat">
						<h2>Building Bharat</h2>
						<ul>
							<li>
								<a href="#">
									About Us
								</a>
							</li>
							<li>
								<a href="#">
									Careers
								</a>
							</li>
							<li>
								<a href="#">
									Blogs
								</a>
							</li>
							<li>
								<a href="#">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#">
									Terms & Conditions
								</a>
							</li>
						</ul>

					</div>
					<div className="footer-program">
						<h2>Programs</h2>
						<ul>

							<li>
								<a href="#">
									Certificate Courses

								</a>
							</li>
							<li>
								<a href="#">

									Live Workshops

								</a>
							</li>
							<li>
								<a href="#">

									Research Projects

								</a>
							</li>
							<li>
								<a href="#">

									Placement Assistance

								</a>
							</li>
							<li>
								<a href="#">

									Governance
								</a>
							</li>
							<li>
								<a href="#">
									Hackathons
								</a>
							</li>

						</ul>
					</div>
					<div className="footer-follow-us">
						<h2>Follow us</h2>
						<ul>
							<li>
								<span>
									<ion-icon name="logo-instagram"></ion-icon>
								</span>
								<a href="#">Instagram</a>
							</li>
							<li>
								<span>
									<ion-icon name="logo-linkedin"></ion-icon>
								</span>
								<a href="#">LinkedIn</a>
							</li>
							<li>
								<span>
									<ion-icon name="logo-facebook"></ion-icon>
								</span>
								<a href="#">Facebook</a>
							</li>
							<li>
								<span>
									<ion-icon name="logo-youtube"></ion-icon>
								</span>
								<a href="#">YouTube</a>
							</li>
							<li>
								<span>
									<ion-icon name="logo-discord"></ion-icon>
								</span>
								<a href="#">Discord</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Footersection;