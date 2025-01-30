import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Oscar Tejada</h3>
        <p className="text-lg font-normal text-gray-400">
          Linux Professional
        </p>
        <p className="text-base text-gray-400 tracking-wide">
         Feel free to connect with me for collaboration, opportunities, or any inqueries related to Linux Systems Administration.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">(208) 420-5585</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">oscartjada19@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://github.com/linuxtj" target="_blank">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/oscartjada19"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
