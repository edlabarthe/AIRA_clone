import type { NextPage } from "next";

export type ReviewItemsType = {
  className?: string;
  goodInformationWellPresen?: string;
  goodInformationWellPresen1?: string;
  billsAndMoreComfor?: string;
  philipSmith?: string;
  july?: string;
};

const ReviewItems: NextPage<ReviewItemsType> = ({
  className = "",
  goodInformationWellPresen,
  goodInformationWellPresen1,
  billsAndMoreComfor,
  philipSmith,
  july,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[12px] max-w-[calc(100%_-_1169px)] text-left text-smi text-slategray font-helvetica-neue ${className}`}
    >
      <div className="flex flex-row items-end justify-start gap-[6px]">
        <img
          className="self-stretch w-[99px] relative max-h-full min-h-[18px]"
          alt=""
          src="/img-3.svg"
        />
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.1px]">
          <img className="w-3.5 h-3.5 relative" alt="" src="/svg-2.svg" />
        </div>
        <div className="h-4 overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] box-border">
          <div className="relative leading-[16px] inline-block min-w-[39px] shrink-0">
            Invited
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-gray-200">
        <b className="relative leading-[14px]">{goodInformationWellPresen}</b>
        <div className="overflow-hidden flex flex-row items-end justify-start pt-0 pb-[0.5px] pr-[17px] pl-0 text-smi">
          <div className="relative leading-[16px]">
            <p className="m-0">{goodInformationWellPresen1}</p>
            <p className="m-0">{billsAndMoreComfor}</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[2.9px] text-xs text-gray-400">
          <div className="overflow-hidden flex flex-row items-start justify-start shrink-0">
            <b className="relative leading-[12px] inline-block min-w-[71px] shrink-0">
              {philipSmith}
            </b>
          </div>
          <div className="relative leading-[12px] inline-block min-w-[32px] shrink-0">
            {july}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
