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
      count: chapter.count ?? [0,0,0,0],
    }
  }

  convertBook = (rawData): Book => {
    const rawBook = rawData.fields

    // それぞれのチャプターの合計
    let redAllC, redAllT, blackAllC, blackAllT
    if(rawBook.data.some(chapter => chapter.count)) {
      console.log("data found");
      redAllC = rawBook.data.map(function(c){ return c.count[0] }).reduce((a, b) => a + b, 0);
      redAllT = rawBook.data.map(function(c){ return c.count[1] }).reduce((a, b) => a + b, 0);
      blackAllC = rawBook.data.map(function(c){ return c.count[2] }).reduce((a, b) => a + b, 0);
      blackAllT = rawBook.data.map(function(c){ return c.count[3] }).reduce((a, b) => a + b, 0);
    } else {
      console.log("この本進捗のデータがないやん! とりあえず0にするで");
      redAllC = 0
      redAllT = 0
      blackAllC = 0
      blackAllT = 0
    }
    const rate = (redAllC + blackAllC) / (redAllT + redAllT)
    const percent = Math.floor(rate * 10000) / 100
    return {
      id: rawData.sys.id,
      title: rawBook.title,
      slug: rawBook.slug,
      show: rawBook.show ?? true,
      subjects: rawBook.subjects ?? ['教科名1', '教科名2'],
      data: rawBook.data.map(chapter => this.convertChapter(chapter)) ?? null,
      date: rawData.sys.createdAt,
      count: [redAllC,redAllT,blackAllC,blackAllT],
      percent: percent
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
          return books.sort((a, b) => {
            // 達成度が低い順にソート
            if ((a.count[0]+ a.count[2]) > (b.count[0]+b.count[1])) {
              return 1
            } else {
              return -1
            }
          })
        }
        return [];
      });
  }
}