import styles from "./style.module.css";

interface Props {
  title: string;
  type: string;
  count: number;
  addIng: () => void;
  removeIng: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const ControlItem = ({ title, type, count, addIng, removeIng }: Props) => {
  return (
    <div className={styles.item} onClick={addIng}>
      <img className={styles.image} src={`/img/${type}-icon.png`} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      {count > 0 ? (
        <div className={styles.count} onClick={removeIng}>
          {count}
        </div>
      ) : null}
    </div>
  );
};
