import { createClient, ContentfulClientApi, Entry } from 'contentful'

export class Contentful {
  private client: ContentfulClientApi

  constructor(spaceId: string, token: string) {
    this.client = createClient({
      space: spaceId,
      accessToken: token,
    })
  }

  async fetchContents<T>(query: object): Promise<T[]>  {
    const entries = await this.client.getEntries<T>(query)
      .catch(console.error)
  
    if (!entries) {
      return []
    }
    
    return entries.items.map(entry => entry.fields)
  }

  async fetchContent <T>(id: string): Promise<Entry<T>> {
    return this.client.getEntry<T>(id)
  }
}

export default {
  computed: {
    '$contentful'() {
      return new Contentful(this.$themeConfig.contentful.spaceId, this.$themeConfig.contentful.token)
    }
  },
}