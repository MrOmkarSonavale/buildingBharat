import "./TestimonialCard.css";



function TestimonialCard({ testimonial }) {
	return (

		<div className="testimonial-content">

			<div className="testimonial-description">
				<p>{testimonial.heading}</p>
				<h3>{testimonial.description}</h3>
				<div className="testimonial-author">
					<span className="testimonial-name">{testimonial.name}</span>
					<span className="testimonial-position">{testimonial.position}</span>
				</div>
			</div>
			<div className="testimonial-image">
				<img src={testimonial.img} alt={`${testimonial.name}'s testimonial`} />
			</div>

		</div>

	);
};

export default TestimonialCard;