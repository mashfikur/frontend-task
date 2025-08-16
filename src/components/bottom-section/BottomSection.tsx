import Container from "@/components/common/Container";
import bannerArt from "@/assets/images/banner-art-2.svg";
import Title from "@/components/common/Title";
import { Fade } from "react-awesome-reveal";
import Pill from "@/components/hero/Pill";
import Button from "@/components/common/Button";

const pillsData = [
  "Ac viverra sed risus praesent vulputate. ",
  "Natoqu consectetur pulvinar. ",
  "Sollicitudin ornare tempus nulla varius pulvinar.",
  "Varius pulvinar",
  "Natoque id tellus consectetur",
  "Vulputate et vulputate suspendisse",
];

const BottomSection = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col-reverse xl:flex-row items-center gap-5 xl:gap-[110px] px-4 xl:px-20 w-full">
          <div className="flex-1">
            <div className="space-y-8 xl:space-y-[60px]">
              <Title>Cursus Integer consequat Tristique.</Title>

              {/* pills */}
              <div className="xl:flex-wrap flex-col flex gap-3.5 ">
                <Fade
                  cascade
                  damping={0.3}
                  triggerOnce
                  direction="up"
                  duration={400}
                >
                  {pillsData.map((item, i) => (
                    <Pill key={i} item={item} />
                  ))}
                </Fade>
              </div>

              <Button version="yellow" fullWidth />
            </div>
          </div>
          <div className="flex-1">
            <div className="xl:min-w-[600px] w-full max-w-[600px] h-[350px] xl:h-[600px] mx-auto">
              <img
                src={bannerArt}
                alt="banner_art"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomSection;
