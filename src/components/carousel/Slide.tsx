import type { CarouselType } from "@/utils/types";

const Slide = ({ item }: { item: CarouselType }) => {
  return (
    <div className="embla__slide group flex items-center gap-[70px] py-[100px] px-[130px] relative">
      <div className="min-w-[380px] size-[380px] rounded-full overflow-hidden relative z-30">
        <img
          src={item.avatar}
          alt="carousel_avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-[#262626]  space-y-5 relative z-30">
        <h1 className=" text-5xl font-bold pb-5">
          What our customers thought?
        </h1>
        <p className="text-2xl font-normal leading-10 "> {item.subtitle} </p>
        <p className="text-xl font-bold "> {item.client} </p>
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
      <div className="absolute z-[5]  duration-500 ease-in-out group-hover:translate-y-0 w-full h-full top-0 left-0 bg-[rgba(132,121,121,0.2)] "></div>
    </div>
  );
};

export default Slide;
