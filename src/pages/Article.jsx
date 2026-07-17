import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticle } from '../content/articles'

// Markdown 內的連結處理：
// - './slug' 形式視為站內文章連結
// - '/path' 形式視為站內頁面連結（如 /self-check）
// - 外部連結一律另開分頁
function MarkdownLink({ href = '', children }) {
  if (href.startsWith('./')) {
    return (
      <Link to={`/knowledge/${href.slice(2)}`} className="text-emerald-700">
        {children}
      </Link>
    )
  }
  if (href.startsWith('/')) {
    return (
      <Link to={href} className="text-emerald-700">
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-700">
      {children}
    </a>
  )
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) {
    return (
      <div className="space-y-4 py-12 text-center">
        <p className="text-stone-500">找不到這篇文章。</p>
        <Link to="/knowledge" className="text-emerald-700 hover:underline">
          回到好膚道
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link
        to="/knowledge"
        className="inline-block text-sm text-stone-400 hover:text-stone-700"
      >
        ← 回到好膚道
      </Link>

      <article className="prose prose-stone mt-10 max-w-none prose-headings:text-stone-900 prose-a:text-emerald-700">
        <Markdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
          {article.body}
        </Markdown>
      </article>
    </div>
  )
}
