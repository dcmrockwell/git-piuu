import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { FaDragon } from "react-icons/fa";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import logo from "../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="h-[100px] w-full items-center border-b-[1px] border-[#cbd542] relative px-3">
      <div className="flex flex-row p-6 justify-between items-center m-auto max-w-[1440px]">
        <div className="flex flex-row gap-10">
          <img src={logo} className="w-[50px] h-[50px]" />
        </div>

        <ul className="hidden lg:flex flex-row gap-8 text-lg font-bold cursor-pointer decoration-yellow-[#cbd542]">
          <li>Dashboard</li>
          <li>Swap</li>
          <li>Lottery</li>
          <li>Staking</li>
        </ul>

        <div className="hidden lg:flex flex-row items-center gap-5">
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>

        <div className="lg:hidden" onClick={handleClick}>
          {!nav ? (
            <HiOutlineBars3 size="30px" />
          ) : (
            <HiOutlineXMark size="30px" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "h-[100vh] w-full m-auto space-y-10 mt-1  px-[80px] absolute  text-center lg:hidden pt-[40px]"
        }
      >
        <li className="text-[30px] flex justify-center   items-center">
          Dashboard
        </li>
        <li className="text-[30px] flex justify-center   items-center">Swap</li>
        <li className="text-[30px]  ">Lottery</li>
        <li className="text-[30px]">Staking</li>
        <div className="xl:hidden justify-center flex">
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>
      </ul>
    </div>
  );
};

export default Header;
