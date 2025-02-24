import { memo, useEffect } from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
  author: string;
}

const PostComponent = ({ title, author }: Props) => {
  useEffect(() => {
    console.log("[Post] effect");
  });

  console.log("[Post] render");
  return (
    <article className={styles.post}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.author}>
        Автор: <span>{author}</span>
      </p>
    </article>
  );
};

export const Post = memo(PostComponent);
