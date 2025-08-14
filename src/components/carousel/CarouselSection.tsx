import Container from "@/components/common/Container";

import Carousel from "./Carousel";
const CarouselSection = () => {
  return (
    <div className="bg-primaryYellow">
      <Container>
        <div>
          <Carousel />
        </div>
      </Container>
    </div>
  );
};

export default CarouselSection;
