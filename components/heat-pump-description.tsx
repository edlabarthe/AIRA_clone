import type { NextPage } from "next";

export type HeatPumpDescriptionType = {
  className?: string;
};

const HeatPumpDescription: NextPage<HeatPumpDescriptionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[64.3px] max-w-full text-left text-50xl-1 text-gray-100 font-inter mq900:gap-[32px] mq450:gap-[16px] ${className}`}
    >
      <div className="relative leading-[83.35px] inline-block max-w-full mq900:text-36xl mq900:leading-[67px] mq450:text-22xl mq450:leading-[50px]">
        <p className="m-0">The Aira Heat</p>
        <p className="m-0">Pump</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-[28.8px] max-w-full text-2xl-6">
        <div className="relative leading-[28.8px] mq450:text-mid mq450:leading-[23px]">
          <p className="m-0">
            Gas boilers were pretty revolutionary... in the 1950s. But a lot’s
          </p>
          <p className="m-0">
            changed in 70 years. It’s time for a 21st century heating
          </p>
          <p className="m-0">solution.</p>
        </div>
        <div className="relative text-2xl-9 leading-[28.8px] inline-block max-w-full mq450:text-lg mq450:leading-[23px]">
          <p className="m-0">
            Introducing the Aira Heat Pump. Intelligent, affordable and
          </p>
          <p className="m-0">
            sustainable. It’s everything your clunky gas boiler isn’t.
          </p>
        </div>
      </div>
      <div className="rounded-3xl flex flex-row items-end justify-start pt-[11.6px] px-0 pb-[12.4px] gap-[15.8px] text-2xl-9">
        <div className="relative [text-decoration:underline] leading-[28.8px] mq450:text-lg mq450:leading-[23px]">
          The Aira Heat Pump
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
          <img
            className="w-[14.3px] h-6 relative"
            alt=""
            src="/svg--chevron-icon-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeatPumpDescription;
