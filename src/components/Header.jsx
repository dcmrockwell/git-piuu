import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <>
      <div className="flex flex-wrap m-auto justify-between items-center h-[100px] px-2">
        <h1>PIUU.</h1>

        <ConnectButton />
      </div>
    </>
  );
};

export default Header;
