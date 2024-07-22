import type { NextPage } from "next";
import Footer1 from "../components/footer1";
import HeatPumpDescription from "../components/heat-pump-description";
import Background1 from "../components/background1";
import ReviewContent from "../components/review-content";
import FrameComponent from "../components/frame-component";
import Assessment from "../components/assessment";
import Survey from "../components/survey";
import YearGuarantee from "../components/year-guarantee";
import Home from "../components/home";
import Background from "../components/background";
import SiteMapContent from "../components/site-map-content";
import Footer from "../components/footer";

const AIRA: NextPage = () => {
  return (
    <div className="w-full h-[1200px] relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto leading-[normal] tracking-[normal] text-left text-[70.5px] text-gray-100 font-inter mq1650:h-auto mq1650:min-h-[1200]">
      <Footer1 />
      <main className="absolute top-[159px] left-[0px] bg-gray-100 w-full flex flex-col items-start justify-start pt-[71.4px] px-12 pb-[72px] box-border gap-[599.3px] shrink-0 max-w-full mq900:gap-[150px] mq1300:gap-[300px] mq1300:pl-6 mq1300:pr-6 mq1300:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[-1px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src="/aira-heat-pump-hero-vide-no-overlay-30196b3475mp4@2x.png"
        />
        <section className="w-[1189px] relative text-[123.7px] leading-[129.26px] font-inter text-white text-left flex items-center max-w-full z-[1] mq900:text-[49px] mq900:leading-[78px] mq450:text-12xl mq450:leading-[52px]">
          <span className="w-full">
            <p className="m-0">Heating that doesn’t</p>
            <p className="m-0">cost the earth</p>
          </span>
        </section>
        <section className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-19xl-4 text-white font-inter mq1650:flex-wrap">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-full">
            <div className="relative leading-[46.91px] z-[1] mq900:text-12xl mq900:leading-[38px] mq450:text-4xl mq450:leading-[28px]">
              <p className="m-0">
                Expensive gas-guzzling boiler or a free fresh air
              </p>
              <p className="m-0">heat pump? It’s a no-brainer.</p>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[23.6px] pb-[24.4px] pr-[31px] pl-9 bg-sandybrown w-[334.2px] rounded-3xl flex flex-row items-end justify-start box-border gap-[15.9px] max-w-full z-[1] mq450:flex-wrap">
            <div className="flex-1 relative text-2xl-6 leading-[28.8px] font-inter text-gray-100 text-right inline-block min-w-[153px] mq450:text-mid mq450:leading-[23px]">
              See what you can save
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
              <img
                className="w-[14.3px] h-6 relative"
                alt=""
                src="/svg--chevron-icon.svg"
              />
            </div>
          </button>
        </section>
      </main>
      <div className="absolute top-[1256px] left-[0px] bg-white w-full overflow-hidden flex flex-row items-end justify-start pt-[21px] px-12 pb-[171px] box-border gap-[48px] shrink-0 max-w-full mq900:gap-[24px] mq1300:pl-6 mq1300:pr-6 mq1300:box-border mq1650:flex-wrap">
        <img
          className="w-[888px] relative rounded-17xl max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1650:flex-1"
          alt=""
          src="/container@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[198px] box-border min-w-[635.9px] min-h-[719px] max-w-full mq900:min-w-full mq1650:flex-1">
          <HeatPumpDescription />
        </div>
      </div>
      <div className="absolute top-[2513.6px] left-[0px] bg-white w-full overflow-hidden flex flex-row items-end justify-start pt-[21px] pb-[171px] pr-12 pl-[282px] box-border gap-[103.9px] shrink-0 max-w-full mq900:gap-[26px] mq900:pl-[70px] mq900:box-border mq1300:gap-[52px] mq1300:pl-[141px] mq1300:pr-6 mq1300:box-border mq1650:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[241px] box-border min-w-[598.1px] min-h-[675px] max-w-full mq1300:min-w-full mq1650:flex-1">
          <div className="flex flex-col items-start justify-start gap-[64.3px] max-w-full mq900:gap-[32px] mq450:gap-[16px]">
            <div className="relative leading-[83.35px] inline-block max-w-full mq900:text-[56px] mq900:leading-[67px] mq450:text-[42px] mq450:leading-[50px]">
              <p className="m-0">Intelligently</p>
              <p className="m-0">connected</p>
            </div>
            <div className="relative text-2xl-6 leading-[28.8px] mq450:text-mid mq450:leading-[23px]">
              <p className="m-0">
                Your Aira Heat Pump system is full of smart, connected
              </p>
              <p className="m-0">
                features which heat your home and hot water with optimal
              </p>
              <p className="m-0">efficiency. It's called Aira Intelligence.</p>
            </div>
            <div className="rounded-3xl flex flex-row items-end justify-start pt-[11.6px] px-0 pb-[12.4px] gap-[15.8px] text-2xl-9">
              <div className="relative [text-decoration:underline] leading-[28.8px] mq450:text-lg mq450:leading-[23px]">{`The app & Aira Intelligence`}</div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img className="w-6 h-6 relative" alt="" src="/svg-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[1065.6px] flex-1 relative rounded-17xl max-w-full overflow-hidden object-cover min-w-[577px] mq1300:min-w-full"
          alt=""
          src="/container-1@2x.png"
        />
      </div>
      <Background1 />
      <div className="absolute top-[4281.7px] left-[0px] flex flex-row items-start justify-start pt-0 px-0 pb-[960px] box-border min-h-[1292px] max-w-full w-full">
        <div className="h-[-3081.7px] bg-white overflow-hidden flex flex-row items-start justify-start pt-24 pb-0 pr-14 pl-[67px] box-border gap-[8px] min-h-[-3082px] shrink-0 max-w-full mq1300:pl-[33px] mq1300:pr-7 mq1300:box-border">
          <ReviewContent />
          <FrameComponent />
          <div className="flex flex-col items-start justify-start pt-14 px-0 pb-0">
            <img
              className="w-6 h-6 relative object-contain"
              alt=""
              src="/button--svg-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full right-[0px] bottom-[-4373.7px] left-[0px] bg-gray-100 flex flex-col items-start justify-start py-px px-0 box-border max-w-full">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/container-2@2x.png"
        />
        <div className="w-full h-[100px] absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-t-none rounded-b-81xl bg-white z-[1]" />
        <div className="w-full h-[100px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-t-81xl rounded-b-none bg-white z-[1]" />
      </div>
      <div className="absolute top-[5573.7px] left-[0px] bg-white w-full overflow-hidden flex flex-col items-start justify-start py-24 pr-11 pl-12 box-border gap-[47.7px] shrink-0 max-w-full text-[92.3px] mq900:gap-[24px] mq1300:pl-6 mq1300:pr-[22px] mq1300:box-border">
        <div className="relative leading-[97px] inline-block max-w-full shrink-0 mq900:text-27xl mq900:leading-[58px] mq450:text-9xl mq450:leading-[39px]">
          Sustainable just got affordable
        </div>
        <div className="self-stretch flex flex-row items-end justify-between shrink-0 gap-[20px] max-w-full text-[28.8px] mq1300:flex-wrap">
          <div className="relative leading-[38.39px] inline-block max-w-full mq450:text-4xl mq450:leading-[31px]">
            <p className="m-0">
              The cleverest way to heat your home comes with the cleverest
            </p>
            <p className="m-0">
              way to pay for it; the Aira all-inclusive plan. No more upfront
            </p>
            <p className="m-0">costs, just monthly payments.</p>
          </div>
          <div className="rounded-3xl flex flex-row items-start justify-start pt-[11.6px] pb-[12.4px] pr-[30px] pl-0 relative text-2xl-9">
            <div className="relative [text-decoration:underline] leading-[28.8px] mq450:text-lg mq450:leading-[23px]">
              The Aira all-inclusive plan
            </div>
            <img
              className="h-6 w-[14.3px] absolute !m-[0] top-[14.3px] right-[-0.1px]"
              alt=""
              src="/svg--chevron-icon-3.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[6025.8px] left-[0px] bg-white w-[1920px] overflow-hidden flex flex-row items-start justify-start pt-[95px] px-12 pb-[97px] box-border shrink-0 max-w-full text-[92.1px]">
        <div className="relative leading-[96.97px] mq900:text-27xl mq900:leading-[58px] mq450:text-9xl mq450:leading-[39px]">
          <p className="m-0">Considering a switch? It's</p>
          <p className="m-0">hassle-free.</p>
        </div>
      </div>
      <div className="absolute top-[6411.7px] left-[0px] bg-white w-full overflow-hidden flex flex-col items-start justify-start pt-[95.6px] pb-60 pr-[52px] pl-[93px] box-border gap-[143.8px] shrink-0 max-w-full text-[38.6px] mq900:gap-[36px] mq900:pl-[23px] mq900:box-border mq1300:gap-[72px] mq1300:pl-[46px] mq1300:pr-[26px] mq1300:box-border">
        <Assessment />
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1650:flex-wrap">
          <div className="w-[583.1px] flex flex-row items-start justify-start gap-[93px] shrink-0 max-w-full mq900:flex-wrap mq900:gap-[46px] mq450:gap-[23px]">
            <div className="flex flex-row items-start justify-start relative">
              <div className="h-72 w-1.5 absolute !m-[0] bottom-[-192px] left-[calc(50%_-_3px)] bg-sandybrown" />
              <img
                className="h-24 w-24 relative rounded-29xl overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/backgroundshadow.svg"
              />
            </div>
            <div className="relative leading-[46.91px] inline-block max-w-full mq900:text-12xl mq900:leading-[38px] mq450:text-4xl mq450:leading-[28px]">
              Receive a fixed quote
            </div>
          </div>
          <div className="relative text-2xl-4 leading-[28.8px] inline-block shrink-0 max-w-full mq450:text-mid mq450:leading-[23px]">
            <p className="m-0">
              We provide a price-locked quote. That means if we later
            </p>
            <p className="m-0">
              discover you need additional radiator upgrades or a larger heat
            </p>
            <p className="m-0">
              pump, we won’t raise the price. But, if we find you require fewer
            </p>
            <p className="m-0">
              changes or a smaller heat pump, we’ll reduce your quote
            </p>
            <p className="m-0">accordingly.</p>
          </div>
        </div>
        <div className="w-1.5 h-[312px] absolute !m-[0] bottom-[907.1px] left-[138px] bg-sandybrown z-[1]" />
        <Survey />
        <div className="w-[1721.6px] flex flex-row items-start justify-between max-w-full gap-[20px] text-[38.9px] mq1650:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[93px] max-w-full mq900:flex-wrap mq900:gap-[46px] mq450:gap-[23px]">
            <div className="flex flex-row items-start justify-start relative">
              <div className="h-60 w-1.5 absolute !m-[0] bottom-[-144px] left-[calc(50%_-_3px)] bg-sandybrown z-[2]" />
              <img
                className="h-24 w-24 relative rounded-29xl overflow-hidden shrink-0 z-[3]"
                alt=""
                src="/backgroundshadow-3.svg"
              />
            </div>
            <div className="relative leading-[46.91px] inline-block max-w-full mq900:text-12xl mq900:leading-[38px] mq450:text-4xl mq450:leading-[28px]">{`Designed & installed within 30 days`}</div>
          </div>
          <div className="relative text-2xl-6 leading-[28.8px] inline-block max-w-full mq450:text-mid mq450:leading-[23px]">
            <p className="m-0">
              Once everything's approved, we’ll come to install your unit
            </p>
            <p className="m-0">within 30 days.  </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-[38.3px] mq1650:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[93px] max-w-full mq900:flex-wrap mq900:gap-[46px] mq450:gap-[23px]">
            <div className="flex flex-row items-start justify-start relative">
              <div className="h-72 w-1.5 absolute !m-[0] bottom-[-192px] left-[calc(50%_-_3px)] bg-sandybrown z-[3]" />
              <img
                className="h-24 w-24 relative rounded-29xl overflow-hidden shrink-0 z-[4]"
                alt=""
                src="/backgroundshadow-4.svg"
              />
            </div>
            <div className="relative leading-[46.91px] inline-block max-w-full mq900:text-12xl mq900:leading-[38px] mq450:text-4xl mq450:leading-[28px]">{`We remove & recycle your old boiler`}</div>
          </div>
          <div className="h-36 relative text-2xl-6 leading-[28.8px] flex items-center min-w-[650px] max-w-full mq900:min-w-full mq450:text-mid mq450:leading-[23px] mq1650:flex-1">
            <span>
              <p className="m-0">
                Following the installation of your new heat pump, we’ll remove
              </p>
              <p className="m-0">
                and recycle your old boiler, make sure your heating and hot
              </p>
              <p className="m-0">
                water is working perfectly and show you how everything works.
              </p>
              <p className="m-0">
                We won’t leave until you’re entirely happy with your system and
              </p>
              <p className="m-0">heat pump app.</p>
            </span>
          </div>
        </div>
        <YearGuarantee />
      </div>
      <div className="absolute top-[8538px] left-[0px] w-full flex flex-row items-start justify-start pt-0 px-0 pb-[312px] box-border max-w-full text-center text-[68.5px]">
        <div className="flex-1 bg-white overflow-hidden flex flex-col items-end justify-start pt-[95.3px] pb-[191.9px] pr-[120px] pl-24 box-border gap-[176.1px] shrink-0 max-w-full mq900:gap-[44px] mq900:pl-6 mq900:pr-[30px] mq900:box-border mq1300:gap-[88px] mq1300:pl-12 mq1300:pr-[60px] mq1300:box-border">
          <div className="w-[1679.4px] flex flex-row items-start justify-center max-w-full">
            <div className="relative leading-[84px] mq900:text-36xl mq900:leading-[67px] mq450:text-22xl mq450:leading-[50px]">
              See what you can save
            </div>
          </div>
          <Home />
        </div>
      </div>
      <img
        className="absolute top-[9534px] left-[0px] w-[1920px] h-[312px] overflow-hidden"
        alt=""
        src="/background-1.svg"
      />
      <div className="absolute w-full right-[0px] bottom-[-9001.6px] left-[0px] rounded-t-none rounded-b-81xl bg-white h-[100px] z-[3]" />
      <div className="absolute top-[9846px] left-[0px] w-full flex flex-col items-start justify-start shrink-0 max-w-full">
        <Background />
        <div className="ml-[-3px] self-stretch bg-darkslategray overflow-hidden flex flex-col items-start justify-start pt-[195px] pb-[95.8px] pr-[47px] pl-12 box-border gap-[49.7px] max-w-full z-[4] mt-[-0.6px] mq900:gap-[25px] mq1300:pl-6 mq1300:pr-[23px] mq1300:box-border">
          <SiteMapContent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AIRA;
