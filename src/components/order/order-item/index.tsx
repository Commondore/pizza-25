import { Customer } from "@/interfaces/order";
import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";

interface Props {
  ingredients: Ings;
  customer: Customer;
  price: number;
  number: number;
}

export const OrderItem = ({ ingredients, customer, price, number }: Props) => {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>
        Заказ <strong>#{number}</strong>
      </h3>
      <div className={styles.body}>
        <div>
          <h4 className={styles.title}>Инфо о заказчике:</h4>
          <ul className={styles.customerList}>
            <li className={styles.customerItem}>
              Имя: <span>{customer.name}</span>
            </li>
            <li className={styles.customerItem}>
              Email: <span>{customer.email}</span>
            </li>
            <li className={styles.customerItem}>
              Адрес: <span>{customer.address}</span>
            </li>
            <li className={styles.customerItem}>
              Телефон: <span>{customer.phone}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={styles.title}>Ингредиенты</h4>
          <ul className={styles.ingredientsList}>
            {Object.keys(ingredients).map((ingName) => {
              return (
                <li key={ingName} className={styles.ingredientsItem}>
                  {ingName}: <span>{ingredients[ingName]}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.price}>
          Стоимость: <span>{price}</span> сом
        </div>
      </div>
    </li>
  );
};
