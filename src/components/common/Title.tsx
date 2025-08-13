const Title = ({
  version = "sm",
  children,
}: {
  version?: "sm" | "lg";
  children: React.ReactNode;
}) => {
  if (version === "lg") {
    return (
      <h1 className="text-primaryBlack font-bold text-[80px] ">{children}</h1>
    );
  }

  return (
    <h3 className="text-primaryBlack font-bold text-[50px]">{children}</h3>
  );
};

export default Title;
