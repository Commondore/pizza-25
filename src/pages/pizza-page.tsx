import styles from "@/App.module.css";
import { useState } from "react";
import { Ings } from "@/interfaces/pizza";
import { Pizza } from "@/components/pizza";
import { Controls } from "@/components/controls";
import { Modal } from "@/shared/ui/modal";
import { OrderInfo } from "@/components/order/order-info";

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

  const [purchasing, setPurchasing] = useState(false);

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

  const isPurchasing = () => {
    const ingCount = Object.values(ings).reduce((acc, count) => acc + count, 0);

    return ingCount > 0;
  };

  const continuePurchasing = () => setPurchasing(true);

  return (
    <div className={styles.wrapper}>
      <Modal show={purchasing}>
        <OrderInfo ings={ings} price={price} />
      </Modal>
      <Pizza ings={ings} />
      <Controls
        ings={ings}
        addIng={addIng}
        removeIng={removeIng}
        price={price}
        purchasable={isPurchasing()}
        continuePurchasing={continuePurchasing}
      />
    </div>
  );
};
