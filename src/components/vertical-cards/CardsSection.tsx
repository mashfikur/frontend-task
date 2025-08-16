import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import { cards as data } from "@/utils/data";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

const CardsSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  console.log(screenWidth);

  return (
    <div className="bg-transparent">
      <Container>
        <div className="px-4 xl:px-[90px] flex flex-col xl:flex-row items-center gap-[90px]">
          {/* left  */}
          <div className=" space-y-14">
            <div>
              <Fade triggerOnce direction="up">
                <p className=" font-normal text-primaryYellow text-xl max-w-[530px] mb-5">
                  Quisque porttitor vitae vel amet neque scelerisque mattis.
                  Consectetur nibh velit magna consectetur leo.{" "}
                </p>
              </Fade>
              <Title color="light">
                Cursus Integer Conseq Aliquam Tristique.
              </Title>
            </div>
            <Button version="light" fullWidth />
          </div>

          {/* right  */}
          <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-8 xl:gap-[60px]">
            {data.map((item, i) => (
              <Card
                key={i}
                item={item}
                isDark={
                  screenWidth < 700
                    ? item.id % 2 !== 0
                    : item.id === 2 || item.id === 3
                }
                isElevated={item.id === 1 || item.id === 3}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CardsSection;
