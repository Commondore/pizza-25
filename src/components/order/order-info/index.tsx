import { Ings } from "@/interfaces/pizza";
import { Button } from "@/shared/ui/button";
import { useNavigate } from "react-router";

import styles from "./style.module.css";

interface Props {
  ings: Ings;
  price: number;
  cancel: () => void;
}

export const OrderInfo = ({ ings, price, cancel }: Props) => {
  const navigate = useNavigate();

  const continueOrder = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <h3 className={styles.title}>Ваш заказ!</h3>
      <p className={styles.desc}>Состоит из следующих ингредиентов:</p>
      <ul className={styles.list}>
        {Object.keys(ings).map((ingName) => {
          return (
            <li key={ingName} className={styles.item}>
              <span>{ingName}</span>:<span className={styles.count}>{ings[ingName]}</span>
            </li>
          );
        })}
      </ul>
      <div className={styles.price}>
        Цена заказа: <span>{price}</span> сом
      </div>
      <div className={styles.controls}>
        <Button action={continueOrder} type="success">
          продолжить
        </Button>
        <Button action={cancel} type="danger">
          отмена
        </Button>
      </div>
    </div>
  );
};
