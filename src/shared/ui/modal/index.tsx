import styles from "./style.module.css";
import cn from "clsx";

interface Props {
  children: React.ReactNode;
  show: boolean;
}

export const Modal = ({ children, show }: Props) => {
  return <div className={cn(styles.modal, show && styles.show)}>{children}</div>;
};
