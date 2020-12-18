import { ContentfulClientApi, createClient } from "contentful";
import { Creator, CreatorImage, CoverImage, Work } from "./work.types";
export class WorkApi {
  client: ContentfulClientApi;
  previewClient: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
    
    this.previewClient = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host: 'preview.contentful.com',
    })
  }

  convertCreatorImage = (rawImage): CreatorImage => {
    if (rawImage) {
      return {
        imageUrl: 'https:' + rawImage.fields.file.url ?? null,
        width: rawImage.fields.file.details.image.width ?? null,
        height: rawImage.fields.file.details.image.height ?? null,
      };
    }
    return null;
  };

  convertCoverImage = (rawImage): CoverImage => {
    if (rawImage) {
      return {
        imageUrl: 'https:' + rawImage.fields.file.url ?? null,
        width: rawImage.fields.file.details.image.width ?? null,
        height: rawImage.fields.file.details.image.height ?? null,
      };
    }
    return null;
  };

  convertCreator = (rawCreator): Creator => {
    if (rawCreator) {
      const rawCreatorImage = rawCreator.fields.picture ? rawCreator.fields.picture : null;
      return {
        name: rawCreator.fields.name,
        picture: this.convertCreatorImage(rawCreatorImage),
        twitter: rawCreator.fields.twitter
      };
    }
    return null;
  };

  convertWork = (rawData): Work => {
    const rawWork = rawData.fields;
    const rawCoverImage = rawWork.coverImage ? rawWork.coverImage : null;
    const rawCreator = rawWork.creator ? rawWork.creator : null;
    return {
      id: rawData.sys.id,
      slug: rawWork.slug,
      content: rawWork.content,
      excerpt: rawWork.excerpt ?? 'Workの詳細ページです。',
      date: rawWork.publishedDate,
      url: rawWork.url,
      title: rawWork.title,
      coverImage: this.convertCoverImage(rawCoverImage) ?? null,
      creator: this.convertCreator(rawCreator) ?? null
    }
  };

  async fetchWorkEntries(): Promise<Work[]> {
    return await this.client
      .getEntries({
        content_type: "work",
        order: '-fields.publishedDate'
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const works = entries.items.map(entry => this.convertWork(entry));
          return works;
        }
        return [];
      });
  }
}