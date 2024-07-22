import type { NextPage } from "next";

export type Option1Type = {
  className?: string;
  sVG?: string;
  bedrooms?: string;
  sVG1?: string;
};

const Option1: NextPage<Option1Type> = ({
  className = "",
  sVG,
  bedrooms,
  sVG1,
}) => {
  return (
    <div
      className={`flex-1 rounded-lg box-border flex flex-col items-start justify-start pt-[143px] px-[18px] pb-6 gap-[91.1px] min-w-[315px] max-w-full text-left text-2xl-9 text-gray-100 font-inter border-[1px] border-solid border-gray-100 mq450:gap-[46px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <img className="h-16 w-16 relative" alt="" src={sVG} />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="relative leading-[28.8px] inline-block min-w-[125.2px] mq450:text-lg mq450:leading-[23px]">
          {bedrooms}
        </div>
        <div className="flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
          <img className="w-4 h-4 relative" alt="" src={sVG1} />
        </div>
      </div>
    </div>
  );
};

export default Option1;
