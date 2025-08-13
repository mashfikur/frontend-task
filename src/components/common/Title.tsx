const Title = ({
  version = "sm",
  children,
  color = "dark",
}: {
  version?: "sm" | "lg";
  children: React.ReactNode;
  color?: "dark" | "light";
}) => {
  if (version === "lg") {
    return (
      <h1
        className={`${
          color === "dark" ? `text-primaryBlack` : `text-white`
        } font-bold text-[80px]`}
      >
        {children}
      </h1>
    );
  }

  return (
    <h3
      className={`${
        color === "dark" ? `text-primaryBlack` : `text-white`
      } text-primaryBlack font-bold text-[50px]`}
    >
      {children}
    </h3>
  );
};

export default Title;
