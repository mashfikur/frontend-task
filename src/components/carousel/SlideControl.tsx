const SlideControl = ({
  isActive,
  mode = "prev",
  onClick,
}: {
  isActive?: boolean;
  mode?: "prev" | "next";
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer block w-fit ${
        mode === "prev" ? `` : `rotate-180`
      } `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="17"
        viewBox="0 0 40 17"
        fill="none"
      >
        <path
          d="M0.00012207 8.5L8.3009 0.199219L8.3009 6.44922L39.5509 6.44922V10.5508L8.3009 10.5508L8.3009 16.8008L0.00012207 8.5Z"
          fill={isActive ? `#F9B800` : `#262626`}
        />
      </svg>
    </button>
  );
};

export default SlideControl;
