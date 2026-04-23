import backend from "../assets/images/backend1.png";
import general from "../assets/images/general.png";
import frontend from "../assets/images/react.png";

export type Skill = {
	label: string;
	src: string;
	alt: string;
	skills: string[];
};

export const mySkills: Skill[] = [
	{
		label: "Backend",
		src: backend,
		alt: "Backend icon",
		skills: [
			"OOP",
			"Java",
			"Java Spring",
			"RESTful APIs",
			"OAuth",
			"MySQL"
		],
	},
	{
		label: "Frontend",
		src: frontend,
		alt: "Frontend skills atom icon",
		skills: [
			"TypeScript",
			"JavaScript",
			"React",
			"HTML5",
			"CSS3",
			"Tailwind",
		],
	},
	{
		label: "Extra Skills",
		src: general,
		alt: "General skills icon",
		skills: [
			"Bash Shell",
			"Git",
			"GitHub",
			"NextJs",
			".Net",
			"Network Protocols",
		],
	},
];
