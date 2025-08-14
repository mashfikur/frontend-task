import type { CardType, CarouselType } from "./types";

import icon1 from "@/assets/images/icons/1.png";
import icon2 from "@/assets/images/icons/2.png";
import icon3 from "@/assets/images/icons/3.png";
import icon4 from "@/assets/images/icons/4.png";

export const cards: CardType[] = [
  {
    id: 1,
    heading: "Phasellus Vitae",
    title: "Quisque",
    subtitle: "Porttitor vitae vel amet ",
    icon: icon1,
  },
  {
    id: 2,
    heading: "Iaculis Magna",
    title: "Porttitor",
    subtitle: "neque scelerisque mattis.",
    icon: icon2,
  },
  {
    id: 3,
    heading: "Eleifend Pulvinar ",
    title: "Vitae",
    subtitle: "Consectetur nibh velit",
    icon: icon3,
  },
  {
    id: 4,
    heading: "Velit Odio Phir",
    title: "Ametneq",
    subtitle: "magna consectetur leo.",
    icon: icon4,
  },
];

import carouselImg from "@/assets/images/carousel-img.jpg";

export const CarouselData: CarouselType[] = [
  {
    avatar: carouselImg,
    title: "What our customers thought?",
    subtitle:
      "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. ",
    client: "Holly Davidson",
  },
  {
    avatar:
      "https://images.pexels.com/photos/2794868/pexels-photo-2794868.jpeg",
    title: "What our customers thought?",
    subtitle:
      "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. ",
    client: "Jessica marley",
  },
  {
    avatar:
      "https://images.pexels.com/photos/33418594/pexels-photo-33418594.jpeg",
    title: "What our customers thought?",
    subtitle:
      "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. ",
    client: "David Hudson",
  },
];
