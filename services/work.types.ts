export type Creator = {
  name: string;
  picture: CreatorImage;
  twitter: string;
};

export type CreatorImage = {
  imageUrl: string;
};

export type CoverImage = {
  imageUrl: string;
};

export type Work = {
  id: string;
  content: string;
  excerpt: string;
  date: string;
  url: string;
  slug: string;
  title: string;
  coverImage: CoverImage;
  creator: Creator;
};