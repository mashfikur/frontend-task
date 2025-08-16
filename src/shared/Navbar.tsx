import Container from "@/components/common/Container";
import logo from "@/assets/images/logo.png";
import LanguageSwitch from "@/components/navbar/LanguageSwitch";

const Navbar = () => {
  return (
    <nav className="mt-10 xl:mt-[65px] px-4 xl:px-0">
      <Container>
        <div className="bg-white flex items-center justify-between py-3 lg:py-4 px-[26px] rounded-[5000px] w-full">
          <div className="flex-1">
            <div className="w-[110px] lg:w-[130px] h-[40px] lg:h-[60px] xl:mx-auto">
              <img
                src={logo}
                alt="nav_logo"
                className="w-full h-full object-cover scale-120"
              />
            </div>
          </div>

          {/* language dropper */}
          <LanguageSwitch />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
