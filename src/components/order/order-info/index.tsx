import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";

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
        <button>отмена</button>
        <button>продолжить</button>
      </div>
    </div>
  );
};
