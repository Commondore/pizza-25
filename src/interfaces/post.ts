export interface IPost {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export interface PostState extends IPost {
  author: string;
}
