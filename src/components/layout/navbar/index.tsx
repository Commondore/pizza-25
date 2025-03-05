import { Logo } from "@/components/layout/logo";
import styles from "./style.module.css";
import { Navigation } from "@/components/layout/navigation";

export const Navbar = () => {
  return (
    <header className={styles.toolbar}>
      <Logo />
      <Navigation />
    </header>
  );
};
