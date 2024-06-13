import Footer from "./Footer";

function WorksAndProjects() {
  return (
    <div className="dark:bg-black pt-[20rem] h-[125rem] lg:h-[150rem]">
      <div className=" pb-[10rem]" data-aos="fade-up">
        <h3 className="text-[5rem] roboto text-center py-5 text-orange-400 dark:text-teal-500 font-medium">
          Works & ...Projects
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-[2rem] roboto text-center p-5 leading-8 dark:text-white"
        >
          Since the beginning of my journey as a freelance designer and
          developer, I have done remote work for
          <span className="text-orange-400 dark:text-teal-500"> agencies </span>
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-[2rem] roboto text-center p-5 leading-8 dark:text-white"
        >
          consulted for{" "}
          <span className="text-orange-400 dark:text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
      </div>
      <div className="flex gap-10 p-10 m-10 flex-wrap">
        <div
          className="basis-1/3 flex-1"
          data-aos="flip-right"
          data-aos-delay="300"
        >
          <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
            Petfect Match
          </h2>
          <p className="text-center text-[1.5rem] roboto mb-6 dark:text-white">
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
          <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
            Pokemon Fight
          </h2>
          <p className="text-center text-[1.5rem] roboto mb-6 dark:text-white">
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
          <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
            Sign Up
          </h2>
          <p className="text-center text-[1.5rem] roboto mb-6 dark:text-white">
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
          <h2 className=" text-[3.25rem] roboto text-orange-400  dark:text-teal-500 text-center mb-2">
            ...Au Plant
          </h2>
          <p className="text-center text-[1.5rem] roboto mb-6 dark:text-white">
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
      <Footer />
    </div>
  );
}

export default WorksAndProjects;
