export type BlogContent = {
  description: string;
  keyPerformance: string[];
  images: string[];
  matchHighlight: string[];
};

export type BlogAuthor = {
  name: string;
  avatar: string;
  date: string;
  readTime: string;
};

export type BlogItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  content: BlogContent;
  author: BlogAuthor;
  isPopular?: boolean;
};

export type BlogData = BlogItem[];

export enum BlogListType {
  LIST = "list",
  POPULAR = "popular",
}
