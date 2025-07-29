import React from "react";
import "./Contact.css";

const Contact = React.memo(function Contact() {
	return (
		<>
			<h2>Contact us</h2>
			<form action="/submit" method="POST">

				<input type="text" id="name" name="name" required placeholder="Name" />


				<div className="contact-people">
					<input type="email" id="email" name="email" required placeholder="Email" />


					<input type="number" id="phone" name="phone" required
						placeholder="Number"
					/>
				</div>


				<input type="text" id="subject" name="subject" required placeholder="Subject" />


				<textarea id="message" name="message" placeholder="Description"></textarea>


				<button type="submit" className="btn">Submit</button>
			</form>
		</>
	)
});

export default Contact;