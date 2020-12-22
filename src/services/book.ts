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
      // Contentfulが勝手にstringにしているからintに変換
      count: chapter.count.map(Number) ?? [0, 0, 0, 0]
    }
  }

  convertBook = (rawData): Book => {
    const rawBook = rawData.fields

    // それぞれのチャプターの合計
    let rate, percent, redAllC, redAllT, blackAllC, blackAllT
    if (rawBook.chapters) {
      console.log("data found");
      redAllC = rawBook.chapters.map(function (c) { return c.fields.count.map(Number)[0] }).reduce((a, b) => a + b, 0);
      redAllT = rawBook.chapters.map(function (c) { return c.fields.count.map(Number)[1] }).reduce((a, b) => a + b, 0);
      blackAllC = rawBook.chapters.map(function (c) { return c.fields.count.map(Number)[2] }).reduce((a, b) => a + b, 0);
      blackAllT = rawBook.chapters.map(function (c) { return c.fields.count.map(Number)[3] }).reduce((a, b) => a + b, 0);
      rate = (redAllC + blackAllC) / (redAllT + redAllT)
      percent = Math.floor(rate * 10000) / 100
    } else {
      console.log("この本進捗のデータがないやん! とりあえず0にするで");
      redAllC = 0
      redAllT = 0
      blackAllC = 0
      blackAllT = 0
      percent = 0
    }
    
    const placeHolder = [
      {
        "name": "[章の名前を入力]",
        "count": [0, 0, 0, 0]
      }
    ]

    return {
      id: rawData.sys.id,
      title: rawBook.title,
      slug: rawBook.slug,
      md: rawBook.md ?? "[本の内容]",
      show: rawBook.show ?? true,
      subjects: rawBook.subjects ?? ['教科名1', '教科名2'],
      chapters: rawBook.chapters ? rawBook.chapters.map(chapter => this.convertChapter(chapter.fields)) : placeHolder,
      date: rawData.sys.createdAt,
      count: [redAllC, redAllT, blackAllC, blackAllT],
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
            if ((a.count[0] + a.count[2]) > (b.count[0] + b.count[1])) {
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