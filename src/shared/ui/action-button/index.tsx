import React from "react";
import styles from "./style.module.css";

interface Props {
  action: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const ActionButton = ({ action, disabled, children }: Props) => {
  return (
    <button className={styles.btn} onClick={action} disabled={disabled}>
      {children}
    </button>
  );
};
