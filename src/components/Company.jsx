import "./Company.css"

const logo = [
	"../src/assets/images/company/logo-1.png",
	"../src/assets/images/company/logo-2.png",
	"../src/assets/images/company/logo-3.png",
	"../src/assets/images/company/logo-4.png",
	"../src/assets/images/company/logo-5.png",
	"../src/assets/images/company/logo-6.png",
	"../src/assets/images/company/logo-7.png",
	"../src/assets/images/company/logo-8.png",
	"../src/assets/images/company/logo-9.png",
	"../src/assets/images/company/logo-10.png",
	"../src/assets/images/company/logo-11.jpg",
	"../src/assets/images/company/logo-12.png",
	"../src/assets/images/company/logo-13.png",
	"../src/assets/images/company/logo-14.png",
	"../src/assets/images/company/logo-15.png",
	"../src/assets/images/company/logo-16.png",
	"../src/assets/images/company/logo-17.png",
	"../src/assets/images/company/logo-18.png",
	"../src/assets/images/company/logo-19.png",
	"../src/assets/images/company/logo-20.png",
	"../src/assets/images/company/logo-21.png",
	"../src/assets/images/company/logo-22.png",
	"../src/assets/images/company/logo-23.png",
	"../src/assets/images/company/logo-24.png",
	"../src/assets/images/company/logo-25.png",
	"../src/assets/images/company/logo-26.png",
	"../src/assets/images/company/logo-27.png",
	"../src/assets/images/company/logo-28.png",
	"../src/assets/images/company/logo-29.png",
	"../src/assets/images/company/logo-30.png",
	"../src/assets/images/company/logo-31.png",
	"../src/assets/images/company/logo-32.png",
	"../src/assets/images/company/logo-33.png",
	"../src/assets/images/company/logo-34.png",
	"../src/assets/images/company/logo-35.png",
	"../src/assets/images/company/logo-36.png",
]

// ...existing code...
function Company() {

	return (
		<>
			{
				logo.map((log, index) => (
					<figure className={`company-fig company-fig-${index + 1}`}>
						<img
							src={log}
							alt={`logo-${index}`}
							className="your-css-class" // optional
						/>
					</figure>
				))
			}
		</>
	)
};

export default Company;