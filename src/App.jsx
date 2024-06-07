import { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

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
          <nav className="pt-10 mb-12 flex justify-evenly">
            <h1 className="text-2xl font-burtons animate__animated animate__bounce dark:text-white">
              Full-Stack Web Developer
            </h1>
            <ul className="flex items-center">
              {!darkMode ? (
                <li>
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-2xl animate__animated animate__bounce transition "
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
              <li className="animate__animated animate__bounce ">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8  dark:text-black"
                  href="/MarcoFantiResume.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative flex flex-col item-center justify-center p-10 bg-fixed bg-parallax bg-cover">
            <p className="text-[5rem] text-center py-5 text-teal-600 font-medium">
              Marco Fanti
            </p>

            <p className="text-2xl py-5 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              delectus nihil inventore laborum libero qui nam consequuntur illum
              ipsum fugit?
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
              <AiFillMail
                className=" transition duration-700 hover:scale-150
            dark:text-white"
              />
              <a href="https://github.com/nanofanti" target="_blank">
                <AiFillGithub className="transition duration-700 hover:scale-150 dark:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/marcofanti/" target="_blank">
                <AiFillLinkedin className="transition duration-700 hover:scale-150 dark:text-white" />
              </a>
            </div>
            <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:border-8 border-teal-600">
              <img
                src="Mypic.png
              "
                className=" object-cover h-80 transition-all duration-300 hover:scale-110 md:h-96 md:w-96 "
                alt=""
              />
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className="mt-12">
            <h3 className="text-5xl py-1 text-center mt-8 dark:text-teal-500">
              Skills
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="m-3 flex  justify-center lg:flex gap-10">
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="text-center shadow-2xl p-12 rounded-xl my-10 dark:bg-gradient-to-b from-teal-500"
            >
              <div className="w-full flex justify-center ">
                <img src="/design.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-4xl font-medium pt-8 pb-2 mb-4 dark:text-teal-500">
                Front-End
              </h3>

              <p className="text-2xl text-gray-800 py-1 dark:text-white">JS</p>
              <p className="text-2xl text-gray-800 py-1 dark:text-white">
                React
              </p>
              <p className=" text-2xl text-gray-800 py-1 dark:text-white">
                Tailwind CSS
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="150"
              className="text-center shadow-2xl p-12 rounded-xl my-10 dark:bg-gradient-to-b from-teal-500"
            >
              <div className="w-full flex justify-center">
                <img src="/code.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-4xl font-medium pt-8 pb-2 mb-4 dark:text-teal-500">
                Back-End
              </h3>

              <p className="text-2xl text-gray-800 py-1 dark:text-white">
                Node
              </p>
              <p className="text-2xl text-gray-800 py-1 dark:text-white">
                Express
              </p>
              <p className="text-2xl text-gray-800 py-1 dark:text-white">
                Mongoose
              </p>
              <p className=" text-2xl text-gray-800 py-1 dark:text-white">
                MongoDB
              </p>
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="300"
              className="text-center shadow-2xl p-12 rounded-xl my-10 dark:bg-gradient-to-b from-teal-500"
            >
              <div className="w-full flex justify-center">
                <img src="/consulting.png" width={100} height={100} alt="" />
              </div>

              <h3 className="text-4xl font-medium pt-8 pb-2 mb-4 dark:text-teal-500">
                Web Design
              </h3>
              <p className="text-2xl text-gray-800 py-1 dark:text-white">
                Figma
              </p>
              <p className="text-2xl text-gray-800 py-1 dark:text-white">
                WebFlow
              </p>
              <p className=" text-2xl text-gray-800 py-1 dark:text-white">
                Photoshop
              </p>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div>
            <h3 className="text-5xl py-1 text-center dark:text-teal-500">
              Works & ...Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <h2 className="dark:text-teal-500 text-center text-2xl mb-2">
                Petfect Match
              </h2>
              <p className="text-center mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                architecto.
              </p>
              <img
                src="/petfectmatch.png"
                alt=""
                className="rounded-lg object-cover  w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <h2 className="dark:text-teal-500 text-center text-2xl mb-2">
                Pokemon Fight
              </h2>
              <p className="text-center mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                architecto.
              </p>
              <img
                src="/SignUp.png"
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1 mt-20">
              <h2 className="dark:text-teal-500 text-center text-2xl mb-2">
                Sign Up
              </h2>
              <p className="text-center mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                architecto.
              </p>
              <img
                src="/SignUp.png"
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1 mt-20">
              <h2 className="dark:text-teal-500 text-center text-2xl mb-2">
                ...Au Plant
              </h2>
              <p className="text-center mb-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                architecto.
              </p>
              <img
                src="/SignUp.png"
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
