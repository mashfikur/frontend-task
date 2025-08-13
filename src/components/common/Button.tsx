const Button = ({
  text = "Lorem Ipsum",
  link = "/",
}: {
  text?: string;
  link?: string;
}) => {
  return (
    <a
      className="flex w-fit py-6 px-[50px] bg-primaryYellow rounded-full gap-18 common_button duration-300 ease-in-out  border-[2px] border-transparent hover:border-primaryBlack"
      href={link}
    >
      <span className="text-2xl font-bold text-primaryBlack">{text}</span>
      <span className="block size-[30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full duration-300 ease-in-out"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M18.75 6.26953L16.9922 8.02734L22.7344 13.7695H2.51953V16.2305H22.7344L16.9922 21.9727L18.75 23.7305L27.4805 15L18.75 6.26953Z"
            fill="#262626"
          />
        </svg>
      </span>
    </a>
  );
};

export default Button;
