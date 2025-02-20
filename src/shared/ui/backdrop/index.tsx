import styles from "./style.module.css";

interface Props {
  show: boolean;
  close: () => void;
}

export const Backdrop = ({ show, close }: Props) =>
  show && <div onClick={close} className={styles.backdrop} />;
