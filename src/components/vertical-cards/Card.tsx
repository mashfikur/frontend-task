import type { CardType } from "@/utils/types";

const Card = ({
  item,
  isDark,
  isElevated,
}: {
  item: CardType;
  isDark: boolean;
  isElevated?: boolean;
}) => {
  return (
    <div
      className={`p-[50px] rounded-[60px] text-primaryBlack hover:text-white duration-300 ease-in-out w-full h-fit relative overflow-hidden group item_card drop-shadow-2xl ${
        isElevated ? `xl:-mt-20` : ``
      }   `}
    >
      <div className="relative z-20">
        <div className="size-8 xl:size-[60px]">
          <img
            src={item.icon}
            alt="card_icon"
            className="w-full h-full object-contain"
          />
        </div>
        <div className=" text-[60px] xl:text-[72px] duration-300 ease-in-out font-bold pt-6 pb-2.5">
          <span>{item.id}</span>
          <span
            className={`duration-300 ease-in-out ${
              !isDark ? `text-primaryYellow` : `text-white`
            }`}
          >
            .
          </span>
        </div>

        <div className="text-2xl font-bold duration-300 ease-in-out">
          {item.heading}
        </div>

        <div className="pt-5">
          <p className="text-xl font-bold duration-300 ease-in-out">
            {item.title}
          </p>
          <p className="text-lg duration-300 ease-in-out"> {item.subtitle} </p>
        </div>
      </div>

      {/* hover overlay */}
      <div className="bg-primaryBlack absolute duration-500 ease-in-out -top-14 -left-[65%] -translate-x-[10%] hover_item size-[1100px] z-10"></div>

      {/* background */}
      <div
        className={`${
          isDark ? `bg-primaryYellow` : `bg-white`
        } absolute w-full h-full top-0 left-0 z-[5] group-hover:bg-transparent duration-500 ease-in-out`}
      ></div>
    </div>
  );
};

export default Card;
