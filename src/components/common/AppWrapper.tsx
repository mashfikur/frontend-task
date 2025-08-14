import { ReactLenis } from "lenis/react";
const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReactLenis root />
      {children}
    </>
  );
};

export default AppWrapper;
