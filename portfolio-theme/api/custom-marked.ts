import marked from 'marked'

const renderer = new marked.Renderer()

// renderer.heading = (text: string, level: string): string => {
//   console.log({ text, level })
//   return `<h${level}>Hello</h${level}>`
// }

export default (src: string): string => {
  return marked(src, { renderer })
}