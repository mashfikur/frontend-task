import clsx from "clsx";
import { CirclesWithBar } from "react-loader-spinner";

const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  const commonClass = `fixed left-0 w-full h-screen preloader z-[50]`;

  return (
    <>
      <div
        className={clsx(
          commonClass,
          ` top-0 bg-primaryYellow shape-reverse ${
            isLoading ? `` : `hide-reverse`
          } `
        )}
      ></div>
      <div
        className={clsx(
          commonClass,
          ` bottom-0 bg-primaryBlack shape ${isLoading ? `` : `hide`}`
        )}
      ></div>

      {/* circle ball */}
      <div
        className={`fixed w-full h-full top-0 left-0 z-[100] flex items-center justify-center duration-300 ease-in-out  ${
          !isLoading ? `scale-0 opacity-0 invisible` : ``
        } `}
      >
        <CirclesWithBar
          height="130"
          width="130"
          color="white"
          outerCircleColor="white"
          innerCircleColor="white"
          barColor="white"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Preloader;
