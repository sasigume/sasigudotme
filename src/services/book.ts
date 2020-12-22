import { ContentfulClientApi, createClient } from "contentful";
import { Book, Chapter } from "./book.types";

export class BookApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
  }

  convertChapter = (chapter): Chapter => {
    return {
      name: chapter.name ?? "章のタイトル",
      count: chapter.count ?? [30,60,20,40],
      total: (chapter.count[1] + chapter.count[3]),
      current: (chapter.count[0] + chapter.count[2])
    }
  }

  convertBook = (rawData): Book => {
    const rawBook = rawData.fields
    return {
      id: rawData.sys.id,
      title: rawBook.title,
      slug: rawBook.slug,
      show: rawBook.show ?? true,
      subjects: rawBook.subjects ?? ['教科名1', '教科名2'],
      data: rawBook.data.map(chapter => this.convertChapter(chapter)) ?? null,
      date: rawData.sys.createdAt
    }
  }

  async fetchBookEntries(): Promise<Book[]> {
    return await this.client
      .getEntries({
        content_type: "book",
        order: "-sys.createdAt"
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const books = entries.items.map(entry => this.convertBook(entry));
          return books;
        }
        return [];
      });
  }
}