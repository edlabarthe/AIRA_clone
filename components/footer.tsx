import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[37.2px] max-w-full text-left text-lg text-white font-inter mq900:gap-[19px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[11.5px] pr-[21px] pl-5 text-center font-helvetica-neue">
        <div className="flex flex-row items-start justify-start gap-[11.6px]">
          <h3 className="m-0 w-[45.8px] relative text-inherit leading-[18px] font-medium font-inherit flex items-center justify-center shrink-0 min-w-[45.8px]">
            Great
          </h3>
          <img
            className="self-stretch w-[100px] relative max-h-full min-h-[18px]"
            alt=""
            src="/img-6.svg"
          />
          <img
            className="h-[17.7px] w-[68px] relative"
            alt=""
            src="/img-7.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15.1px] max-w-full text-base-3">
        <div className="self-stretch h-px relative bg-darkgray box-border overflow-hidden shrink-0 border-b-[1px] border-solid border-gray-500" />
        <div className="self-stretch flex flex-row items-start justify-between min-h-[25px] max-w-full gap-[20px] mq1300:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[23.6px] min-h-[21px] max-w-full mq1300:flex-wrap">
            <div className="relative leading-[19.81px] inline-block min-w-[104.7px]">
              Cookie Policy
            </div>
            <div className="relative text-base-5 leading-[20px] inline-block min-w-[109px]">
              Privacy Policy
            </div>
            <div className="relative leading-[19.81px]">{`Terms & Conditions`}</div>
            <div className="relative text-base leading-[19.81px]">
              Terms of service for the Aira app
            </div>
            <div className="h-[19.8px] rounded-3xl flex flex-row items-end justify-start pt-[1.9px] px-0 pb-[0.7px] box-border text-center text-base-6">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
                <img
                  className="w-4 h-4 relative shrink-0"
                  alt=""
                  src="/svg--globe-icon.svg"
                />
              </div>
              <div className="relative leading-[20px] shrink-0">
                United Kingdom (English)
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover min-h-[24px]"
              alt=""
              src="/link--facebook--facebooksvg@2x.png"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover min-h-[24px]"
              alt=""
              src="/link--linkedin--linkedinsvg@2x.png"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover min-h-[24px]"
              alt=""
              src="/link--instagram--instagramsvg@2x.png"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/link--youtube--youtubesvg.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end text-2xs-9">
        <div className="relative leading-[14px]">
          ©2024 Aira. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
