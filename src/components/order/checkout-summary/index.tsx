import { Pizza } from "@/components/pizza";
import { Ings } from "@/interfaces/pizza";
import { Button } from "@/shared/ui/button";

import styles from "./style.module.css";

interface Props {
  ings: Ings;
}

export const CheckoutSummary = ({ ings }: Props) => {
  return (
    <>
      <Pizza ings={ings} />
      <div className={styles.checkout}>
        <h1 className={styles.title}>Подтвердите свой заказ</h1>
        <div className={styles.controls}>
          <Button action={() => {}} type="danger">
            Отменить
          </Button>
          <Button action={() => {}} type="success">
            Продолжить
          </Button>
        </div>
      </div>
    </>
  );
};
