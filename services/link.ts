import { ContentfulClientApi, createClient } from "contentful";
import { Link } from "./link.types";

export class LinkApi {
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

  convertLink = (rawData): Link => {
    const rawLink = rawData.fields
    return {
      order: rawLink.order,
      id: rawData.sys.id,
      label: rawLink.label,
      path: rawLink.path,
      iconStyle: rawLink.iconStyle ?? 'fas',
      iconName: rawLink.iconName ?? 'external-link-alt',
    };
  };

  async fetchLinkEntries(): Promise<Link[]> {
    return await this.client
      .getEntries({
        content_type: "link",
        order: "fields.order"
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const links = entries.items.map(entry => this.convertLink(entry));
          return links;
        }
        return [];
      });
  }
}