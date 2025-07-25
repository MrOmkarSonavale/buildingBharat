import "./Company.css"

import logoOne from "../assets/images/company/logo-1.png";
import logoTwo from "../assets/images/company/logo-2.png";
import logoThree from "../assets/images/company/logo-3.png";
import logoFour from "../assets/images/company/logo-4.png";
import logoFive from "../assets/images/company/logo-5.png";
import logoSix from
	"../assets/images/company/logo-6.png";
import logoSeven from
	"../assets/images/company/logo-7.png";
import logoEight from
	"../assets/images/company/logo-8.png";
import logoNine from
	"../assets/images/company/logo-9.png";
import logoTen from
	"../assets/images/company/logo-10.png";
import logoEleven from
	"../assets/images/company/logo-11.jpg";
import logoTwelve from
	"../assets/images/company/logo-12.png";
import logoThriteen from
	"../assets/images/company/logo-13.png";
import logofourteen from
	"../assets/images/company/logo-14.png";
import logoFifteen from
	"../assets/images/company/logo-15.png";
import logoSixteen from
	"../assets/images/company/logo-16.png";
import logoSeventeen from
	"../assets/images/company/logo-17.png";
import logoEighteen from
	"../assets/images/company/logo-18.png";
import logoNineteen from
	"../assets/images/company/logo-19.png";
import logoTwenty from
	"../assets/images/company/logo-20.png";
import logotwentyOne from
	"../assets/images/company/logo-21.png";
import logotwentyTwo from
	"../assets/images/company/logo-22.png";
import logotwentyThree from
	"../assets/images/company/logo-23.png";
import logotwentyFour from
	"../assets/images/company/logo-24.png";
import logotwentyFive from
	"../assets/images/company/logo-25.png";
import logotwentySix from
	"../assets/images/company/logo-26.png";
import logotwentySeven from
	"../assets/images/company/logo-27.png";
import logotwentyEight from
	"../assets/images/company/logo-28.png";
import logotwentyNine from
	"../assets/images/company/logo-29.png";
import logothirty from
	"../assets/images/company/logo-30.png";
import logothirtyOne from
	"../assets/images/company/logo-31.png";
import logothirtyTwo from
	"../assets/images/company/logo-32.png";
import logothirtyThree from
	"../assets/images/company/logo-33.png";
import logothirtyFour from
	"../assets/images/company/logo-34.png";
import logothirtyFive from
	"../assets/images/company/logo-35.png";
import logothirtySix from
	"../assets/images/company/logo-36.png";


const logo = [
	logoOne,
	logoTwo,
	logoThree,
	logoFour,
	logoFive,
	logoSix,
	logoSeven,
	logoEight,
	logoNine,
	logoTen,
	logoEleven,
	logoTwelve,
	logoThriteen,
	logofourteen,
	logoFifteen,
	logoSixteen,
	logoSeventeen,
	logoEighteen,
	logoNineteen,
	logoTwenty,
	logotwentyOne,
	logotwentyTwo,
	logotwentyThree,
	logotwentyFour,
	logotwentyFive,
	logotwentySix,
	logotwentySeven,
	logotwentyEight,
	logotwentyNine,
	logothirty,
	logothirtyOne,
	logothirtyTwo,
	logothirtyThree,
	logothirtyFour,
	logothirtyFive,
	logothirtySix
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