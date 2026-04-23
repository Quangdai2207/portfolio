import { HiArrowDown } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import profileImage from "../assets/images/profileImage.jpeg";

function Hero() {
	return (
		<section id="home">
			<div
				className="relative md:h-[calc(100vh-200px)] flex flex-col text-center items-center 
							justify-center animate-fadeIn animation-delay-2 my-10 py-16 
							sm:py-30 md:py-24 md:flex-row md:space-x-4 md:text-left
							"
			>
				<div
					style={{ backgroundImage: `url(${bgImage})` }}
					className="bg-pattern bg-hero"
				></div>

				<div className="md:mt-5 md:w-1/2">
					<img
						src={profileImage}
						alt="Profile image"
						width={370}
						className="rounded-full shadow-2xl mr-10"
					/>
				</div>
				<div className="md:mt-2 md:w-3/5 relative">
					<h1
						className="heading text-4xl font-bold mt-6 md:mt-0 md:text-5xl 
									md:whitespace-nowrap md:-ml-4"
					>
						Hi, I'm Đại Trần
					</h1>
					<p className="font-semibold text-xl mt-4 mb-6 md:text-2xl">
						<span className="">I'm a Developer Application</span>
					</p>

					<ScrollLink
						smooth={true}
						offset={-100}
						spy={true}
						to="contact"
						className="text-primary-foreground font-semibold px-6 py-3 bg-secondary rounded-lg cursor-pointer shadow hover:bg-accent transition"
					>
						Contact Me
					</ScrollLink>
				</div>
			</div>
			<div className="flex flex-row items-center text-center justify-center ">
				<ScrollLink
					to="about"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<HiArrowDown size={35} className="animate-bounce cursor-pointer" />
				</ScrollLink>
			</div>
		</section>
	);
}

export default Hero;
