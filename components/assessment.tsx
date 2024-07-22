import type { NextPage } from "next";

export type AssessmentType = {
  className?: string;
};

const Assessment: NextPage<AssessmentType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row flex-wrap items-start justify-start gap-[62.5px] max-w-full text-left text-19xl-4 text-gray-100 font-inter mq900:gap-[31px] mq450:gap-[16px] ${className}`}
    >
      <div className="flex flex-col items-start justify-start py-0 pr-[30px] pl-0">
        <div className="flex flex-row items-start justify-start relative">
          <div className="h-[283.2px] w-1.5 absolute !m-[0] bottom-[-187.2px] left-[calc(50%_-_3px)] bg-sandybrown" />
          <img
            className="h-24 w-24 relative rounded-29xl overflow-hidden shrink-0 object-cover z-[1]"
            alt=""
            src="/background@2x.png"
          />
        </div>
      </div>
      <div className="w-[873.5px] relative leading-[46.91px] flex items-center shrink-0 max-w-full mq900:text-12xl mq900:leading-[38px] mq450:text-4xl mq450:leading-[28px]">
        A free, no-obligation, home energy assessment 
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.4px] max-w-full text-2xl-8">
        <div className="relative leading-[28.8px] shrink-0 mq450:text-mid mq450:leading-[23px]">
          <p className="m-0">
            Your Aira Clean Energy Expert assesses your home energy
          </p>
          <p className="m-0">
            needs, spotting efficiencies and improvements, before
          </p>
          <p className="m-0">
            providing a price-locked quote for your clean energy-tech.
          </p>
        </div>
        <div className="rounded-3xl flex flex-row items-end justify-start pt-[11.6px] px-0 pb-[12.4px] gap-[15.8px] shrink-0 text-2xl-6">
          <div className="relative [text-decoration:underline] leading-[28.8px] shrink-0 mq450:text-mid mq450:leading-[23px]">
            Hassle-free switch
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
            <img
              className="w-[14.3px] h-6 relative shrink-0"
              alt=""
              src="/svg--chevron-icon-4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
