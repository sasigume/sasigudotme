export type Book = {
  id: string,
  title: string,
  slug: string,
  show: boolean,
  subjects: string[],
  data: object,
  date: string
};

export type Chapter = {
  name: string,
  count: number[],
  total: number,
  current: number,
}