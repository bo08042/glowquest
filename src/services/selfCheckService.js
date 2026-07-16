// 生活習慣自我檢視的作答紀錄存取層。
// 與 taskService 相同的設計：UI 不直接操作 localStorage，
// 日後接雲端同步時只需替換此檔內部實作。
//
// 儲存策略：只保存「最後一次完成的作答」。
// 重新作答期間不動舊紀錄，直到使用者完成並送出才覆蓋。

// key 沿用改名前的 glowquest 前綴：改 key 會讓既有使用者的紀錄消失
const STORAGE_KEY = 'glowquest.selfCheck.v1'

export function getLastResult() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed.answers !== 'object') return null
    return parsed
  } catch {
    return null
  }
}

export function saveResult(answers) {
  const result = { answers, completedAt: new Date().toISOString() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(result))
  return result
}
