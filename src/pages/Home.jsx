import { Link } from 'react-router-dom'

const features = [
  {
    to: '/knowledge',
    emoji: '📖',
    title: '好膚道',
    description: '認識痘痘成因、飲食與生活習慣的衛教知識庫',
  },
  {
    to: '/self-check',
    emoji: '📝',
    title: '習慣自我檢視',
    description: '快速檢視哪些日常習慣可能與痘痘生成有關',
  },
  {
    to: '/daily-tasks',
    emoji: '✅',
    title: '每日任務',
    description: '選定挑戰、每天打卡，累積屬於你的好膚習慣',
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4 pt-8 text-center">
        <h1 className="text-4xl font-bold text-stone-900">
          跟痘痘說<span className="text-emerald-600">掰掰</span>
        </h1>
        <p className="mx-auto max-w-xl text-stone-600">
          痘掰計畫 GlowQuest
          陪你認識痘痘、檢視生活習慣，一天一個小任務，慢慢養成好膚質的日常。
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Link
            to="/daily-tasks"
            className="rounded-full bg-emerald-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-emerald-700"
          >
            開始今日挑戰
          </Link>
          <Link
            to="/self-check"
            className="rounded-full border border-stone-300 px-6 py-2.5 font-medium text-stone-700 transition-colors hover:bg-stone-100"
          >
            檢視我的習慣
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {features.map(({ to, emoji, title, description }) => (
          <Link
            key={to}
            to={to}
            className="rounded-2xl border border-stone-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="text-3xl">{emoji}</div>
            <h2 className="mt-3 font-semibold text-stone-900">{title}</h2>
            <p className="mt-1 text-sm text-stone-500">{description}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}
