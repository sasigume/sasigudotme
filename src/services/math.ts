import { ContentfulClientApi, createClient } from "contentful";
import { Math } from "./math.types";

export class MathApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
  }

  convertMath = (rawData): Math => {
    const rawMath = rawData.fields
    return {
      id: rawData.sys.id ?? 1,
      bun: rawMath.bun ?? '以下を計算し答えを求めよ。',
      tex: `$ ` + rawMath.tex + ` $` ?? `$ \int_{1}^{2}(2x-1)^3dx $`,
      syutten: rawMath.syutten ?? 'ニューアクションレジェンド数学II+B',
      level: rawMath.level ?? 2
    };
  };

  async fetchMathEntries(): Promise<Math[]> {
    return await this.client
      .getEntries({
        content_type: "math",
        order: "fields.level"
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const maths = entries.items.map(entry => this.convertMath(entry));
          return maths;
        }
        return [];
      });
  }
}