import "./Contactsection.css";
import Contact from "../components/Contact";

const Contactsection = () => {
	return (
		<section id="contact">
			<div className="contact-main">
				<div className="contact-fig">
					<h2>Together,<br></br> We Build Bharat</h2>
					<figure>
						<img src="../src/assets/images/bharat.png" alt="bharat logo" />
					</figure>
				</div>
				<div className="contact-detail">
					<Contact />
				</div>
			</div>
		</section>
	)
};

export default Contactsection;