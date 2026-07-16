// 每日任務的資料存取層。
//
// UI 元件一律透過這層讀寫資料，不直接操作 localStorage —
// Phase 2 要接 Firebase/Supabase 做跨裝置同步時，
// 只需替換這個檔案的內部實作，UI 完全不用動。

const STORAGE_KEY = 'glowquest.dailyTasks.v1'

const emptyState = () => ({
  selectedChallenges: [],
  checkIns: {}, // { 'YYYY-MM-DD': ['challengeId', ...] }
})

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyState()
    const parsed = JSON.parse(raw)
    return { ...emptyState(), ...parsed }
  } catch {
    return emptyState()
  }
}

function save(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  return state
}

export function todayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function getState() {
  return load()
}

export function setSelectedChallenges(ids) {
  const state = load()
  state.selectedChallenges = ids
  return save(state)
}

export function toggleCheckIn(challengeId, dateKey = todayKey()) {
  const state = load()
  const day = new Set(state.checkIns[dateKey] ?? [])
  if (day.has(challengeId)) {
    day.delete(challengeId)
  } else {
    day.add(challengeId)
  }
  state.checkIns[dateKey] = [...day]
  return save(state)
}

// 從今天（或昨天）往回數連續打卡天數。
// 允許「今天還沒打卡」時仍顯示到昨天為止的連續紀錄。
export function getStreak(challengeId, state = load()) {
  const done = (key) => (state.checkIns[key] ?? []).includes(challengeId)

  const cursor = new Date()
  if (!done(todayKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1)
  }

  let streak = 0
  while (done(todayKey(cursor))) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}
