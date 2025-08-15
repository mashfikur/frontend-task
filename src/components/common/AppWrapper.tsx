import { ReactLenis } from "lenis/react";
import Preloader from "@/components/common/Preloader";
import { useEffect, useState } from "react";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setIsLoading(false); // giving an aritifical delay
      }, 1500);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      <ReactLenis root />
      {!isLoading && children}
      <Preloader isLoading={isLoading} />
    </>
  );
};

export default AppWrapper;
