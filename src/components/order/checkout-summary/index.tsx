import { Pizza } from "@/components/pizza";
import { Ings } from "@/interfaces/pizza";
import { Button } from "@/shared/ui/button";
import { Outlet, useNavigate } from "react-router";

import styles from "./style.module.css";

interface Props {
  ings: Ings;
}

export const CheckoutSummary = ({ ings }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <Pizza ings={ings} />
      <div className={styles.checkout}>
        <h1 className={styles.title}>Подтвердите свой заказ</h1>
        <div className={styles.controls}>
          <Button action={() => navigate("/")} type="danger">
            Отменить
          </Button>
          <Button action={() => navigate("/checkout/contact-data")} type="success">
            Продолжить
          </Button>
        </div>
        <Outlet />
      </div>
    </>
  );
};
