import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Post } from "@/components/post";
import { PostState } from "@/interfaces/post";
import { fetchPosts, fetchUserById } from "@/api/request";
import { IUser } from "@/interfaces/user";
import { Comments } from "@/components/comments";

function App() {
  const [posts, setPosts] = useState<PostState[]>([]);
  const [show, setShow] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState<number>();

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPosts(6);

      if (data) {
        let author: IUser | null = null;
        const posts = await Promise.all(
          data.map(async (item) => {
            if (!author || author.id !== item.userId) {
              author = await fetchUserById(item.userId);
            }

            return {
              ...item,
              author: author.name,
            };
          })
        );

        setPosts(posts);
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
          return (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              onSelected={() => setSelectedPostId(post.id)}
            />
          );
        })}
      </main>
      <button onClick={() => setShow(!show)}>Переключить</button>
      {show && <Comments postId={selectedPostId} />}
    </div>
  );
}

export default App;
