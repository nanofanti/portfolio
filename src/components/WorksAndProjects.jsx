import Footer from "./Footer";

function WorksAndProjects() {
  return (
    <div className="dark:bg-black pt-[20rem] h-[170rem]">
      <div className=" pb-[10rem]" data-aos="fade-up">
        <h3 className="text-[5rem] roboto text-center py-5 text-orange-400 dark:text-teal-500 font-medium">
          Works & ...Projects
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-[2rem] roboto text-center p-5 leading-8 dark:text-white"
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
          className="text-[2rem] roboto text-center p-5 leading-8 dark:text-white"
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
      <div className="p">
        <div className="flex justify-center gap-10">
          {" "}
          <div
            className=" flex flex-col items-center"
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <a href="https://petfectmatch.netlify.app/" target="blank">
              <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
                Petfect Match
              </h2>
            </a>
            <p className="text-center text-[1.5rem] roboto mb-6 dark:text-white">
              "Tinderlike" pet adoption web app.{" "}
              <p>Find your PetFect match now!</p>
            </p>

            <iframe
              // width={850}
              // height={500}
              src="https://petfectmatch.netlify.app/"
              className="rounded-lg w-[40rem] h-[31rem] bg-white object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
            ></iframe>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <a href="https://pokemonfightwbs.netlify.app/" target="blank">
              {" "}
              <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
                Pokemon Fight
              </h2>
            </a>

            <p className="text-center text-[1.5rem] roboto mb-6 dark:text-white">
              Play with first generation Pokemons and{" "}
              <p>be the number one on the leaderboard!</p>
            </p>
            <iframe
              // width={850}
              // height={500}
              src="https://pokemonfightwbs.netlify.app/"
              className="rounded-lg w-[40rem] h-[31rem] bg-white object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div
            className="mt-[8rem] p-5"
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <a href="https://github.com/nanofanti/react-form" target="blank">
              <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
                Sign Up
              </h2>
            </a>
            <p className="text-center text-[1.5rem] roboto mb-6 dark:text-white">
              A simple React form using Formik, Yup and Toastify
            </p>

            <img
              src="/signup.png"
              alt=""
              className="rounded-lg w-[40rem] h-[31rem] object-cover hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:border-teal-500 transform transition-all"
            />
          </div>
          <div
            className="mt-[8rem] p-5 "
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
              ...Au Plant
            </h2>
            <p className="text-center text-[1.5rem] roboto mb-6 dark:text-white">
              If you love plants, you are gonna love this!
            </p>
            <div className="relative group w-[40rem] h-[31rem]">
              <img
                src="/auplantlogo.png"
                alt=""
                className="w-[40rem] h-[31rem] rounded-lg object-cover group-hover:blur-sm duration-300 group-hover:-translate-y-2"
              />
              <div className="absolute inset-0 z-10 flex justify-center items-center text-6xl font-semibold opacity-0 group-hover:opacity-100 duration-300 rounded text-orange-400 hover:-translate-y-2 hover:border-4 hover:border-orange-400 dark:text-teal-500 dark:border-teal-500">
                Coming soon...
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorksAndProjects;
