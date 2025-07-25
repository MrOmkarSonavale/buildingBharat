import "./Contactsection.css";
import Contact from "../components/Contact";
import bharatlog from "../assets/images/bharat.png";

const Contactsection = () => {
	return (
		<section id="contact">
			<div className="contact-main">
				<div className="contact-fig">
					<h2>Together,<br></br> We Build Bharat</h2>
					<figure>
						<img src={bharatlog}
							alt="bharat logo" />
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