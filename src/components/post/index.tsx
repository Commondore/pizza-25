import { memo } from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
  author: string;
  onSelected: () => void;
}

const PostComponent = ({ title, author, onSelected }: Props) => {
  return (
    <article className={styles.post} onClick={onSelected}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.author}>
        Автор: <span>{author}</span>
      </p>
    </article>
  );
};

export const Post = memo(PostComponent);
