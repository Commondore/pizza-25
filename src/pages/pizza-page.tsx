import styles from "@/App.module.css";
import { useState } from "react";
import { Ings } from "@/interfaces/pizza";
import { Pizza } from "@/components/pizza";
import { Controls } from "@/components/controls";

const PRICES: Record<string, number> = {
  cheese: 30,
  olives: 60,
  sausage: 70,
  mushrooms: 40,
};

export const PizzaPage = () => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });

  const [price, setPrice] = useState(100);

  const addIng = (ingName: string) => {
    setIngs((ings) => {
      return {
        ...ings,
        [ingName]: ings[ingName] + 1,
      };
    });

    setPrice((price) => price + PRICES[ingName]);
  };

  const removeIng = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, ingName: string) => {
    event.stopPropagation();

    setPrice((price) => price - PRICES[ingName] * ings[ingName]);

    setIngs((ings) => {
      return {
        ...ings,
        [ingName]: 0,
      };
    });
  };

  return (
    <div className={styles.wrapper}>
      <Pizza ings={ings} />
      <Controls ings={ings} addIng={addIng} removeIng={removeIng} price={price} />
    </div>
  );
};
