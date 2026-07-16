import { Link } from 'react-router-dom'
import { articles } from '../content/articles'

export default function Knowledge() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-stone-900">好膚道</h1>
        <p className="mt-1 text-stone-500">通往好膚質的路 — 衛教知識庫</p>
      </header>

      <ul className="space-y-3">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              to={`/knowledge/${article.slug}`}
              className="block rounded-xl border border-stone-200 bg-white px-5 py-4 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-semibold text-stone-800">{article.title}</h2>
                <div className="flex shrink-0 gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-1.5 text-sm text-stone-500">{article.summary}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-stone-400">
        文章內容整理自公開衛教資訊，各篇文末標註參考來源。本站內容僅供衛教參考，非醫療建議。
      </p>
    </div>
  )
}
