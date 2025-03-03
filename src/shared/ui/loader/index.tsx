import styles from "./style.module.css";

export const Loader = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.loader}>
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div key={index}></div>
          ))}
      </div>
    </div>
  );
};
