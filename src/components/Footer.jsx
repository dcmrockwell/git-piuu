import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-5 relative h-[120px] m-auto">
        <h3>Designed by PIUU Team</h3>

        <ul className="flex flex-row items-center justify-center gap-2 no-underline	">
          <a href="#" target="_blank">
            <li>
              <FaGlobe size={25} />
            </li>
          </a>
          <a href="#" target="_blank">
            <li>
              <FaTelegram size={25} />
            </li>
          </a>
          <a href="#" target="_blank">
            <li>
              <AiFillTwitterCircle size={30} />
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Footer;
