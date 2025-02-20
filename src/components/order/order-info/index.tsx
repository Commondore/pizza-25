import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";
import { Button } from "@/shared/ui/button";

interface Props {
  ings: Ings;
  price: number;
}

export const OrderInfo = ({ ings, price }: Props) => {
  return (
    <div>
      <h3 className={styles.title}>Ваш заказ!</h3>
      <p className={styles.desc}>Состоит из следующих ингредиентов:</p>
      <ul className={styles.list}>
        {Object.keys(ings).map((ingName) => {
          return (
            <li className={styles.item}>
              <span>{ingName}</span>:<span className={styles.count}>{ings[ingName]}</span>
            </li>
          );
        })}
      </ul>
      <div className={styles.price}>
        Цена заказа: <span>{price}</span> сом
      </div>
      <div className={styles.controls}>
        <Button action={() => {}} type="success">
          продолжить
        </Button>
        <Button action={() => {}} type="danger">
          отмена
        </Button>
      </div>
    </div>
  );
};
