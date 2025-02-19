import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";
import { Ingredient } from "@/components/pizza/ingredient";

interface Props {
  ings: Ings;
}

export const Pizza = ({ ings }: Props) => {
  const list = Object.keys(ings).filter((ingName) => ings[ingName] !== 0);

  return (
    <div className={styles.pizza}>
      {!list.length ? (
        <h1 className={styles.title}>Добавьте ингредиенты</h1>
      ) : (
        list.map((ingName) => {
          return <Ingredient key={ingName} type={ingName} />;
        })
      )}
    </div>
  );
};
