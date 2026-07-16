import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="space-y-4 py-16 text-center">
      <p className="text-5xl">🫥</p>
      <h1 className="text-xl font-bold text-stone-900">找不到這個頁面</h1>
      <p className="text-stone-500">網址可能有誤，或頁面已經搬家了。</p>
      <Link to="/" className="inline-block text-emerald-700 hover:underline">
        ← 回到首頁
      </Link>
    </div>
  )
}
