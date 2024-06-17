import { IoMdPin } from "react-icons/io";
import { RiSmartphoneFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="my-[10rem]">
      <div className="h-[20rem] relative flex flex-col justify-evenly items-center bg-fixed bg-parallax2 bg-cover">
        <div className="flex flex-col items-center">
          <p className="text-[1.5rem] flex justify-center items-center gap-5 font-roboto leading-8 text-center text-white">
            <IoMdPin className="text-[3rem] hover:text-orange-400 dark:hover:text-teal-500 hover:-translate-y-2 transform transition" />
            Heidelberg, Germany
          </p>
          <p className="text-[1.5rem] flex justify-center items-center gap-5 font-roboto leading-8 text-center text-white mt-4 ">
            <RiSmartphoneFill className="text-[3rem] hover:text-orange-400 dark:hover:text-teal-500 hover:-translate-y-2 transform transition" />
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
    </div>
  );
}

export default Footer;
