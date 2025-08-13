import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import { cards as data } from "@/utils/data";
import Card from "./Card";

const CardsSection = () => {
  return (
    <div className="bg-primaryBlack pt-[390px] pb-[700px] shaped_bg">
      <Container>
        <div className="px-[90px] flex items-center gap-[90px]">
          {/* left  */}
          <div className=" space-y-14">
            <div>
              <p className=" font-normal text-primaryYellow text-xl max-w-[530px] mb-5">
                Quisque porttitor vitae vel amet neque scelerisque mattis.
                Consectetur nibh velit magna consectetur leo.{" "}
              </p>
              <Title color="light">
                Cursus Integer Conseq Aliquam Tristique.
              </Title>
            </div>
            <Button version="light" />
          </div>

          {/* right  */}
          <div className="grid grid-cols-2 w-full gap-[60px]">
            {data.map((item, i) => (
              <Card
                key={i}
                item={item}
                isDark={item.id === 2 || item.id === 3}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CardsSection;
