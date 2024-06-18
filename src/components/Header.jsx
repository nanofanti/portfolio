import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { RiInstagramFill } from "react-icons/ri";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import PhotoSection from "./PhotoSection";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="absolute bg-white dark:bg-black w-screen">
      <div className="h-[80rem] relative flex flex-col pt-[6rem] bg-fixed bg-parallax1 bg-cover">
        <div className="pb-16 bg-transparent z-40" data-aos="fade-left">
          <ul className="flex justify-between sm:justify-end  px-10">
            {!darkMode ? (
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-4xl text-white animate__animated animate__bounce transition hover:text-teal-500 "
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
            ) : (
              <li>
                <BsFillSunFill
                  className="cursor-pointer text-4xl text-white animate__animated animate__bounce transition hover:text-orange-400"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
            )}
            <li className="hover:-translate-y-2 transform transition">
              <a
                className="text-[1.5rem] font-roboto bg-orange-400  dark:bg-teal-500 text-white px-4 py-2 rounded-md ml-8 0  "
                href="/MarcoFantiResume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center pb-10">
          <div
            data-aos="fade-up"
            className="font-roboto text-[1rem] sm:text-[2rem]"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "<> </>",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full Stack Web Developer",
                2000,
                "Experience in UI/UX Design",
                2000,
                "Rock climber and Boulder addicted",
                2000,
              ]}
              wrapper="p"
              speed={1}
              preRenderFirstString={false}
              deletionSpeed={5}
              style={{
                display: "inline-block",
                color: "white",
              }}
              repeat={Infinity}
            />
          </div>
        </div>

        <p
          className="text-orange-40 text-[4.5rem] sm:text-[6rem] text-center py-5 mt-14 font-medium text-orange-400 dark:text-teal-500 "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Marco Fanti
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-[1.25rem] sm:text-[1.5rem] font-roboto py-10 leading-8 text-center text-white"
        >
          Highly motivated
          <p className="text-orange-400 font-roboto hover:font-bold dark:text-teal-500">
            {" "}
            Junior Full Stack Web Developer
          </p>{" "}
          <p className="mt-2">
            with a proven track record in leadership and client service
          </p>
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-[1.25rem] sm:text-[1.5rem] font-roboto pb-14 leading-8 text-center text-white"
        >
          <p>
            Strong work ethic, passion for learning, and particular interest
            building user-friendly interfaces
            <p className="mt-2">
              using the{" "}
              <span className="text-orange-400 font-roboto hover:font-bold dark:text-teal-500  mt-2">
                MERN stack
              </span>
            </p>
          </p>
        </p>
        <div
          className=" flex justify-center gap-10 py-3"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="flex flex-col justify-center items-center gap-8 sm:flex-row">
            <a
              href="mailto:fanti.marco8@gmail.com"
              target="_blank"
              className="hover:-translate-y-2 transform transition"
            >
              <AiFillMail className="text-white text-[3rem] sm:text-[4rem]  hover:text-orange-400 dark:hover:text-teal-500 " />
            </a>
            <a
              href="https://github.com/nanofanti"
              target="_blank"
              className="hover:-translate-y-2 transform transition"
            >
              <AiFillGithub className="text-white text-[3rem] sm:text-[4rem]  hover:text-orange-400 dark:hover:text-teal-500 " />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/marcofanti/"
              target="_blank"
              className="hover:-translate-y-2 transform transition"
            >
              <AiFillLinkedin className="text-white text-[3rem] sm:text-[4rem]  hover:text-orange-400 dark:hover:text-teal-500 " />
            </a>
            <a
              href="https://www.instagram.com/nanofanti?igsh=MTcxNnN5Y24zd2l6Mg=="
              target="_blank"
              className="hover:-translate-y-2 transform transition"
            >
              <RiInstagramFill className="text-white text-[3rem] sm:text-[4rem]   hover:text-orange-400 dark:hover:text-teal-500 " />
            </a>
          </div>
        </div>
      </div>
      <PhotoSection />
    </div>
  );
}

export default Header;
