import Footer from "./Footer";

function WorksAndProjects() {
  return (
    <div className="bg-white dark:bg-black pt-[20rem] ">
      <div className=" pb-[10rem] mb-[5rem]" data-aos="fade-up">
        <div className="flex flex-col flex-wrap">
          <h3 className="text-[4.5rem] sm:text-[6rem] roboto text-center py-5 text-orange-400 dark:text-teal-500 font-medium">
            Works &
            <h3 className="text-[4.5rem] sm:text-[6rem] roboto text-center py-5 text-orange-400 dark:text-teal-500 font-medium">
              ...Projects
            </h3>
          </h3>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-[1.25rem] sm:text-[1.5rem] roboto text-center p-5 leading-8 dark:text-white"
        >
          Proven ability to manage projects and meet{" "}
          <span className="text-orange-400 hover:font-bold dark:text-teal-500">
            {" "}
            deadlines{" "}
          </span>{" "}
          under pressure.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-[1.25rem] sm:text-[1.5rem] roboto text-center p-5 leading-8 dark:text-white"
        >
          Explore a few of my{" "}
          <span className="text-orange-400 hover:font-bold dark:text-teal-500">
            {" "}
            past
          </span>{" "}
          and
          <span className="text-orange-400 hover:font-bold dark:text-teal-500">
            {" "}
            ongoing projects
          </span>{" "}
          that demonstrate{" "}
          <p className="mt-4">my evolving journey with the MERN stack, </p>
          <p className="mt-4">
            where I've tackled challenges, crafted innovative solutions,{" "}
            <p className="mt-4">
              and continue to{" "}
              <span className="text-orange-400 hover:font-bold dark:text-teal-500">
                expand my skill set
              </span>
              .
            </p>
          </p>
        </p>
      </div>
      <div>
        <div className="flex justify-center gap-10 flex-wrap">
          {" "}
          <div
            className=" flex flex-col items-center mt-[8rem] p-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://petfectmatch.netlify.app/"
              target="blank"
              className="custom-link"
            >
              <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-4">
                Petfect Match
              </h2>
            </a>
            <p className="text-center text-[1.25rem] sm:text-[1.5rem] roboto mb-6 dark:text-white">
              "Tinderlike" pet adoption <p>web app.</p>{" "}
              <p>Find your PetFect match now!</p>
            </p>
            <a href="https://petfectmatch.netlify.app/" target="blank">
              <img
                src="/petfectmatchscreen.png"
                alt=""
                className="rounded-lg sm:w-[40rem] sm:h-[22rem] object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
              />
            </a>
          </div>
          <div
            className=" flex flex-col items-center mt-[8rem] p-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://pokemonfightwbs.netlify.app/"
              target="blank"
              className="custom-link"
            >
              {" "}
              <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-4">
                Pokemon Fight
              </h2>
            </a>
            <p className="text-center text-[1.25rem] sm:text-[1.5rem] roboto mb-6 dark:text-white">
              Play with first generation of Pokemons!
              <p>Ready to go?</p>
              <p>Check it out!</p>
            </p>{" "}
            <a href="https://pokemonfightwbs.netlify.app/" target="blank">
              <img
                src="/pokemonfightscreen.png"
                alt=""
                className="rounded-lg sm:w-[40rem] sm:h-[22rem]  object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          {" "}
          <div
            className=" flex flex-col items-center mt-[8rem] p-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://github.com/nanofanti/react-form"
              target="blank"
              className="custom-link"
            >
              <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
                Sign up Form
              </h2>
            </a>
            <p className="text-center text-[1.25rem] sm:text-[1.5rem] roboto mb-6 dark:text-white">
              A simple React form using <p>Formik, Yup and Toastify!</p>
            </p>
            <a href="https://github.com/nanofanti/react-form" target="blank">
              <img
                src="/signup.png"
                alt=""
                className="rounded-lg sm:w-[40rem] sm:h-[22rem] object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
              />
            </a>
          </div>
          <div
            className="flex flex-col items-center mt-[8rem] p-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://pokemonfightwbs.netlify.app/"
              target="_blank"
              className="custom-link"
            >
              <h2 className="text-[3.25rem] font-roboto text-orange-400 dark:text-teal-500 text-center mb-2">
                ...Au Plant
              </h2>
            </a>
            <p className="text-center  text-[1.25rem] sm:text-[1.5rem]  font-roboto mb-6 dark:text-white">
              If you love plants, <p>you are gonna love this!</p>
            </p>

            <div className="relative group ">
              <div className="absolute inset-0 z-10 flex justify-center items-center text-6xl font-semibold rounded text-center text-orange-400 dark:text-teal-500 backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 duration-300 object-cover hover:-translate-y-0 hover:border-4 hover:border-orange-400 dark:hover:border-teal-500 transform transition-all  group-hover:z-10">
                Coming soon...
              </div>
              <a href="https://pokemonfightwbs.netlify.app/" target="_blank">
                <img
                  src="/auplantlogo.png"
                  alt=""
                  className="rounded-lg sm:w-[40rem] sm:h-[22rem] object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:hover:border-teal-500 transform transition-all z-20 group-hover:z-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorksAndProjects;
