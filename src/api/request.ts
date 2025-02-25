import ky from "ky";
import { IComment, IPost } from "@/interfaces/post";
import { IUser } from "@/interfaces/user";

const request = ky.create({ prefixUrl: import.meta.env.VITE_BLOG_API });

export const fetchPosts = (limit?: number): Promise<IPost[]> => {
  return request
    .get("posts", {
      searchParams: {
        _limit: limit ? limit : 10,
      },
    })
    .json();
};

export const fetchUserById = (id: number): Promise<IUser> => {
  return request.get(`users/${id}`).json();
};

export const fetchCommentsByPostId = (postId: number): Promise<IComment[]> => {
  return request
    .get("comments", {
      searchParams: {
        postId,
      },
    })
    .json();
};
