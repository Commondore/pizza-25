import { NavLink } from "react-router";
import cn from "clsx";
import { navData } from "@/components/layout/navigation/nav";
import styles from "./style.module.css";
import { DynamicIcon, IconType } from "@/shared/ui/dynamic-icon";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {navData.map((item) => {
        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => {
              return cn(styles.link, isActive && styles.active);
            }}
          >
            <DynamicIcon name={item.icon as IconType} />
            <span>{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};
