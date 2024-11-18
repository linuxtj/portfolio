import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaRedhat } from "react-icons/fa";
import { SiTerraform, SiAnsible } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Admin", "Automation Specialist", "Linux Professional"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          I'm <span className="text-designColor capitalize">Oscar Tejada</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          Results-driven Linux Systems Administrator with over five years of expertise in enterprise infrastructure management and cloud operations.
          Demonstrated success in architecting scalable solutions, implementing automation frameworks, and optimizing system performance across complex environments.
          Proven track record of reducing operational costs through innovative DevOps practices while maintaining 99.9% system uptime.
          Known for exceptional leadership in cross-functional teams and the ability to transform technical challenges into efficient, sustainable solutions. 
          Combines deep technical knowledge with strategic thinking to deliver robust infrastructure improvements that drive business success.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://www.Github.com/linuxtj" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/linuxtj19"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLS ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaRedhat/>
            </span>
            <span className="bannerIcon">
              <SiAnsible />
            </span>
            <span className="bannerIcon">
              <SiTerraform />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
