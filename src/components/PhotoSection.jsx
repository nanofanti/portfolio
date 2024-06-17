import { FaCheck } from "react-icons/fa";
import Skills from "./Skills";

function PhotoSection() {
  return (
    <div>
      <div className="h-[100rem] sm:h-[50rem] flex flex-col items-center justify-center my-24">
        <div
          className="  mx-auto border-orange-400 rounded-full my-20 overflow-hidden h-96 w-96 border-8 dark:border-teal-600"
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
          className="text-center font-roboto mt-10 text-[2rem] p-5 dark:text-white"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          "What matters most is how well you walk through the{" "}
          <span className="text-orange-400 hover:font-bold dark:text-teal-500">
            fire."
          </span>{" "}
          <h2 className="text-[1.5rem] mt-1">(Charles Bukowski)</h2>
        </h2>
      </div>
      <Skills />
    </div>
  );
}

export default PhotoSection;
