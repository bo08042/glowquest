import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMeta } from '../seo'

// 客戶端切換路由時更新 title 與 meta description。
// 首次載入的 head 由預渲染（scripts/prerender.mjs）產生，這裡負責之後的切頁。
export default function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getMeta(pathname)
    document.title = meta.title

    let el = document.querySelector('meta[name="description"]')
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('name', 'description')
      document.head.appendChild(el)
    }
    el.setAttribute('content', meta.description)
  }, [pathname])

  return null
}
