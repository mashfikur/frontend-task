import { Fade } from "react-awesome-reveal";

const Button = ({
  text = "Lorem Ipsum",
  link = "#",
  version = "dark",
}: {
  text?: string;
  link?: string;
  version?: "dark" | "light" | "yellow";
}) => {
  return (
    <Fade className="w-fit" triggerOnce direction="up">
      <a
        className={`flex w-fit py-4 xl:py-5 px-10 xl:px-[50px] rounded-full gap-14 common_button duration-300 ease-in-out border-[2px] border-transparent min-w-fit ${
          version === "dark"
            ? `hover:border-primaryBlack bg-primaryYellow dark`
            : version === "yellow"
            ? `bg-primaryBlack hover:border-white yellow`
            : `hover:border-primaryYellow bg-white light`
        } `}
        href={link}
      >
        <span
          className={` text-lg xl:text-[22px] font-bold ${
            version === "yellow" ? `text-white` : `text-primaryBlack`
          }`}
        >
          {text}
        </span>
        <span className="block size-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full duration-300 ease-in-out"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M18.75 6.26953L16.9922 8.02734L22.7344 13.7695H2.51953V16.2305H22.7344L16.9922 21.9727L18.75 23.7305L27.4805 15L18.75 6.26953Z"
              fill={version === "yellow" ? `white` : `#262626`}
            />
          </svg>
        </span>
      </a>
    </Fade>
  );
};

export default Button;
