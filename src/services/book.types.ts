export type Book = {
  id: string,
  title: string,
  slug: string,
  md: string,
  show: boolean,
  subjects: string[],
  chapters: object,
  dateCreated: string,
  dateGet: string,
  bought: boolean,
  count: number[],
  percent: number
};

export type Chapter = {
  name: string,
  count: number[]
}