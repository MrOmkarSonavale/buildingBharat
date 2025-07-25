import Company from "../components/Company";
import "./Customersection.css"

const Customersection = () => {
	return (
		<section id="customersection">
			<div className="customer">
				<h2>Our Network & Strategic Influencers</h2>

				<div className="grid-container">
					<Company />
				</div>
			</div>
		</section>
	);
};

export default Customersection;