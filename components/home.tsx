import type { NextPage } from "next";
import Option1 from "./option1";

export type HomeType = {
  className?: string;
};

const Home: NextPage<HomeType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-19xl-4 text-gray-100 font-inter mq900:gap-[24px] ${className}`}
    >
      <div className="relative leading-[46.91px] inline-block shrink-0 max-w-full mq900:text-12xl mq900:leading-[38px] mq450:text-4xl mq450:leading-[28px]">
        What type of home do you live in?
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px] shrink-0 max-w-full text-2xl-4">
        <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start pt-[143px] px-[18px] pb-[23px] gap-[91.1px] min-w-[315px] max-w-full border-[1px] border-solid border-gray-100 mq450:gap-[46px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
            <img className="h-16 w-16 relative" alt="" src="/svg-5.svg" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[29px] inline-block min-w-[108px] mq450:text-mid mq450:leading-[23px]">
              1 Bedroom
            </div>
            <div className="flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
              <img className="w-4 h-4 relative" alt="" src="/svg-6.svg" />
            </div>
          </div>
        </div>
        <Option1 sVG="/svg-7.svg" bedrooms="2 Bedrooms" sVG1="/svg-8.svg" />
        <Option1 sVG="/svg-9.svg" bedrooms="3 Bedrooms" sVG1="/svg-6.svg" />
        <div className="flex-1 rounded-lg box-border flex flex-col items-end justify-start pt-[142px] px-[18px] pb-6 gap-[91.1px] min-w-[315px] max-w-full text-2xl-8 border-[1px] border-solid border-gray-100 mq450:gap-[46px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img
              className="h-[65px] w-[65px] relative"
              alt=""
              src="/svg-11.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[28.8px] inline-block min-w-[125.3px] mq450:text-mid mq450:leading-[23px]">
              4 Bedrooms
            </div>
            <div className="flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
              <img className="w-4 h-4 relative" alt="" src="/svg-8.svg" />
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-lg box-border flex flex-col items-end justify-start pt-[143px] px-[18px] pb-6 gap-[91.1px] min-w-[315px] max-w-full text-2xl-6 border-[1px] border-solid border-gray-100 mq450:gap-[46px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img className="h-16 w-[65px] relative" alt="" src="/svg-13.svg" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[28.8px] mq450:text-mid mq450:leading-[23px]">
              5+ Bedrooms
            </div>
            <div className="flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
              <img className="w-4 h-4 relative" alt="" src="/svg-6.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
