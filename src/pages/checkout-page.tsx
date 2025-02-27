import { useState } from "react";
import { Ings } from "@/interfaces/pizza";

import styles from "../App.module.css";
import { CheckoutSummary } from "@/components/order/checkout-summary";

export const CheckoutPage = () => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 1,
    olives: 1,
    sausage: 1,
    mushrooms: 1,
  });

  return (
    <div className={styles.checkout}>
      <CheckoutSummary ings={ings} />
    </div>
  );
};
