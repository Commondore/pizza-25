import styles from "./style.module.css";
import logoImage from "@assets/img/logo.png";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.image} src={logoImage} alt="pizza builder" />
    </div>
  );
};
