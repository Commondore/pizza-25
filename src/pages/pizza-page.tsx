import styles from "@/App.module.css";
import { useState } from "react";
import { Pizza } from "@/components/pizza";
import { Controls } from "@/components/controls";
import { Modal } from "@/shared/ui/modal";
import { OrderInfo } from "@/components/order/order-info";
import { usePizzaContext } from "@/context/pizza-context";

export const PizzaPage = () => {
  const { ings, price, addIng, removeIng } = usePizzaContext();

  const [purchasing, setPurchasing] = useState(false);

  const isPurchasing = () => {
    const ingCount = Object.values(ings).reduce((acc, count) => acc + count, 0);

    return ingCount > 0;
  };

  const continuePurchasing = () => setPurchasing(true);

  const cancelPurchasing = () => setPurchasing(false);

  return (
    <div className={styles.wrapper}>
      <Modal show={purchasing} close={cancelPurchasing}>
        <OrderInfo ings={ings} price={price} cancel={cancelPurchasing} />
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
