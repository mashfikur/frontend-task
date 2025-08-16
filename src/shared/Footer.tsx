import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";

const Footer = () => {
  return (
    <footer className=" pt-10 xl:pt-[115px] pb-12 xl:pb-[90px]">
      <Container>
        {/* top part */}
        <div className="flex flex-col lg:flex-row xl:items-center justify-between gap-8 xl:gap-5 pb-9 xl:pb-[90px] border-b border-b-[rgba(38,38,38,0.12)] xl:px-20 px-4">
          <div className="flex-1">
            <Title>
              Vulputate et pulvinar ethre Suspendisse tellus consecteur
            </Title>
          </div>

          <div className="flex-1 flex xl:justify-end">
            <Button fullWidth />
          </div>
        </div>

        {/* bottom part */}
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-3 xl:gap-5 xl:text-xl pt-8 xl:pt-10 px-4 xl:px-20">
          <p>Copyright © {new Date().getFullYear()} Lorem Ipsum.</p>

          <div className="flex items-center gap-1.5 xl:underline">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
