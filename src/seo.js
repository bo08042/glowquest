import { getArticle } from './content/articles'

// 網站部署位置。日後換自有網域時改這裡（以及 vite.config.js 的 base）。
export const SITE = {
  name: '痘掰計畫 GlowQuest',
  origin: 'https://bo08042.github.io',
  base: '/glowquest',
}

const DEFAULT_DESCRIPTION =
  '痘痘衛教知識、生活習慣自我檢視與每日好膚習慣挑戰。本站內容僅供衛教參考，非醫療診斷。'

const STATIC_META = {
  '/': {
    title: '痘掰計畫 GlowQuest — 跟痘痘說掰掰的好膚習慣養成',
    description: DEFAULT_DESCRIPTION,
  },
  '/knowledge': {
    title: '好膚道 — 痘痘衛教知識庫',
    description: '認識痘痘成因、飲食與生活習慣的衛教知識庫，每篇文章標註公信來源。',
  },
  '/self-check': {
    title: '生活習慣自我檢視',
    description: '15 個小問題，檢視哪些日常習慣可能與痘痘生成有關，並取得對應的閱讀與挑戰建議。',
  },
  '/daily-tasks': {
    title: '每日任務 — 好膚習慣挑戰打卡',
    description: '選擇喝水、戒糖、早睡等挑戰，每天打卡累積連續天數，養成好膚習慣。',
  },
  '/about': {
    title: '關於我們／免責聲明',
    description: '痘掰計畫的初衷與免責聲明：本站內容僅供衛教參考，非醫療診斷或治療建議。',
  },
  '/privacy': {
    title: '隱私權政策',
    description: '痘掰計畫的資料蒐集、Cookie 與第三方服務說明。',
  },
}

// pathname 為去除 base 後的站內路徑（React Router 的 location.pathname）
export function getMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname

  const articleMatch = /^\/knowledge\/([^/]+)$/.exec(path)
  if (articleMatch) {
    const article = getArticle(articleMatch[1])
    if (article) {
      return {
        title: `${article.title}｜${SITE.name}`,
        description: article.summary,
      }
    }
  }

  const meta = STATIC_META[path]
  if (meta) {
    const isHome = path === '/'
    return {
      title: isHome ? meta.title : `${meta.title}｜${SITE.name}`,
      description: meta.description,
    }
  }

  return { title: `找不到頁面｜${SITE.name}`, description: DEFAULT_DESCRIPTION }
}
