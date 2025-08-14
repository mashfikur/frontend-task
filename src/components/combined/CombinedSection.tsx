import { clsx } from "clsx";
import CardsSection from "@/components/vertical-cards/CardsSection";
import CarouselSection from "@/components/carousel/CarouselSection";
import BottomSection from "@/components/bottom-section/BottomSection";

const CombinedSection = () => {
  const commonClasses = `absolute w-full  left-0 z-10 shaped_bg`;

  return (
    <div className="relative py-[350px]">
      {/* combined sections */}
      <div className="relative z-50 space-y-[180px]">
        <CardsSection />
        <CarouselSection />
        <BottomSection />
      </div>

      {/* after & before property */}
      <div className={clsx(commonClasses, "top-0 bg-primaryBlack h-1/2")}></div>
      <div
        className={clsx(commonClasses, "bottom-0 bg-primaryYellow h-[60%]")}
      ></div>
    </div>
  );
};

export default CombinedSection;
