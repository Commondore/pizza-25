export interface NavData {
  to: string;
  title: string;
  icon?: string;
}

export const navData: NavData[] = [
  {
    to: "/",
    title: "Конструктор пиццы",
    icon: "FaPizzaSlice",
  },
  {
    to: "/orders",
    title: "Заказы",
    icon: "FaShoppingBasket",
  },
];
