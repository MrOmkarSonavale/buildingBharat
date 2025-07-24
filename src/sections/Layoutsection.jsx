
import Card from "../components/Card";
import { AcademicCapIcon, ArrowsRightLeftIcon, UsersIcon, HeartIcon, CameraIcon, BriefcaseIcon, TrophyIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import "./Layoutsection.css";
import Flow from "../components/Flow";

const cardArray = [
	{
		heading: "College Students",
		description: "Students from any discipline looking to build a career in politics and policy",
		logo: AcademicCapIcon
	},
	{
		heading: "Career Switchers",
		description: "Professionals from other fields wanting to transition into political consulting",
		logo: ArrowsRightLeftIcon
	},
	{
		heading: "Young Professionals",
		description: "Early-career professionals seeking to specialize in government and policy work",
		logo: UsersIcon

	},
	{
		heading: "Policy Enthusiasts",
		description: "Anyone passionate about public service and creating positive social impact",
		logo: HeartIcon
	}
]



const flowArray = [
	{
		heading: "Live Interactive Sessions",
		description: "Learn directly from policy experts, former MPs, senior bureaucrats, and successful political consultants through live, interactive sessions that simulate real-world scenarios.",
		keypoints: [
			"Weekly live sessions with industry experts",
			"Q&A sessions with former parliamentarians",
			"Interactive policy workshops"
		],
		image: "../src/assets/images/flow/liveinteraction.png",
		logomain: CameraIcon

	},
	{
		heading: "Guaranteed Job/Internship Opportunities",
		description: "Access exclusive job openings and internship opportunities with our partner organizations, think tanks, and political parties immediately after course completion.",
		keypoints: [
			"Exclusive partnership with 50+ organizations",
			"Direct placement assistance",
			"Networking events with industry leaders"
		],
		image: "../src/assets/images/flow/guarantedjob.png",
		logomain: BriefcaseIcon
	},
	{
		heading: "Boost Your Resume with Projects & Hackathons",
		description: "Work on real policy projects, participate in hackathons focused on governance challenges, and build a portfolio that stands out to top employers.",
		keypoints: [
			"Real-world policy research projects",
			"Monthly governance hackathons",
			" Published research opportunities"
		],
		image: "../src/assets/images/flow/boostresume.png",
		logomain: TrophyIcon
	},
	{
		heading: "Mock Interviews & Previous Year Questions",
		description: "Practice with curated questions from actual interviews at top political consulting firms, think tanks, and government policy interviews.",
		keypoints: [
			"1000+ previous year interview questions",
			"Weekly mock interview sessions",
			"Personalized feedback and improvement plans"
		],
		image: "../src/assets/images/flow/mockinterview.png",
		logomain: ChatBubbleBottomCenterIcon
	}
]

function Layoutsection() {
	return (
		<section id="layout">
			<div className="layout-section">
				<h2>Who Is This Initiative For?</h2>
				<p>Perfect for Aspiring Political and policy professionals from all Backgrounds</p>
				<div className="layout-cards">
					{
						cardArray.map((card, index) =>
							<Card card={card} index={index} />
						)
					}
				</div>
			</div>
			<div className="layout-process">
				<h2>Why Building Bharat Is Different</h2>
				<p> Experience the most comprehensive political and policy education platform</p>
				<div className="layout-process-flow">
					{
						flowArray.map((flowArray, index) =>
							<Flow flowArray={flowArray} index={index} />
						)
					}
				</div>
			</div>
		</section>
	)
};

export default Layoutsection;