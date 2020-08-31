import NotionClient from 'notion-api-js'
import { PageDTO } from 'notion-api-js/dist/lib/types'

class Notion {
  private notionClient: NotionClient

  constructor(token: string) {
    this.notionClient = new NotionClient({
      token,
      options: {
        pageUrl: '/wakamelog/',
      }
    })
  }

  getPage(pageId: string): Promise<PageDTO> {
    return this.notionClient.getPageById(pageId)
  }
}

export default {
  computed: {
    '$notion'(): Notion | null {
      const token = this.$themeConfig?.notion?.token
      if (!token) {
        return null
      }
      return new Notion(token)
    }
  },
}