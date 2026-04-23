import imageShare from "../assets/projects/imageShared.png";
import gems from "../assets/images/gems.webp"
import rentalHouse from "../assets/images/rentalHouse.avif"

export interface Project {
	id: number;
	title: string;
	about: string;
	description: string;
	thumbnail: string;
	tech: string[];
	github: string;
	link: string;
	filter: string[];
	type: string;
};

export const myProjects: Project[] = [
	{
		id: 0,
		title: "House for rents",
		about: "Rental property management application",
		description: "",
		thumbnail: rentalHouse,
		tech: ["Java", "javaFx", "JDBC"],
		github: "https://github.com/pmkhang/Project-rental-house",
		link: "https://github.com/pmkhang/Project-rental-house",
		filter: ["All", "Desktop Application"],
		type: "Desktop Application",
	},
	{
		id: 1,
		title: "Yash Gems Project",
		about: "Gemstones buying and selling online",
		description: "",
		thumbnail: gems,
		tech: [".Net", "Docket", "JWT", "NextJs", "Postgre"],
		github: "https://github.com/pmkhang/Yash-Gems-project",
		link: "",
		filter: ["All", "Web Application"],
		type: "Web Application",
	},
	{
		id: 2,
		title: "Dabble",
		about: "Image sharing.",
		description: "",
		thumbnail: imageShare,
		tech: ["Java", "Java Springs", "Redis", "Jwt", "nextJs", "Flutter"],
		github: "https://github.com/pmkhang/dabble-project",
		link: "",
		filter: ["All", "Web Application"],
		type: "Web Application",
	},
];
