import bannerArt from "@/assets/images/hero-banner.svg";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import Button from "../common/Button";

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
      <div className="mt-[115px] px-20 flex items-center gap-3">
        {/* left section */}
        <div className="flex-1">
          <p className="capitalize text-primaryYellow font-bold text-3xl ">
            risus praesent vulputate.{" "}
          </p>
          <Title>Cursus Integer</Title>
          <Title>Consequat Tristique.</Title>
          <Button />
        </div>

        {/* right section */}
        <div className="w-full max-w-[700px] aspect-square flex-1">
          <img src={bannerArt} alt="hero_banner_art" />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
