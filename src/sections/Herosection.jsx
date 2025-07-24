import CustomButton from "../components/CustomButton";
import './Herosection.css'; // Import the CSS for Herosection
import Bulb from '/src/assets/icons/bulb.svg?react'; // Importing SVG as a React component

function Herosection() {
	return (
		<section id="home">
			<div className="hero-section">

				<div className="hero-description">
					<h1>Crack Political and policies <br></br>roles with Confidence!</h1>
					<p>
						We offer a world class curriculum and expert mentorship to help<br></br> you break into politics and policy roles. No background needed<br></br> just your passion to lead and transform Bharat.
					</p>

					<div className="hero-buttons">
						<div>
							<CustomButton>start Learning For Free</CustomButton>
						</div>
						<div>
							<CustomButton variant="secondary" >Join premium</CustomButton>
						</div>
					</div>
				</div>
				<div className="hero-figure">
					<div className="center-name">
						<span className="center-building">Building</span>
						<span className="center-bharat"> BHARAT</span>
					</div>

					{/* <Bulb className="rotating-svg" /> */}
				</div>
			</div>
		</section>
	);
}

export default Herosection;