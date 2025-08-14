import useEmblaCarousel from "embla-carousel-react";
import { CarouselData } from "@/utils/data";
import Slide from "./Slide";
import "./styles.css";
const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });
  return (
    <div className="relative">
      {/* carousel heading */}
      <h1 className="absolute z-40 top-0 left-0 text-5xl font-bold">
        What our customers thought?
      </h1>

      <div className="embla bg-white  rounded-[100px] relative" ref={emblaRef}>
        <div className="embla__container">
          {CarouselData.map((item, i) => (
            <Slide key={i} item={item} />
          ))}
        </div>
      </div>

      {/* prev & next button */}
      <div>
        
      </div>
    </div>
  );
};

export default Carousel;
