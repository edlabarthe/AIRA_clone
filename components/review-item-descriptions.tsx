import type { NextPage } from "next";

export type ReviewItemDescriptionsType = {
  className?: string;
  thoroughCompetence?: string;
  theCompanyRepresentativeW?: string;
  impressiveInHisPit?: string;
  mrMMcBeath?: string;
  july?: string;
};

const ReviewItemDescriptions: NextPage<ReviewItemDescriptionsType> = ({
  className = "",
  thoroughCompetence,
  theCompanyRepresentativeW,
  impressiveInHisPit,
  mrMMcBeath,
  july,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[8px] text-left text-sm text-gray-200 font-helvetica-neue ${className}`}
    >
      <b className="relative leading-[14px]">{thoroughCompetence}</b>
      <div className="overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] text-smi">
        <div className="h-8 relative leading-[16px] flex items-center shrink-0">
          <span>
            <p className="m-0">{theCompanyRepresentativeW}</p>
            <p className="m-0">{impressiveInHisPit}</p>
          </span>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[3px] text-xs text-gray-400">
        <div className="overflow-hidden flex flex-row items-start justify-start">
          <b className="relative leading-[12px] inline-block min-w-[88px] shrink-0 whitespace-nowrap">
            {mrMMcBeath}
          </b>
        </div>
        <div className="relative leading-[12px] inline-block min-w-[39px]">
          {july}
        </div>
      </div>
    </div>
  );
};

export default ReviewItemDescriptions;
