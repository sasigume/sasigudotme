import { ContentfulClientApi, createClient } from "contentful";
import { Profile } from "./profile.types";

export class ProfileApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
  }

  convertProfile = (rawData): Profile => {
    const rawProfile = rawData.fields
    return {
      id: rawData.sys.id,
      slug: rawProfile.slug,
      date: rawProfile.date,
      label: rawProfile.label,
      iconStyle: rawProfile.iconStyle ? rawProfile.iconStyle : 'fas',
      iconName: rawProfile.iconName ? rawProfile.iconName : 'clock',
    };
  };

  async fetchProfileEntries(): Promise<Profile[]> {
    return await this.client
      .getEntries({
        content_type: "profile",
        order: "-fields.date"
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const profiles = entries.items.map(entry => this.convertProfile(entry));
          return profiles;
        }
        return [];
      });
  }
}