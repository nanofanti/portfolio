import { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

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
      <main className="bg-white pb-20 w-screen dark:bg-black">
        <section>
          <div className="h-screen relative flex flex-col item-center justify-center p-8 bg-fixed bg-parallax1 bg-cover">
            <div className="flex flex-col items-center pb-10">
              <div>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "<> </>",
                    1500, // wait 1s before replacing "Mice" with "Hamsters"
                    "Full-Stack Web Developer",
                    1500,
                    "Rock climber addicted",
                    1500,
                    "We produce food for Chinchillas",
                    1500,
                  ]}
                  wrapper="span"
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
              <div className="p-8">
                <ul className="flex items-center">
                  {!darkMode ? (
                    <li>
                      <BsFillMoonStarsFill
                        className="cursor-pointer text-2xl text-white animate__animated animate__bounce transition "
                        onClick={() => setDarkMode(!darkMode)}
                      />
                    </li>
                  ) : (
                    <li>
                      <BsFillSunFill
                        className="cursor-pointer text-2xl text-white animate__animated animate__bounce "
                        onClick={() => setDarkMode(!darkMode)}
                      />
                    </li>
                  )}
                  <li className=" ">
                    <a
                      className="text-[1rem] bg-orange-400 dark:bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                      href="/MarcoFantiResume.pdf"
                      target="_blank"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p
              className="text-orange-400 text-[5rem] text-center py-5 font-medium dark:text-teal-600 "
              data-aos="flip-up"
              data-aos-delay="500"
            >
              Marco Fanti
            </p>

            <p
              data-aos="flip-up"
              data-aos-delay="500"
              className="text-[2rem] py-10 leading-8 text-center text-white"
            >
              Lorem ipsum dolor sit amet{" "}
              <span className=" text-teal-500 hover:bg-teal-500 hover:text-white hover:text-[3rem]">
                consectetur
              </span>{" "}
              adipisicing elit.{" "}
            </p>
            <p
              data-aos="flip-up"
              data-aos-delay="600"
              className="text-[2rem] pb-14 leading-8 text-center text-white"
            >
              Quia delectus nihil{" "}
              <span className=" text-teal-500 hover:bg-teal-500 hover:text-white hover:text-[3rem]">
                inventore
              </span>{" "}
              laborum libero qui nam consequuntur illum ipsum fugit?
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
              <AiFillMail
                className="text-white "
                data-aos="fade-right"
                data-aos-delay="1500"
              />
              <a href="https://github.com/nanofanti" target="_blank">
                <AiFillGithub
                  className=" text-white"
                  data-aos="fade-up"
                  data-aos-delay="1500"
                />
              </a>
              <a href="https://www.linkedin.com/in/marcofanti/" target="_blank">
                <AiFillLinkedin
                  className=" text-white"
                  data-aos="fade-left"
                  data-aos-delay="1500"
                />
              </a>
            </div>
          </div>
          <div className="h-[40rem] mt-24">
            <div
              className="relative mx-auto rounded-full mt-20 overflow-hidden md:h-96 md:w-96 border-8 border-teal-600"
              data-aos="fade-up"
            >
              <img
                src="Mypic.png
                "
                className=" object-cover h-80 transition-all duration-300 hover:scale-110 md:h-96 md:w-96 "
                alt=""
              />
            </div>
            <h2
              className="text-center mt-10 text-[2rem] dark:text-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              labore?
            </h2>
          </div>
        </section>
        <section className="bg-fixed bg-parallax2 bg-cover">
          <div className="mt-12">
            <h3 className="text-[5rem] text-center py-5 text-teal-600 font-medium">
              Skills
            </h3>
            <p className="text-[2rem] text-white text-center p-4 leading-8">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className="m-3 flex justify-center lg:flex gap-10">
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="text-center shadow-2xl p-12 rounded-xl my-10 bg-gradient-to-b from-teal-500"
            >
              <div className="w-full flex justify-center ">
                <img src="/design.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-[3.5rem] font-medium pt-8 pb-2 mb-4 text-teal-500">
                Front-End
              </h3>

              <p className="text-[2rem] py-1 text-white">JS</p>
              <p className="text-[2rem] py-1 text-white">React</p>
              <p className="text-[2rem] py-1 text-white">Tailwind CSS</p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="300"
              className="text-center shadow-2xl p-12 rounded-xl my-10 bg-gradient-to-b from-teal-500"
            >
              <div className="w-full flex justify-center">
                <img src="/consulting.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-[3.5rem] font-medium pt-8 pb-2 mb-4 text-teal-500">
                Web Design
              </h3>
              <p className="text-[2rem] py-1 text-white">Figma</p>
              <p className="text-[2rem] py-1 text-white">WebFlow</p>
              <p className=" text-[2rem] py-1 text-white">Photoshop</p>
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="150"
              className="text-center shadow-2xl p-12 rounded-xl my-10 bg-gradient-to-b from-teal-500"
            >
              <div className="w-full flex justify-center">
                <img src="/code.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-[3.5rem] font-medium pt-8 pb-2 mb-4 text-teal-500">
                Back-End
              </h3>

              <p className="text-[2rem] py-1 text-white">Node</p>
              <p className="text-[2rem] py-1 text-white">Express</p>
              <p className="text-[2rem] py-1 text-white">Mongoose</p>
              <p className=" text-[2rem] py-1 text-white">MongoDB</p>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className="my-[20rem]">
            <h3 className="text-[5rem] text-center py-5 text-teal-600 font-medium">
              Works & ...Projects
            </h3>
            <p className="text-[2rem] text-center py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div
              className="basis-1/3 flex-1 p-5"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <h2 className=" text-[3.5rem] text-teal-500 text-center mb-2">
                Petfect Match
              </h2>
              <p className="text-center text-xl mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                architecto.
              </p>
              <img
                src="/petfectmatch.png"
                alt=""
                className="rounded-lg object-cover"
              />
            </div>
            <div
              className="basis-1/3 flex-1 p-5"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <h2 className="text-[3.5rem] text-teal-500 text-center mb-2">
                Pokemon Fight
              </h2>
              <p className="text-center text-xl mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                architecto.
              </p>
              <img
                src="/SignUp.png"
                alt=""
                className="rounded-lg object-cover"
              />
            </div>
            <div
              className="basis-1/3 flex-1 mt-18 p-5"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <h2 className="text-[3.5rem] text-teal-500 text-center mt-8">
                Sign Up
              </h2>
              <p className="text-center text-xl mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                architecto.
              </p>
              <img
                src="/SignUp.png"
                alt=""
                className="rounded-lg object-cover"
              />
            </div>
            <div
              className="basis-1/3 flex-1 mt-18 p-5"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <h2 className="text-[3.5rem] text-teal-500 text-center mt-8">
                ...Au Plant
              </h2>
              <p className="text-center text-xl mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                architecto.
              </p>
              <img
                src="/SignUp.png"
                alt=""
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
