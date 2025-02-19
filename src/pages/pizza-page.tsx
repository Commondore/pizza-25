import styles from "@/App.module.css";
import { useState } from "react";
import { Ings } from "@/interfaces/pizza";
import { Pizza } from "@/components/pizza";

export const PizzaPage = () => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 1,
    olives: 1,
    sausage: 1,
    mushrooms: 1,
  });

  return (
    <div className={styles.wrapper}>
      <Pizza ings={ings} />
      <div>Кнопки добавления ингридиентов</div>
    </div>
  );
};
