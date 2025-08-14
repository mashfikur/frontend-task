import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";

const Footer = () => {
  return (
    <footer className="pt-[115px] pb-[90px]">
      <Container>
        {/* top part */}
        <div className="flex items-center justify-between gap-5 pb-[90px] border-b border-b-[rgba(38,38,38,0.12)] px-20">
          <div className="flex-1">
            <Title>
              Vulputate et pulvinar ethre Suspendisse tellus consecteur
            </Title>
          </div>

          <div className="flex-1 flex justify-end">
            <Button />
          </div>
        </div>

        {/* bottom part */}
        <div className="flex items-center justify-between gap-5 text-xl pt-10 px-20">
          <p>Copyright © {new Date().getFullYear()} Lorem Ipsum.</p>

          <div className="flex items-center gap-1.5">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
