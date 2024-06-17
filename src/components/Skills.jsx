import WorksAndProjects from "./WorksAndProjects";

function Skills() {
  return (
    <div className="h-[170rem]">
      <div className="bg-fixed relative bg-parallax2 bg-cover h-[150rem]">
        <div className="mt-[10rem] mb-[2rem] pt-[8rem]">
          <h3
            className="text-[4.5rem] font-roboto text-orange-400 text-center py-5 dark:text-teal-500 font-medium"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Skills
          </h3>
          <p
            className="text-[1.5rem] font-roboto text-white text-center p-5 leading-8"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Recently graduated from{" "}
            <p className="mt-2">
              <a
                href="/WBScertificate.pdf"
                target="blank"
                className="link-effect text-[1rem]"
                data-replace="Check out the certificate!"
              >
                <span className="text-orange-400 dark:text-teal-500">
                  WBS CODING SCHOOL
                </span>
              </a>
              <p className="text-[1.5rem] font-roboto text-white text-center leading-8">
                of Berlin.
              </p>{" "}
            </p>
          </p>

          <p
            className="text-[1.5rem] font-roboto text-white text-center p-5 leading-8"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Quick learner with a passion for staying current{" "}
            <p className="mt-2">
              <span className="text-orange-400 hover:font-bold dark:text-teal-500">
                {" "}
                emerging technologies{" "}
              </span>
              and best practices.
            </p>
            with
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="m-3 w-screen flex justify-center flex-wrap pb-8 gap-10 ">
            <div
              data-aos="flip-left"
              data-aos-delay="1200"
              className="text-center w-[15rem] h-[28rem] bg-gradient-to-b from-orange-400  dark:bg-gradient-to-b dark:from-teal-500 shadow-2xl p-8 rounded-xl my-10"
            >
              <div className=" flex justify-center hover:-translate-y-2 transform transition">
                <img src="/design.png" width={80} height={80} alt="" />
              </div>

              <h3 className="text-[2.5rem]  font-roboto font-medium pt-8 pb-2 mb-4 text-orange-400 dark:text-teal-500">
                Front-End
              </h3>

              <p className="text-[1.5rem] py-1 font-roboto text-white">JS</p>
              <p className="text-[1.5rem] py-1 font-roboto text-white">React</p>
              <p className="text-[1.5rem] py-1 font-roboto text-white">
                Tailwind CSS
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="1000"
              className="text-center w-[15rem] h-[28rem] bg-gradient-to-b from-orange-400  dark:bg-gradient-to-b dark:from-teal-500 shadow-2xl p-8 rounded-xl my-10"
            >
              <div className="w-full flex justify-center hover:-translate-y-2 transform transition ">
                <img src="/consulting.png" width={80} height={80} alt="" />
              </div>

              <h3 className="text-[2.5rem]  font-roboto font-medium pt-8 pb-2 mb-4 text-orange-400 dark:text-teal-500">
                Web Design
              </h3>
              <p className="text-[1.5rem] font-roboto py-1 text-white">Figma</p>
              <p className="text-[1.5rem] font-roboto py-1 text-white">
                WebFlow
              </p>
              <p className=" text-[1.5rem] font-roboto py-1 text-white">
                Photoshop
              </p>
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1200"
              className="text-center w-[15rem] h-[28rem] bg-gradient-to-b from-orange-400  dark:bg-gradient-to-b dark:from-teal-500 shadow-2xl p-8 rounded-xl my-10"
            >
              <div className="w-full flex justify-center hover:-translate-y-2 transform transition ">
                <img src="/code.png" width={80} height={80} alt="" />
              </div>

              <h3 className="text-[2.5rem] font-roboto font-medium pt-8 pb-2 mb-4 text-orange-400 dark:text-teal-500">
                Back-End
              </h3>

              <p className="text-[1.5rem] font-roboto py-1 text-white">Node</p>
              <p className="text-[1.5rem] font-roboto py-1 text-white">
                Express
              </p>
              <p className="text-[1.5rem] font-roboto py-1 text-white">
                Mongoose
              </p>
              <p className=" text-[1.5rem] font-roboto py-1 text-white">
                MongoDB
              </p>
            </div>
          </div>
        </div>

        <WorksAndProjects />
      </div>
    </div>
  );
}

export default Skills;
