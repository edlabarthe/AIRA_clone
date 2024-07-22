import type { NextPage } from "next";

export type BackgroundType = {
  className?: string;
};

const Background: NextPage<BackgroundType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-24 px-12 box-border max-w-full z-[2] text-center text-base-3 text-gray-100 font-inter mq900:pl-6 mq900:pr-6 mq900:box-border ${className}`}
    >
      <div className="w-[393.3px] rounded-3xl flex flex-row flex-wrap items-end justify-start pt-[5.1px] px-3.5 pb-[6.9px] box-border gap-[8px] max-w-full">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
          <img
            className="w-4 h-4 relative"
            alt=""
            src="/svg--information-icon.svg"
          />
        </div>
        <div className="flex-1 relative [text-decoration:underline] leading-[19.81px] inline-block min-w-[220px]">
          Appointed representative of Koze Group Ltd
        </div>
      </div>
      <div className="w-[178.6px] rounded-3xl flex flex-row items-end justify-start pt-[5.1px] px-3.5 pb-[6.9px] box-border gap-[8px] text-base-2">
        <img
          className="h-4 w-4 relative"
          alt=""
          src="/svg--information-icon.svg"
        />
        <div className="flex-1 relative [text-decoration:underline] leading-[19.81px] inline-block min-w-[124.8px]">
          The finer details
        </div>
      </div>
    </div>
  );
};

export default Background;
