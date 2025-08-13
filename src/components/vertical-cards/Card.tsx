export type CardType = {
  id: number;
  heading: string;
  title: string;
  subtitle: string;
  icon: string;
};

const Card = ({ item, isDark }: { item: CardType; isDark: boolean }) => {
  return (
    <div
      className={`p-[50px] rounded-[60px] text-primaryBlack hover:text-white duration-300 ease-in-out w-full relative overflow-hidden item_card   ${
        isDark ? `bg-primaryYellow ` : `bg-white`
      } `}
    >
      <div className="relative z-20">
        <div className="size-[60px]">
          <img
            src={item.icon}
            alt="card_icon"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-[72px] duration-300 ease-in-out font-bold pt-6 pb-2.5">
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
      <div className="bg-primaryBlack absolute duration-500 ease-in-out -top-14 -left-[65%] -translate-x-[10%] hover_item size-[1100px]"></div>
    </div>
  );
};

export default Card;
