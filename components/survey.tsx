import type { NextPage } from "next";

export type SurveyType = {
  className?: string;
};

const Survey: NextPage<SurveyType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[152.4px] max-w-full text-left text-19xl-8 text-gray-100 font-inter mq900:gap-[38px] mq1300:gap-[76px] mq450:gap-[19px] mq1650:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[144px] max-w-full mq900:gap-[36px] mq900:min-w-full mq1300:gap-[72px]">
        <div className="w-[666px] flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-60 w-1.5 absolute !m-[0] bottom-[-144px] left-[calc(50%_-_3px)] bg-sandybrown" />
            <img
              className="h-24 w-24 relative rounded-29xl overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/backgroundshadow-1.svg"
            />
          </div>
          <div className="relative leading-[46.91px] inline-block max-w-full mq900:text-12xl mq900:leading-[38px] mq450:text-4xl mq450:leading-[28px]">{`Technical survey & design`}</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full text-20xl-3 mq1300:flex-wrap">
          <img
            className="h-24 w-24 relative rounded-29xl overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/backgroundshadow-2.svg"
          />
          <div className="relative leading-[46.91px] inline-block max-w-full mq900:text-12xl mq900:leading-[38px] mq450:text-5xl mq450:leading-[28px]">
            Aira handles your £7,500 grant application
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[153.6px] min-w-[642.4px] max-w-full text-2xl-8 mq900:gap-[77px] mq900:min-w-full mq450:gap-[38px] mq1650:flex-1">
        <div className="relative leading-[28.8px] inline-block shrink-0 max-w-full mq450:text-mid mq450:leading-[23px]">
          <p className="m-0">
            Once you’ve approved your quote, we’ll conduct a technical
          </p>
          <p className="m-0">
            survey and design a clean energy-tech heating system that's
          </p>
          <p className="m-0">perfectly tailored to your home.</p>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.3px] shrink-0">
          <div className="h-[115.2px] relative leading-[28.8px] flex items-center shrink-0 mq450:text-mid mq450:leading-[23px]">
            <span>
              <p className="m-0">
                Taking advantage of the Boiler Upgrade Scheme or the Home
              </p>
              <p className="m-0">
                Energy Scotland Grant and Loan? We’ll guide you through the
              </p>
              <p className="m-0">
                entire process and apply for the Boiler Upgrade Scheme on
              </p>
              <p className="m-0">
                your behalf. We even help with planning permission if required.
              </p>
            </span>
          </div>
          <div className="rounded-3xl flex flex-row items-end justify-start pt-[11.6px] px-0 pb-[12.4px] gap-[15.8px] text-2xl-9">
            <div className="relative [text-decoration:underline] leading-[28.8px] shrink-0 mq450:text-lg mq450:leading-[23px]">
              Heat pump grants in the UK
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
              <img
                className="w-[14.3px] h-6 relative shrink-0"
                alt=""
                src="/svg--chevron-icon-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
