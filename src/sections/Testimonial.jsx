import TestimonialCard from "../components/TestimonialCard";
import "./Testimonial.css";
import imageOne from "../assets/images/image-1.jpg"
import imageTwo from "../assets/images/image-2.jpg"
import imageThree from "../assets/images/image-3.jpg"

const testimonials = [
	{
		heading: "Student to Social Impact Leader",
		description: "Building Bharat transformed the way I learn and think. With hands on projects, expert mentorship, and constant support, I discovered my leadership potential. I never imagined I’d lead initiatives in my own town while learning from top mentors across India.The journey wasn’t easy, but the Building Bharat team made it achievable every step, every doubt, every win was celebrated. If you're serious about growing and giving back to India, this is where you start.",
		name: "Priya Sharma",
		position: "Student Leader, Nagpur",
		img: imageOne
	},
	{
		heading: "Small Village to National Level Fellowship",
		description: "Before Building Bharat, I had big dreams but no direction. The courses opened up opportunities I never thought possible – from rural innovation challenges to real-world community projects. The mentors treated us like family and pushed us to aim higher.Today, I’m mentoring students from my own village and applying for fellowships that once felt out of reach. This platform is a launchpad for every Indian youth who wants to create change",
		name: "Ravi Kumar",
		position: "Youth Fellow, Bihar",
		img: imageTwo
	},
	{
		heading: "From Doubt to Impactful Career Path",
		description: "I used to believe students from tier 3 colleges couldn’t compete. But Building Bharat changed my mindset. Through their programs, I built a strong portfolio, worked on local issues, and even led a state-level hackathon! This journey isn’t just about jobs  it’s about purpose.I’m more confident, skilled, and connected to a mission bigger than myself.",
		name: "Sneha Joshi",
		position: "UX Intern & Community Volunteer, Pune",
		img: imageThree
	}

]


function Testimonial() {


	return (
		<section id="testimonial" className="testimonial-section">
			<h2>Stories That Inspire</h2>
			{
				<div className="testimonial-card">
					<div className="testimonial"
						style={{ width: `${testimonials.length - 1 * 100}%` }}
					>
						{
							testimonials.map((testimonial, index) => (
								<TestimonialCard key={index} testimonial={testimonial} />
							))
						}
					</div>
				</div>
			}
		</section>
	);
};

export default Testimonial;
