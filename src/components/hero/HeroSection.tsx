import bannerArt from "@/assets/images/hero-banner.svg";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import Button from "../common/Button";
import Pill from "./Pill";
import TypeWriter from "./TypeWriter";
import { Fade } from "react-awesome-reveal";

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
    <section>
      <Container>
        <div className="mt-0  xl:mt-[115px] mb-20 px-4  xl:px-20 flex xl:flex-row flex-col-reverse items-center justify-between gap-3">
          {/* left section */}
          <div className="xl:max-w-[45%] w-full space-y-8 xl:space-y-[60px]">
            <div>
              <Fade triggerOnce direction="up">
                <p className="capitalize text-primaryYellow font-bold text-lg lg:text-3xl pb-3 xl:pb-0">
                  risus praesent vulputate.{" "}
                </p>
              </Fade>
              <Title version="lg">Cursus Integer</Title>
              <Title version="lg">
                <div className="flex items-center gap-2.5">
                  <span>Consequat</span>
                  <TypeWriter text="Tristique" />
                </div>
              </Title>
            </div>

            {/* pills */}
            <div className=" flex-col lg:flex-wrap flex gap-3.5 ">
              <Fade
                cascade
                damping={0.3}
                triggerOnce
                direction="up"
                duration={700}
              >
                {pillsData.map((item, i) => (
                  <Pill key={i} item={item} />
                ))}
              </Fade>
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
    </section>
  );
};

export default HeroSection;
