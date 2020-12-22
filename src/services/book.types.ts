export type Book = {
  id: string,
  title: string,
  slug: string,
  show: boolean,
  subjects: string[],
  data: object,
  date: string,
  count: number[],
  percent: number
};

export type Chapter = {
  name: string,
  count: number[]
}