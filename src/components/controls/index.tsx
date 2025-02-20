import { Ings } from "@/interfaces/pizza";
import styles from "./style.module.css";
import { ControlItem } from "@/components/controls/control-item";
import { ActionButton } from "@/shared/ui/action-button";

interface Props {
  ings: Ings;
  addIng: (ingName: string) => void;
  removeIng: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, ingName: string) => void;
  price: number;
  purchasable: boolean;
}

const CONTROLS: Record<string, string> = {
  cheese: "Сыр",
  sausage: "Перерони",
  mushrooms: "Грибы",
  olives: "Оливки",
};

export const Controls = ({ ings, addIng, removeIng, price, purchasable }: Props) => {
  return (
    <div>
      <h3 className={styles.title}>Выбирите ингредиент</h3>
      <div className={styles.controls}>
        {Object.keys(ings).map((ingName) => {
          return (
            <ControlItem
              key={ingName}
              title={CONTROLS[ingName]}
              type={ingName}
              count={ings[ingName]}
              addIng={() => addIng(ingName)}
              removeIng={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                removeIng(event, ingName)
              }
            />
          );
        })}
      </div>
      <div className={styles.price}>
        Сумма заказа: <span>{price}</span>
      </div>
      <div className={styles.order}>
        <ActionButton action={() => {}} disabled={!purchasable}>
          Оформить заказ
        </ActionButton>
      </div>
    </div>
  );
};
