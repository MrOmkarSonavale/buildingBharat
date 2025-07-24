import "./Card.css"

const Card = ({ card }) => {
	const Icon = card.logo;
	return (
		<div className="card" key={card.index}>
			<figure>
				{
					<Icon className="size-6 text-blue-500 icon" />
				}
			</figure>

			<h3>{card.heading}</h3>
			<p>{card.description}</p>
		</div>
	)
};

export default Card;