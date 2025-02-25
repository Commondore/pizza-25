import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Post } from "@/components/post";
import { IPost, PostState } from "@/interfaces/post";

function App() {
  const [posts, setPosts] = useState<PostState[]>([]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data: IPost[] = await res.json();

      if (data) {
        setPosts(() => {
          return data.map((item) => {
            return {
              ...item,
              author: "Mike Wazovski",
            };
          });
        });
      }
    };

    getPost();

    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
    //   .then((res) => res.json())
    //   .then((data: IPost[]) => {
    //     setPosts(() => {
    //       return data.map((item) => {
    //         return {
    //           ...item,
    //           author: "Mike Wazovski",
    //         };
    //       });
    //     });
    //   });
  }, []);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Простой блог новостей</h1>
      <main className={styles.list}>
        {posts.map((post) => {
          return <Post key={post.id} title={post.title} author={post.author} />;
        })}
      </main>
      <button onClick={() => setShow(!show)}>Переключить</button>
      {show && (
        <div style={{ textAlign: "center" }}>
          <h2>Полная статья</h2>
        </div>
      )}
    </div>
  );
}

export default App;
