import type { NextPage } from "next";

export type ReviewContentType = {
  className?: string;
};

const ReviewContent: NextPage<ReviewContentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[213px] flex flex-col items-start justify-start gap-[14px] text-center text-5xl text-gray-200 font-helvetica-neue ${className}`}
    >
      <div className="w-[163px] flex flex-row items-start justify-start py-0 px-[51px] box-border">
        <a className="[text-decoration:none] flex-1 relative leading-[24px] font-medium text-[inherit] inline-block min-w-[61px] mq450:text-lgi mq450:leading-[19px]">
          Great
        </a>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start gap-[27px] text-smi">
        <div className="flex-1 flex flex-col items-end justify-start gap-[11.9px]">
          <img
            className="self-stretch h-[29.7px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/img.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-5 pl-[21px]">
            <div className="flex-1 flex flex-row items-start justify-start shrink-0">
              <div className="flex-1 relative leading-[16px] font-light inline-block min-w-[58.9px] shrink-0">{`Based on `}</div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
                <div className="ml-[-0.4px] self-stretch h-4 box-border flex flex-row items-end justify-start pt-0 pb-[0.5px] px-0 shrink-0 border-b-[1px] border-solid border-gray-300">
                  <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[63.7px] shrink-0 whitespace-nowrap">
                    90 reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[13.6px]">
          <img className="w-6 h-6 relative" alt="" src="/button--svg.svg" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-7">
        <img
          className="h-[26.1px] w-[106px] relative"
          alt=""
          src="/img-1.svg"
        />
      </div>
    </div>
  );
};

export default ReviewContent;
