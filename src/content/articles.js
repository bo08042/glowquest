// 好膚道文章載入層。
// 用 Vite 的 import.meta.glob 在建置期把 src/content/articles/*.md 全部打包進來，
// 新增文章只需要在該資料夾放一個 .md 檔（含 frontmatter），不用改任何程式碼。

const modules = import.meta.glob('./articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// 解析 frontmatter 的 YAML 子集：字串值與 [a, b] 形式的陣列
function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) return { meta: {}, body: raw }

  const meta = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    }
    meta[key] = value
  }
  return { meta, body: raw.slice(match[0].length) }
}

export const articles = Object.entries(modules)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw)
    return {
      ...meta,
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      // 檔名以 01-、02- 開頭，直接用路徑排序
      order: path,
      body,
    }
  })
  .sort((a, b) => a.order.localeCompare(b.order))

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug)
}
