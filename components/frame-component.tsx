import type { NextPage } from "next";
import ReviewItemDescriptions from "./review-item-descriptions";
import ReviewItems from "./review-items";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start min-h-[136px] max-w-[calc(100%_-_253px)] text-left text-smi text-slategray font-helvetica-neue ${className}`}
    >
      <div className="w-[1544px] h-[-3177.7px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 px-5 box-border gap-[35px] min-h-[-3178px] max-w-full mq900:gap-[17px]">
        <div className="flex flex-col items-start justify-start gap-[12px] max-w-[calc(100%_-_1169px)]">
          <div className="flex flex-row items-end justify-start gap-[6px]">
            <img
              className="self-stretch w-[99px] relative max-h-full min-h-[18px]"
              alt=""
              src="/img-2.svg"
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
          <ReviewItemDescriptions
            thoroughCompetence="thorough competence"
            theCompanyRepresentativeW="the company representative was very well informed and most"
            impressiveInHisPit="impressive in his pit..."
            mrMMcBeath="Mr M McBeath,"
            july="10 July"
          />
        </div>
        <ReviewItems
          goodInformationWellPresen="Good information well presented"
          goodInformationWellPresen1="Good information well presented, looking forward to lower"
          billsAndMoreComfor="Bill's and more comfor..."
          philipSmith="philip smith,"
          july="7 July"
        />
        <div className="flex flex-col items-start justify-start gap-[12px] max-w-[calc(100%_-_1169px)]">
          <img
            className="w-[99px] h-[18.1px] relative"
            alt=""
            src="/img-2.svg"
          />
          <ReviewItemDescriptions
            thoroughCompetence="Efficient and friendly company"
            theCompanyRepresentativeW="Great company. We had them in this week to fit an air source"
            impressiveInHisPit="heat pump in our h..."
            mrMMcBeath="Julie Standen,"
            july="6 July"
          />
        </div>
        <ReviewItems
          goodInformationWellPresen="At the moment I can't fault Aira"
          goodInformationWellPresen1="At the moment I can't fault Aira, they've been so efficient in"
          billsAndMoreComfor="what they've done..."
          philipSmith="Ian Johnson,"
          july="4 July"
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5 text-gray-200">
        <div className="relative leading-[16px]">{`Showing our 3, 4 & 5 star reviews`}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
