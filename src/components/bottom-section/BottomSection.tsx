import Container from "@/components/common/Container";
import bannerArt from "@/assets/images/banner-art-2.svg";
import Title from "../common/Title";

const BottomSection = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center gap-[110px] px-20">
          <div className="flex-1">
            <div>
              <Title>Cursus Integer consequat Tristique.</Title>
            </div>
          </div>
          <div className="flex-1">
            <div className="min-w-[600px] max-w-[600px] h-[600px] mx-auto">
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
