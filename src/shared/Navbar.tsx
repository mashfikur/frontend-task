import Container from "@/components/common/Container";
import logo from "@/assets/images/logo.png";
import LanguageSwitch from "@/components/navbar/LanguageSwitch";

const Navbar = () => {
  return (
    <nav className="mt-[65px]">
      <Container>
        <div className="bg-white flex items-center justify-between py-4 px-[26px] rounded-[5000px] w-full drop-shadow-lg">
          <div className="flex-1">
            <div className="w-[130px] h-[60px] mx-auto">
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
