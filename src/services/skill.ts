import { ContentfulClientApi, createClient } from "contentful";
import { stringify } from "postcss";
import { Skill } from "./skill.types";

export class SkillApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
  }

  convertSkill = (rawData): Skill => {
    const rawSkill = rawData.fields
    return {
      id: rawData.sys.id,
      label: rawSkill.label,
      iconStyle: rawSkill.iconStyle ? rawSkill.iconStyle : 'fas',
      iconName: rawSkill.iconName ? rawSkill.iconName : 'check-square',
      level: rawSkill.level,
      slot: rawSkill.slot ?? null,
      type: rawSkill.type ?? 'other',
      power: rawSkill.power ?? 10,
      start: rawSkill.start ?? null,
      lastUsed: rawSkill.lastUsed ?? null,
      description: rawSkill.description ?? ''
    };
  };

  async fetchSkillEntries(): Promise<Skill[]> {
    return await this.client
      .getEntries({
        content_type: "skill",
        order: "-fields.level"
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const skills = entries.items.map(entry => this.convertSkill(entry));
          return skills;
        }
        return [];
      });
  }
}