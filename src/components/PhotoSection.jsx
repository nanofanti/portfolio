import { FaCheck } from "react-icons/fa";

function PhotoSection() {
  return (
    <div>
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
          <span className="text-orange-400 dark:text-teal-500">inventore</span>{" "}
          adipisicing elit. Libero, labore?
        </h2>
      </div>
    </div>
  );
}

export default PhotoSection;
