import WorksAndProjects from "./WorksAndProjects";

function Skills() {
  return (
    <div className="h-[100rem]">
      <div className="bg-fixed relative bg-parallax2 bg-cover h-[100rem]">
        <div className="mt-[10rem] mb-[10rem] pt-[8rem]">
          <h3
            className="text-[5rem] font-roboto text-orange-400 text-center py-5 dark:text-teal-500 font-medium"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Skills
          </h3>
          <p
            className="text-[2rem] font-roboto text-white text-center p-5 leading-8"
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
            className="text-[2rem] font-roboto text-white text-center p-5 leading-8"
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
            <p className="text-[2rem] font-roboto py-1 text-white">Mongoose</p>
            <p className=" text-[2rem] font-roboto py-1 text-white">MongoDB</p>
          </div>
        </div>
        <WorksAndProjects />
      </div>
    </div>
  );
}

export default Skills;
