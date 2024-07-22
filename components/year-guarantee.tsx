import type { NextPage } from "next";

export type YearGuaranteeType = {
  className?: string;
};

const YearGuarantee: NextPage<YearGuaranteeType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-19xl-4 text-gray-100 font-inter mq1650:flex-wrap ${className}`}
    >
      <div className="w-[522.6px] flex flex-row items-start justify-start gap-[93px] max-w-full mq900:flex-wrap mq900:gap-[46px] mq450:gap-[23px]">
        <img
          className="h-24 w-24 relative rounded-29xl overflow-hidden shrink-0 z-[4]"
          alt=""
          src="/backgroundshadow-5.svg"
        />
        <div className="relative leading-[46.91px] inline-block max-w-full mq900:text-12xl mq900:leading-[38px] mq450:text-4xl mq450:leading-[28px]">
          15-year guarantee
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.4px] max-w-full text-2xl-6">
        <div className="relative leading-[28.8px] shrink-0 mq450:text-mid mq450:leading-[23px]">
          <p className="m-0">
            We don’t leave you out in the cold. In fact, we guarantee that
          </p>
          <p className="m-0">
            your Aira Heat Pump provides a cosy temperature for 15 years.
          </p>
          <p className="m-0">
            Otherwise, we’ll come out to fix it at no extra cost. 
          </p>
        </div>
        <div className="rounded-3xl flex flex-row items-end justify-start pt-[11.6px] px-0 pb-[12.2px] box-border gap-[15.6px] shrink-0 max-w-full text-2xl-8">
          <div className="relative [text-decoration:underline] leading-[29px] shrink-0 mq450:text-mid mq450:leading-[23px]">
            The Aira Comfort Guarantee
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.2px]">
            <img
              className="w-[14.3px] h-6 relative shrink-0"
              alt=""
              src="/svg--chevron-icon-3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearGuarantee;
