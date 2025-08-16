import type { CarouselType } from "@/utils/types";

const Slide = ({ item }: { item: CarouselType }) => {
  return (
    <div className="embla__slide  flex xl:flex-row flex-col items-center gap-10 xl:gap-[70px] py-10 pb-20  xl:py-[100px] px-[30px] xl:px-[130px] relative">
      <div className="xl:min-w-[380px] min-w-[270px] size-[270px] xl:size-[380px] rounded-full overflow-hidden relative z-30">
        <img
          src={item.avatar}
          alt="carousel_avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-[#262626] duration-500 ease-in-out group-hover:text-white space-y-5 relative z-30 text-center xl:text-start">
        <h1 className="text-3xl xl:text-5xl font-bold xl:pb-5 ">
          What our customers thought?
        </h1>
        <p className="text-xl xl:text-2xl font-normal leading-10 ">
          {item.subtitle}
        </p>
        <p className="xl:text-xl text-2xl font-bold "> {item.client} </p>
      </div>

      {/* background hover image */}
      <div className="absolute z-[1] w-full h-full top-0 left-0 translate-y-full duration-500 ease-in-out group-hover:translate-y-0 ">
        <img
          src={item.avatar}
          alt="background_overlay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* gray overlary */}
      <div className="absolute z-[5]  duration-500 ease-in-out translate-y-full group-hover:translate-y-0 w-full h-full top-0 left-0 bg-[rgba(62,62,62,.6)] "></div>
    </div>
  );
};

export default Slide;
