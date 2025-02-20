import styles from "./style.module.css";
import cn from "clsx";

interface Props {
  type?: "success" | "danger" | "warning";
  action: () => void;
  children: React.ReactNode;
}

export const Button = ({ children, type, action }: Props) => {
  return (
    <button className={cn(styles.btn, type && styles[type])} onClick={action}>
      {children}
    </button>
  );
};
