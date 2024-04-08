import React from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { GiDragonHead } from "react-icons/gi";
import { SiDungeonsanddragons } from "react-icons/si";
import { PiHandCoins } from "react-icons/pi";

const Dashboard = () => {
  return (
    <>
      <div>
        {/* MOBILE-MOBILE */}

        <div className="flex flex-col gap-5 justify-center items-center py-11 lg:hidden">
          <div className="h-[200px] py-5 flex flex-col justify-center items-center border-[2px] border-[#cbd542] w-[80%] rounded-lg max-w-[420px]">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row items-center gap-1">
                <GiDragonHead color="#cbd542" opacity={0.8} />
                <h1 className="opacity-[0.4]">Total Holdings</h1>
                <GiDragonHead color="#cbd542" opacity={0.8} />
              </div>
              <h2>100,000,000</h2>
            </div>

            <div className="flex flex-row items-center gap-1 mt-2">
              <FaCircleDollarToSlot color="#cbd542" opacity={0.8} />
              <h1 className="opacity-[0.4]">Value in USD</h1>
              <FaCircleDollarToSlot color="#cbd542" opacity={0.8} />
            </div>
            <h2>100$</h2>
            <div className="flex flex-row items-center justify-center gap-1 mt-2">
              <PiHandCoins color="#cbd542" opacity={0.8} />
              <h1 className="opacity-[0.4]">Rewards</h1>
              <PiHandCoins color="#cbd542" opacity={0.8} />
            </div>
            <h2>$100.00</h2>
          </div>

          <div
            className="h-[100px] w-[80%] border-[2px] border-[#cbd542] rounded-lg max-w-[420px]
            flex flex-col items-center justify-center gap-2"
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
              <h1 className="opacity-[0.4]">Marketcap</h1>
              <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
            </div>
            <h2>$100,000,000</h2>
          </div>

          <div
            className="h-[100px] w-[80%] border-[2px] border-[#cbd542] rounded-lg max-w-[420px]
            flex flex-col items-center justify-center gap-2"
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
              <h1 className="opacity-[0.4]">Rewards Distributed</h1>
              <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
            </div>
            <h2>$100,000,000</h2>
          </div>

          <div
            className="h-[100px] w-[80%] border-[2px] border-[#cbd542] rounded-lg max-w-[420px]
            flex flex-col items-center justify-center gap-2"
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
              <h1 className="opacity-[0.4]">Burnt Tokens</h1>
              <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
            </div>
            <h2>600,000,000</h2>
          </div>

          <div
            className="h-[100px] w-[80%] border-[2px] border-[#cbd542] rounded-lg max-w-[420px]
            flex flex-col items-center justify-center gap-2"
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
              <h1 className="opacity-[0.4]">Liquidity</h1>
              <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
            </div>
            <h2>$300,000,000</h2>
          </div>
        </div>

        {/* BROWSER-BROWSER */}

        <div className="hidden lg:flex flex-col justify-center items-center py-[80px]">
          {/* COL-1-WALLET HOLDINGS MC AND REWARDS DISTRI */}
          <div className="flex flex-row gap-5">
            {/* WALLET-HOLDINGS */}
            <div className="h-[220px] py-5 flex flex-col justify-center items-center border-[2px] border-[#cbd542] rounded-lg w-[420px]">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center gap-1">
                  <GiDragonHead color="#cbd542" opacity={0.8} />
                  <h1 className="opacity-[0.4]">Total Holdings</h1>
                  <GiDragonHead color="#cbd542" opacity={0.8} />
                </div>
                <h2>100,000,000</h2>
              </div>

              <div className="flex flex-row items-center gap-1 mt-2">
                <FaCircleDollarToSlot color="#cbd542" opacity={0.8} />
                <h1 className="opacity-[0.4]">Value in USD</h1>
                <FaCircleDollarToSlot color="#cbd542" opacity={0.8} />
              </div>
              <h2>100$</h2>
              <div className="flex flex-row items-center justify-center gap-1 mt-2">
                <PiHandCoins color="#cbd542" opacity={0.8} />
                <h1 className="opacity-[0.4]">Rewards</h1>
                <PiHandCoins color="#cbd542" opacity={0.8} />
              </div>
              <h2>$100.00</h2>
            </div>

            {/* WALLET-HOLDINGS */}

            {/* MARKETCAP-MARKETCAP */}
            <div className="flex flex-col gap-2 ">
              <div
                className="h-[105px]  border-[2px] border-[#cbd542] rounded-lg w-[420px]
            flex flex-col items-center justify-center gap-2"
              >
                <div className="flex flex-row items-center justify-center gap-1">
                  <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
                  <h1 className="opacity-[0.4]">Marketcap</h1>
                  <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
                </div>
                <h2>$100,000,000</h2>
              </div>

              <div
                className="h-[105px] w-[420px] border-[2px] border-[#cbd542] rounded-lg 
            flex flex-col items-center justify-center gap-2"
              >
                <div className="flex flex-row items-center justify-center gap-1">
                  <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
                  <h1 className="opacity-[0.4]">Rewards Distributed</h1>
                  <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
                </div>
                <h2>$100,000,000</h2>
              </div>
            </div>
          </div>

          {/* COL-1-WALLET HOLDINGS MC AND REWARDS DISTRI */}

          <div className="flex flex-row justify-between items-center py-[20px] gap-5">
            <div
              className="h-[105px] border-[2px] border-[#cbd542] rounded-lg w-[420px]
            flex flex-col items-center justify-center gap-2"
            >
              <div className="flex flex-row items-center justify-center gap-1">
                <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
                <h1 className="opacity-[0.4]">Burnt Tokens</h1>
                <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
              </div>
              <h2>600,000,000</h2>
            </div>

            <div
              className="h-[100px] border-[2px] border-[#cbd542] rounded-lg w-[420px]
            flex flex-col items-center justify-center gap-2"
            >
              <div className="flex flex-row items-center justify-center gap-1">
                <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
                <h1 className="opacity-[0.4]">Liquidity</h1>
                <SiDungeonsanddragons color="#cbd542" opacity={0.8} />
              </div>
              <h2>$300,000,000</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
