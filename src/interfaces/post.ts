export interface IPost {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export interface PostState extends IPost {
  author: string;
}

export interface IComment {
  id: number;
  postId: number;
  body: string;
  name: string;
  email: string;
}
