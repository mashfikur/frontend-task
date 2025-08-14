import type { CarouselType } from "@/utils/types";

const Slide = ({ item }: { item: CarouselType }) => {
  return (
    <div className="embla__slide  flex items-center gap-[70px] py-[100px] px-[130px] ">
      <div className="min-w-[380px] size-[380px] rounded-full overflow-hidden">
        <img
          src={item.avatar}
          alt="carousel_avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-[#262626]  space-y-5">
        <p className="text-2xl font-normal leading-10 "> {item.subtitle} </p>
        <p className="text-xl font-bold "> {item.client} </p>
      </div>
    </div>
  );
};

export default Slide;
