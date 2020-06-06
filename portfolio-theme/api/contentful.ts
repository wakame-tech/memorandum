import * as Contentful from 'contentful'

export const createClient = (spaceId: string, token: string) => {
  return Contentful.createClient({
    space: spaceId,
    accessToken: token,
  })
}

export const fetchContents = async <T>(client: Contentful.ContentfulClientApi, query: object): Promise<T[]> => {
  const entries = await client.getEntries<T>(query)
    .catch(console.error)

  if (!entries) {
    return []
  }
  
  return entries.items.map(entry => entry.fields)
}

export const fetchContent = async <T>(client: Contentful.ContentfulClientApi, id: string): Promise<Contentful.Entry<T>> => {
  return client.getEntry<T>(id)
}