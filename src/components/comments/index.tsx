import { fetchCommentsByPostId } from "@/api/request";
import { IComment } from "@/interfaces/post";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface Props {
  postId?: number;
}

export const Comments = ({ postId }: Props) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [width, setWidth] = useState<number>(0);
  const refTitle = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (postId) {
      fetchCommentsByPostId(postId).then((data) => {
        setComments(data);
      });
    }
  }, [postId]);

  useLayoutEffect(() => {
    // const timeOut = setTimeout(() => {
    //   alert("Таймаут выполнен");
    // }, 4000);
    // return () => clearTimeout(timeOut);
    if (refTitle.current?.clientWidth) {
      setWidth(refTitle.current?.clientWidth);
    }
  }, []);

  if (!postId)
    return (
      <h3 ref={refTitle} style={{ textAlign: "center", marginTop: "20px" }}>
        Выбирите пост <br />
        Ширина заголовка: {width}
      </h3>
    );

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
};
