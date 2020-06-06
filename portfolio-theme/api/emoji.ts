
const containEmoji = (text: string): boolean => {
  const ranges = ['\ud83c[\udf00-\udfff]', '\ud83d[\udc00-\ude4f]', '\ud83d[\ude80-\udeff]', '\ud7c9[\ude00-\udeff]', '[\u2600-\u27BF]']
  const reg = new RegExp(ranges.join('|'), 'g')
  return !!text.match(reg)
}

const tagToEmoji = (tag: string): string => {
  const tagMap = {
    'ポエム': '🔥',
    'programming': '💻',
  }
  return tagMap[tag] || '📖'
}

export default {
  filters: {
    emoji(post: any): string {
      if (containEmoji(post.title)) {
        return post.title
      } else {
        return tagToEmoji(post.frontmatter.tags[0]) + post.title
      }
    },
  },
}