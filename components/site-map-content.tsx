import type { NextPage } from "next";

export type SiteMapContentType = {
  className?: string;
};

const SiteMapContent: NextPage<SiteMapContentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1595.4px] flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border gap-[20px] max-w-full text-left text-xs text-white font-inter mq1300:flex-wrap ${className}`}
    >
      <div className="w-[313.3px] flex flex-row items-start justify-start gap-[80px] mq450:gap-[40px]">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-[50px] h-[50px] relative"
            alt=""
            src="/airahomecom--link--svg.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[32.1px]">
          <div className="w-[77px] relative leading-[31.92px] uppercase flex items-center shrink-0">
            WHY AIRA?
          </div>
          <div className="flex flex-col items-start justify-start gap-[15.9px] shrink-0 text-base-5">
            <div className="relative text-base-3 leading-[19.81px]">
              Clean energy revolution
            </div>
            <div className="relative leading-[20px] inline-block min-w-[124px]">{`Costs & savings`}</div>
            <div className="relative leading-[20px] inline-block min-w-[92px]">
              Our mission
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[32.1px]">
        <div className="w-[103.6px] relative leading-[31.92px] uppercase flex items-center shrink-0">
          OUR SOLUTION
        </div>
        <div className="flex flex-col items-start justify-start gap-[15.9px] shrink-0 text-base-6">
          <div className="relative leading-[20px] inline-block min-w-[96px]">
            Heat pumps
          </div>
          <div className="relative text-base-2 leading-[19.81px]">
            Air to water heat pumps
          </div>
          <div className="relative text-base-5 leading-[20px] inline-block min-w-[96px]">
            Solar panels
          </div>
          <div className="relative leading-[19.81px] inline-block min-w-[126.6px]">
            Home insulation
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-0 pr-[102px] pl-0 gap-[32.1px]">
        <a className="[text-decoration:none] relative leading-[31.92px] uppercase text-[inherit] inline-block min-w-[70.9px] shrink-0">
          ABOUT US
        </a>
        <div className="flex flex-col items-start justify-start gap-[15.9px] shrink-0 text-base-6">
          <div className="relative leading-[19.81px] inline-block min-w-[83px]">
            About Aira
          </div>
          <h3 className="m-0 relative text-mid leading-[20px] font-normal font-inherit inline-block min-w-[36px]">
            Blog
          </h3>
          <div className="relative text-mid-4 leading-[20px] inline-block min-w-[43px]">
            FAQs
          </div>
          <div className="relative text-base-2 leading-[20px] inline-block min-w-[44px]">
            News
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[32.1px]">
        <div className="w-[96.6px] relative leading-[31.92px] uppercase flex items-center shrink-0">
          GET IN TOUCH
        </div>
        <div className="flex flex-col items-start justify-start gap-[15.9px] shrink-0 text-base-5">
          <div className="relative text-[15.9px] leading-[19.81px]">
            Where we service
          </div>
          <div className="relative leading-[20px] inline-block min-w-[67px]">
            Press kit
          </div>
          <div className="relative leading-[20px] inline-block min-w-[98px]">
            Contact Aira
          </div>
          <div className="relative text-base-2 leading-[20px] inline-block min-w-[61px]">
            Careers
          </div>
          <div className="relative leading-[20px] inline-block min-w-[72px]">
            Investors
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMapContent;
