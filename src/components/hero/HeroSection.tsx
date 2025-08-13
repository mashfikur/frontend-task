import bannerArt from "@/assets/images/hero-banner.svg";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import Button from "../common/Button";
import Pill from "./Pill";
import TypeWriter from "./TypeWriter";

const pillsData = [
  "Cursus Integer",
  "Integer Consequat ",
  "Tellus Euismod Pellentesque",
  "Aliquot Tristique",
  "Pellentesque Tempus",
  "Mauris Fermentum Praesent",
];

const HeroSection = () => {
  return (
    <Container>
      <div className="mt-[115px] mb-20 px-20 flex items-center justify-between gap-3">
        {/* left section */}
        <div className="max-w-[45%] space-y-[60px]">
          <div>
            <p className="capitalize text-primaryYellow font-bold text-3xl ">
              risus praesent vulputate.{" "}
            </p>
            <Title version="lg">Cursus Integer</Title>
            <Title version="lg">
              <div className="flex items-center gap-2.5">
                <span>Consequat</span>
                <TypeWriter text="Tristique" />
              </div>
            </Title>
          </div>

          {/* pills */}

          <div className="flex-wrap flex gap-3.5 ">
            {pillsData.map((item, i) => (
              <Pill key={i} item={item} />
            ))}
          </div>

          <Button />
        </div>

        {/* right section */}
        <div className="flex-1">
          <div className="max-w-[650px] ml-auto aspect-square">
            <img
              src={bannerArt}
              alt="hero_banner_art"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
