import { Fade } from "react-awesome-reveal";

const Title = ({
  version = "sm",
  children,
  color = "dark",
  delay,
}: {
  version?: "sm" | "lg";
  children: React.ReactNode;
  color?: "dark" | "light";
  delay?: number;
}) => {
  if (version === "lg") {
    return (
      <Fade triggerOnce direction="up" delay={delay}>
        <h1
          className={`${
            color === "dark" ? `text-primaryBlack` : `text-white`
          } font-bold text-[80px]`}
        >
          {children}
        </h1>
      </Fade>
    );
  }

  return (
    <Fade triggerOnce direction="up" delay={delay}>
      <h3
        className={`${
          color === "dark" ? `text-primaryBlack` : `text-white`
        } text-primaryBlack font-bold text-[50px]`}
      >
        {children}
      </h3>
    </Fade>
  );
};

export default Title;
