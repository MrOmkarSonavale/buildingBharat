import Company from "../components/Company";
import "./Customersection.css"
import { useMemo } from "react";

const Customersection = () => {

	const memoizedChild = useMemo(() => {
		return <Company />;
	}, []); // Only re-create if `name` changes


	return (
		<section id="customersection">
			<div className="customer">
				<h2>Our Network & Strategic Influencers</h2>

				<div className="grid-container">
					{
						memoizedChild
					}
				</div>
			</div>
		</section>
	);
};

export default Customersection;