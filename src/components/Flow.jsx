
import "./Flow.css"
import { CheckIcon } from '@heroicons/react/24/outline';


const Flow = ({ flowArray, index }) => {

	const Icon = flowArray.logomain;
	return (
		<div className="flow">
			{
				index % 2 == 0 ?
					<>
						<div className="flow-description">




							<h3>
								<span>
									<Icon className="logo" />
								</span>
								{flowArray.heading}
							</h3>
							<p>{flowArray.description}</p>

							<ul>
								{
									flowArray.keypoints.map((point) => <li>
										<span>
											<CheckIcon className="checkLogo" />
										</span>
										{point}</li>)
								}
							</ul>




						</div>
						<figure className="flow-fig" >
							<img src={flowArray.image} alt={flowArray.heading} />
						</figure>
					</> :
					<>
						<figure className="flow-fig" style={{ justifyContent: "start" }}>
							<img src={flowArray.image} alt={flowArray.heading} />
						</figure>
						<div className="flow-description">




							<h3>
								<span>
									<Icon className="logo" />
								</span>
								{flowArray.heading}
							</h3>
							<p>{flowArray.description}</p>

							<ul>
								{
									flowArray.keypoints.map((point) => <li>
										<CheckIcon className="checkLogo" />
										{point}</li>)
								}
							</ul>




						</div>
					</>

			}

		</div>
	)



};

export default Flow;