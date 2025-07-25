import "./Info.css";
import { LinkIcon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const infoMain = [
	{
		heading: "2500+",
		description: "Students Trained"
	},
	{
		heading: "1200+",
		description: "Successful Placements"
	},
	{
		heading: "50+",
		description: "Partner Organizations"

	},
	{
		heading: "15+",
		description: "Specialized Courses"

	}
];

const infoMessage = [
	{
		heading: " Excellence in Education",
		message: "Recognized as India’s leading platform for political and policy education with industry-validated curriculum.",
		logo: RocketLaunchIcon
	},
	{
		heading: "Strong Industry Network",
		message: "Partnerships with leading think tanks, political parties, and government organizations across India.",
		logo: LinkIcon
	},
	{
		heading: "Alumni Success",
		message: "Our alumni are making real impact in Parliament, state governments, and top consulting firms nationwide.",
		logo: UserGroupIcon
	}
]

function Info() {



	return (
		<div className="info-main">
			<div className="info-stats">
				{
					infoMain.map((info) =>
						<div className="info-stats-main">
							<h3>{info.heading}</h3>
							<p>{info.description}</p>
						</div>

					)
				}
			</div>

			<div className="info-description">
				{
					infoMessage.map((info) => {
						const Icon = info.logo;
						return (
							<div className="info-card">
								<figure>
									<Icon className="logo" />
								</figure>
								<h3>{info.heading}</h3>
								<p>{info.message}</p>
							</div>
						)

					})
				}
			</div>

		</div>
	)
};


export default Info;

