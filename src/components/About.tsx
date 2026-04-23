import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/code-lo.jpg";

function About() {
  return (
    <section id="about" style={{ position: "relative" }}>
      <div
        className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
      >
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-pattern bg-about"
        ></div>
        <div className="md:w-3/5">
          <h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
            About
            <hr
              className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
            />
          </h2>
          <p>
            am a motivated Java developer with a strong interest in backend
            development. I have been working on personal projects using Java and
            Spring Boot to build practical experience.
          </p>
          <br />
          <p>
            I am currently looking for a fresher or internship opportunity where
            I can apply my knowledge, learn from experienced developers, and
            grow in a professional environment.
          </p>
          <br />
          <p>
            My main stack is Java, but I also learning more with other tools and
            frameworks such as React, TypeScript, Next.js, .Net, Express, Node,
            MongoDB, and MySQL...etc. I'm always{" "}
            <span className="font-bold">open to new opportunities</span>, so
            feel free to
            <ScrollLink
              smooth={true}
              offset={-100}
              spy={true}
              to="contact"
              className="font-bold text-teal-500 cursor-pointer hover:underline"
            >
              {" "}
              get in touch!
            </ScrollLink>
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={aboutImage}
            alt="Profile image"
            width={420}
            height={500}
            className="rounded-md opacity-70"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
