import * as Contentful from 'contentful'

export const createClient = (spaceId, token) => {
  return Contentful.createClient({
    space: spaceId,
    accessToken: token,
  })
}

export const fetchContents = async (client, query) => {
  const entries = await client.getEntries(query)
    .catch(console.error)

  if (!entries) {
    return []
  }
  
  return entries.items.map(entry => entry.fields)
}

export const fetchContent = async (client, id) => {
  return client.getEntry(id)
    .catch(console.error)
}