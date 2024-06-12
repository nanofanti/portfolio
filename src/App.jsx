import { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { RiSmartphoneFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import { FaCheck } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdPin } from "react-icons/io";
import "./App.css";

//aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={!darkMode ? "" : "dark"}>
      <main className="bg-white w-screen dark:bg-black">
        <section>
          <div className="h-screen relative flex flex-col item-center justify-center bg-fixed bg-parallax1 bg-cover">
            <div
              className="pb-16 bg-transparent z-40"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <ul className="flex w-screen justify-end pr-[6rem] pt-4 gap-4">
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
                data-aos-delay="200"
                data-aos="fade-up"
                className="font-roboto"
              >
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "<> </>",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Full-Stack Web Developer",
                    2000,
                    "Rock climber addicted",
                    2000,
                    "We produce food for Chinchillas",
                    2000,
                  ]}
                  wrapper="p"
                  speed={1}
                  preRenderFirstString={false}
                  deletionSpeed={5}
                  style={{
                    fontSize: "2em",
                    display: "inline-block",
                    color: "white",
                  }}
                  repeat={Infinity}
                />
              </div>
            </div>

            <p
              className="text-orange-400 text-[5rem] text-center py-5 font-medium dark:text-teal-600 "
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Marco Fanti
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="1200"
              className="text-[2rem] font-roboto py-10 leading-8 text-center text-white"
            >
              Lorem ipsum dolor sit amet{" "}
              <span className="text-orange-400 font-roboto dark:text-teal-500">
                consectetur
              </span>{" "}
              adipisicing elit.{" "}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="1400"
              className="text-[2rem] font-roboto pb-14 leading-8 text-center text-white"
            >
              Quia delectus nihil{" "}
              <span className="text-orange-400 font-roboto dark:text-teal-500">
                inventore
              </span>{" "}
              laborum libero qui nam consequuntur illum ipsum fugit?
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
              <a
                href="mailto:fanti.marco8@gmail.com"
                target="_blank"
                className="hover:-translate-y-2 transform transition"
              >
                <AiFillMail
                  className="text-white text-[4rem]  hover:text-orange-400 dark:hover:text-teal-500 "
                  data-aos="fade-right"
                  data-aos-delay="1800"
                />
              </a>
              <a
                href="https://github.com/nanofanti"
                target="_blank"
                className="hover:-translate-y-2 transform transition"
              >
                <AiFillGithub
                  className="text-white text-[4rem] hover:text-orange-400 dark:hover:text-teal-500 "
                  data-aos="fade-up"
                  data-aos-delay="1800"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/marcofanti/"
                target="_blank"
                className="hover:-translate-y-2 transform transition"
              >
                <AiFillLinkedin
                  className="text-white text-[4rem] hover:text-orange-400 dark:hover:text-teal-500 "
                  data-aos="fade-left"
                  data-aos-delay="1800"
                />
              </a>
              <a
                href="https://www.instagram.com/nanofanti?igsh=MTcxNnN5Y24zd2l6Mg=="
                target="_blank"
                className="hover:-translate-y-2 transform transition"
              >
                <RiInstagramFill
                  className="text-white text-[4rem]  hover:text-orange-400 dark:hover:text-teal-500 "
                  data-aos="fade-right"
                  data-aos-delay="1800"
                />
              </a>
            </div>
          </div>
          <div className="h-[40rem] mt-24">
            <div
              className="  mx-auto border-orange-400 rounded-full mt-20 overflow-hidden md:h-96 md:w-96 border-8 dark:border-teal-600"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative group">
                <img
                  src="/Mypic.png"
                  alt=""
                  className=" rounded-lg object-cover group-hover:blur-sm duration-300"
                />
                <div className="absolute roboto inset-0 z-10 flex flex-col justify-center items-center text-6xl font-semibold opacity-0 group-hover:opacity-100 duration-300 text-center text-orange-400 dark:text-teal-500 ">
                  OPEN TO WORK <FaCheck />
                </div>
              </div>
            </div>
            <h2
              className="text-center font-roboto mt-10 text-[2rem] dark:text-white"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet,{" "}
              <span className="text-orange-400 dark:text-teal-500">
                inventore
              </span>{" "}
              adipisicing elit. Libero, labore?
            </h2>
          </div>
        </section>
        <section className="bg-fixed bg-parallax2 bg-cover">
          <div className="mt-12 mb-[10rem] pt-[8rem]">
            <h3
              className="text-[5rem] font-roboto text-orange-400 text-center py-5 dark:text-teal-600 font-medium"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Skills
            </h3>
            <p
              className="text-[2rem] font-roboto text-white text-center p-4 leading-8"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for agencies consulted for{" "}
              <span className="text-orange-400 dark:text-teal-500">
                startups{" "}
              </span>
            </p>
            <p
              className="text-[2rem] font-roboto text-white text-center p-4 leading-8"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              {" "}
              and collaborated with talanted people to create{" "}
              <span className="text-orange-400 dark:text-teal-500">
                {" "}
                digital
              </span>{" "}
              products for both business and consumer use.
            </p>
          </div>
          <div className="m-3 flex justify-center pb-8 gap-10">
            <div
              data-aos="flip-left"
              data-aos-delay="1200"
              className="text-center bg-gradient-to-b from-orange-400  dark:bg-gradient-to-b dark:from-teal-500 shadow-2xl p-12 rounded-xl my-10"
            >
              <div className="w-full flex justify-center hover:-translate-y-2 transform transition ">
                <img src="/design.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-[3.5rem] font-roboto font-medium pt-8 pb-2 mb-4 text-orange-400 dark:text-teal-500">
                Front-End
              </h3>

              <p className="text-[2rem] py-1 font-roboto text-white">JS</p>
              <p className="text-[2rem] py-1 font-roboto text-white">React</p>
              <p className="text-[2rem] py-1 font-roboto text-white">
                Tailwind CSS
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="1000"
              className="text-center bg-gradient-to-b from-orange-400  dark:bg-gradient-to-b dark:from-teal-500 shadow-2xl p-12 rounded-xl my-10"
            >
              <div className="w-full flex justify-center hover:-translate-y-2 transform transition ">
                <img src="/consulting.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-[3.5rem] font-roboto font-medium pt-8 pb-2 mb-4 text-orange-400 dark:text-teal-500">
                Web Design
              </h3>
              <p className="text-[2rem] font-roboto py-1 text-white">Figma</p>
              <p className="text-[2rem] font-roboto py-1 text-white">WebFlow</p>
              <p className=" text-[2rem] font-roboto py-1 text-white">
                Photoshop
              </p>
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1200"
              className="text-center bg-gradient-to-b from-orange-400  dark:bg-gradient-to-b dark:from-teal-500 shadow-2xl p-12 rounded-xl my-10"
            >
              <div className="w-full flex justify-center hover:-translate-y-2 transform transition ">
                <img src="/code.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-[3.5rem] font-roboto font-medium pt-8 pb-2 mb-4 text-orange-400 dark:text-teal-500">
                Back-End
              </h3>

              <p className="text-[2rem] font-roboto py-1 text-white">Node</p>
              <p className="text-[2rem] font-roboto py-1 text-white">Express</p>
              <p className="text-[2rem] font-roboto py-1 text-white">
                Mongoose
              </p>
              <p className=" text-[2rem] font-roboto py-1 text-white">
                MongoDB
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-[12.5rem] mt-[10rem]" data-aos="fade-up">
            <h3 className="text-[5rem] font-roboto text-center py-5 text-orange-400 dark:text-teal-500 font-medium">
              Works & ...Projects
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-[2rem] font-roboto text-center py-8 leading-8 text-gray-800 dark:text-gray-200"
            >
              Since the beginning of my journey as a freelance designer and
              developer, <br />I have done remote work for
              <span className="text-orange-400 dark:text-teal-500">
                {" "}
                agencies{" "}
              </span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-[2rem] font-roboto text-center py-2 leading-8 text-gray-800 dark:text-gray-200"
            >
              consulted for{" "}
              <span className="text-orange-400 dark:text-teal-500">
                startups{" "}
              </span>
              and collaborated with <br />
              talanted people to create digital products for both business and
              consumer use.
            </p>
          </div>
          <div className="flex gap-10 p-10 m-10 flex-wrap">
            <div
              className="basis-1/3 flex-1"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <h2 className=" text-[3.5rem] font-roboto text-orange-400  dark:text-teal-500 text-center mb-2">
                Petfect Match
              </h2>
              <p className="text-center text-[1.5rem] font-roboto mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="https://petfectmatch.netlify.app/" target="_blank">
                <img
                  src="/petfectmatch.png"
                  alt=""
                  className="rounded-lg object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
                />
              </a>
            </div>

            <div
              className="basis-1/3 flex-1"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <h2 className="text-[3.5rem] font-roboto text-orange-400 dark:text-teal-500 text-center mb-2">
                Pokemon Fight
              </h2>
              <p className="text-center text-[1.5rem] font-roboto mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="https://mamspokefight.netlify.app/" target="_blank">
                <img
                  src="/pokefight.png"
                  alt=""
                  className="rounded-lg object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
                />
              </a>
            </div>
            <div
              className="basis-1/3 flex-1 mt-[8rem] p-5"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <h2 className="text-[3.5rem] font-roboto text-orange-400 dark:text-teal-500 text-center mt-8">
                Sign Up
              </h2>
              <p className="text-center text-[1.5rem] font-roboto mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="https://github.com/nanofanti/react-form" target="blank">
                <img
                  src="/signup.png"
                  alt=""
                  className="rounded-lg object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
                />
              </a>
            </div>
            <div
              className="basis-1/3 flex-1 mt-[8rem] p-5 "
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <h2 className="text-[3.5rem] font-roboto text-orange-400 dark:text-teal-500 text-center mt-8">
                ...Au Plant
              </h2>
              <p className="text-center text-[1.5rem] font-roboto mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="relative group">
                <img
                  src="/auplantlogo.png"
                  alt=""
                  className="rounded-lg object-cover group-hover:blur-sm duration-300 group-hover:-translate-y-2"
                />
                <div className="absolute inset-0 z-10 flex justify-center items-center text-6xl font-semibold opacity-0 group-hover:opacity-100 duration-300 rounded text-orange-400 hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:text-teal-500 dark:border-teal-500">
                  Coming soon...
                </div>
              </div>
            </div>
          </div>
          <div className="h-[10rem] relative flex justify-evenly items-center bg-fixed bg-parallax2 bg-cover">
            <div className="flex flex-col items-center">
              <p className="text-[1.5rem] flex justify-center items-center gap-5 font-roboto leading-8 text-center text-white">
                <IoMdPin className="text-[1.5rem] hover:text-orange-400 dark:hover:text-teal-500 hover:-translate-y-2 transform transition" />
                Heidelberg, Germany
              </p>
              <p className="text-[1.5rem] flex justify-center items-center gap-5 font-roboto leading-8 text-center text-white mt-2 ">
                <RiSmartphoneFill className="text-[1.5rem] hover:text-orange-400 dark:hover:text-teal-500 hover:-translate-y-2 transform transition" />
                +49 0176 620 191 44
              </p>
            </div>
            <div className="hover:-translate-y-2 transform transition">
              <a
                className="text-[1.5rem] font-roboto bg-orange-400  dark:bg-teal-500 text-white px-4 py-2 rounded-md ml-8 0  "
                href="mailto:fanti.marco8@gmail.com"
                target="_blank"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
