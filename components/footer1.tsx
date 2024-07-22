import type { NextPage } from "next";

export type Footer1Type = {
  className?: string;
};

const Footer1: NextPage<Footer1Type> = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start pt-0 px-0 pb-[55px] box-border max-w-full text-left text-base-7 text-gray-100 font-inter ${className}`}
    >
      <div className="flex-1 bg-white flex flex-row items-start justify-between py-6 px-12 box-border shrink-0 max-w-full gap-[20px] mq1300:pl-6 mq1300:pr-6 mq1300:box-border">
        <img
          className="h-14 w-32 relative"
          loading="lazy"
          alt=""
          src="/link--airahomecom--svg.svg"
        />
        <div className="w-[833.3px] flex flex-row items-start justify-start gap-[31.6px] max-w-full mq1300:w-[488.5px] mq450:gap-[16px]">
          <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[18px] font-medium text-[inherit] inline-block min-w-[72px] whitespace-nowrap">
              Products
            </a>
          </div>
          <nav className="m-0 flex-[0.9275] flex flex-col items-start justify-start pt-[15px] pb-0 pr-[25px] pl-0 box-border max-w-full mq1300:hidden">
            <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[31.9px] text-left text-base-6 text-gray-100 font-inter mq450:hidden mq450:gap-[16px]">
              <a className="[text-decoration:none] relative leading-[18px] font-medium text-[inherit] inline-block min-w-[127.1px] whitespace-nowrap">
                What's included
              </a>
              <a className="[text-decoration:none] relative text-base-9 leading-[18px] font-medium text-[inherit] inline-block min-w-[56.2px] whitespace-nowrap">
                Pricing
              </a>
              <a className="[text-decoration:none] relative text-base-7 leading-[18px] font-medium text-[inherit] inline-block min-w-[72px] whitespace-nowrap">
                About us
              </a>
            </nav>
          </nav>
          <div className="flex-1 flex flex-row items-start justify-start gap-[23.9px] max-w-full text-center text-base-9">
            <button className="cursor-pointer [border:none] pt-[15.1px] pb-[16.7px] pr-[15px] pl-4 bg-gray-100 rounded-2xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray">
              <a className="[text-decoration:none] relative text-base-3 leading-[20px] font-inter text-white text-left inline-block min-w-[91px]">
                Get a quote
              </a>
            </button>
            <div className="flex-1 flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0">
              <div className="self-stretch rounded-3xl flex flex-row items-start justify-start pt-[11.2px] px-[26px] pb-3 gap-[8px]">
                <img
                  className="ml-[-28px] h-5 w-5 relative shrink-0"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
                <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[126px] shrink-0 whitespace-nowrap">
                  0330 822 5493
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-8 h-8 relative rounded-3xl"
                loading="lazy"
                alt=""
                src="/button.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer1;
