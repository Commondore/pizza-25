export interface NavData {
  to: string;
  title: string;
}

export const navData: NavData[] = [
  {
    to: "/",
    title: "Конструктор пиццы",
  },
  {
    to: "/orders",
    title: "Заказы",
  },
];
