import { usePizzaContext } from "@/context/pizza-context";
import styles from "../App.module.css";
import { CheckoutSummary } from "@/components/order/checkout-summary";

export const CheckoutPage = () => {
  const { ings } = usePizzaContext();

  return (
    <div className={styles.checkout}>
      <CheckoutSummary ings={ings} />
    </div>
  );
};
