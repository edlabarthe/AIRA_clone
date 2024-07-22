import type { NextPage } from "next";

export type Background1Type = {
  className?: string;
};

const Background1: NextPage<Background1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3771.2px] left-[0px] bg-white w-full overflow-hidden flex flex-col items-start justify-start py-24 px-12 box-border gap-[47.7px] shrink-0 max-w-full text-left text-72xl-3 text-gray-100 font-inter mq900:gap-[24px] mq1300:pl-6 mq1300:pr-6 mq1300:box-border ${className}`}
    >
      <div className="w-[1168px] relative leading-[97px] flex items-center max-w-full mq900:text-27xl mq900:leading-[58px] mq450:text-8xl mq450:leading-[39px]">
        Meet one of our customers
      </div>
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-10xl mq1300:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[59px] box-border min-h-[174px] max-w-full">
          <blockquote className="m-0 relative leading-[38.39px] mq450:text-4xl mq450:leading-[31px]">
            <p className="m-0">
              "I chose Aira because everything was included under their all-
            </p>
            <p className="m-0">
              inclusive plan – the free home energy assessment, the heat
            </p>
            <p className="m-0">
              pump installation, the aftercare. Everything!"
            </p>
          </blockquote>
        </div>
        <div className="rounded-3xl bg-sandybrown flex flex-row items-end justify-start pt-[23.6px] pb-[24.4px] pr-[31px] pl-9 gap-[15.8px] text-2xl-9">
          <div className="relative leading-[28.8px] mq450:text-lg mq450:leading-[23px]">
            Read Lina's story
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
            <img
              className="w-[14.3px] h-6 relative"
              alt=""
              src="/svg--chevron-icon-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background1;
