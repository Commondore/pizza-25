import { Button } from "@/shared/ui/button";

import styles from "./style.module.css";
import { usePizzaContext } from "@/context/pizza-context";

export const ContactData = () => {
  const { ings, price } = usePizzaContext();
  return (
    <div className={styles.contactData}>
      <h3 className={styles.title}>Введите свои данные</h3>
      <form>
        <div className={styles.group}>
          <input className={styles.input} name="name" type="text" placeholder="Ваше имя" />
        </div>
        <div className={styles.group}>
          <input className={styles.input} name="email" type="email" placeholder="Ваш email" />
        </div>
        <div className={styles.group}>
          <input className={styles.input} name="address" type="text" placeholder="Ваш адрес" />
        </div>
        <div className={styles.group}>
          <input className={styles.input} name="phone" type="tel" placeholder="Ваш телефон" />
        </div>
        <div className={styles.group}>
          <Button type={"danger"} action={() => {}}>
            Заказать
          </Button>
        </div>
      </form>
    </div>
  );
};
