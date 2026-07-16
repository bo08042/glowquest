import { CHALLENGES } from '../data/challenges'
import { useDailyTasks } from '../hooks/useDailyTasks'

export default function DailyTasks() {
  const {
    selectedChallenges,
    todayCheckIns,
    selectChallenges,
    toggleCheckIn,
    getStreak,
  } = useDailyTasks()

  const toggleSelect = (id) => {
    selectChallenges(
      selectedChallenges.includes(id)
        ? selectedChallenges.filter((x) => x !== id)
        : [...selectedChallenges, id],
    )
  }

  const active = CHALLENGES.filter((c) => selectedChallenges.includes(c.id))

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <header>
          <h1 className="text-2xl font-bold text-stone-900">每日任務</h1>
          <p className="mt-1 text-stone-500">
            選擇想挑戰的項目，每天回來打卡，累積連續天數
          </p>
        </header>

        {active.length === 0 ? (
          <p className="rounded-xl bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
            還沒有進行中的挑戰 — 從下方挑幾個開始吧！
          </p>
        ) : (
          <ul className="space-y-3">
            {active.map((c) => {
              const checked = todayCheckIns.includes(c.id)
              const streak = getStreak(c.id)
              return (
                <li
                  key={c.id}
                  className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white px-5 py-4"
                >
                  <span className="text-2xl">{c.emoji}</span>
                  <div className="flex-1">
                    <p className="font-medium text-stone-800">{c.title}</p>
                    {streak > 0 && (
                      <p className="text-xs text-amber-600">🔥 連續 {streak} 天</p>
                    )}
                  </div>
                  <button
                    onClick={() => toggleCheckIn(c.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      checked
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'border border-stone-300 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {checked ? '今日已完成 ✓' : '打卡'}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-stone-900">挑戰清單</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {CHALLENGES.map((c) => {
            const selected = selectedChallenges.includes(c.id)
            return (
              <button
                key={c.id}
                onClick={() => toggleSelect(c.id)}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  selected
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{c.emoji}</span>
                  {selected && <span className="text-sm text-emerald-600">挑戰中</span>}
                </div>
                <p className="mt-2 font-medium text-stone-800">{c.title}</p>
                <p className="mt-1 text-xs text-stone-500">{c.description}</p>
              </button>
            )
          })}
        </div>
      </section>

      <p className="text-xs text-stone-400">
        打卡紀錄目前儲存在你的瀏覽器中（localStorage），清除瀏覽器資料或更換裝置將無法保留紀錄。
      </p>
    </div>
  )
}
