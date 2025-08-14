import useEmblaCarousel from "embla-carousel-react";
import { CarouselData } from "@/utils/data";
import Slide from "./Slide";
import "./styles.css";
import { useCallback, useState } from "react";
import SlideControl from "./SlideControl";
import Container from "../common/Container";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const [activeButton, setActiveButton] = useState<"prev" | "next">("next");

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    setActiveButton("prev");
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    setActiveButton("next");
  }, [emblaApi]);

  return (
    <Container>
      <div className="relative group card_carousel">
        {/* carousel heading */}

        <div className="embla bg-white  rounded-[100px]" ref={emblaRef}>
          <div className="embla__container">
            {CarouselData.map((item, i) => (
              <Slide key={i} item={item} />
            ))}
          </div>
        </div>

        {/* prev & next button */}
        <div className="absolute z-40 bottom-[15%] gap-10 left-[36%] flex items-center gap">
          <SlideControl
            onClick={scrollPrev}
            mode="prev"
            isActive={activeButton === "prev"}
          />
          <SlideControl
            onClick={scrollNext}
            mode="next"
            isActive={activeButton === "next"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
