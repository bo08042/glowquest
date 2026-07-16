import { useCallback, useEffect, useState } from 'react'
import * as taskService from '../services/taskService'

// 每日任務的 React 介面層。元件只跟這個 hook 互動，
// 不需要知道資料實際存在 localStorage 還是雲端。
//
// 注意：初始狀態為空、mount 後才讀取儲存的資料 —
// 頁面經過預渲染（SSG），伺服端沒有 localStorage，
// hydrate 時兩端的初始畫面必須一致。
export function useDailyTasks() {
  const [state, setState] = useState({ selectedChallenges: [], checkIns: {} })

  useEffect(() => {
    setState(taskService.getState())
  }, [])

  const selectChallenges = useCallback((ids) => {
    setState(taskService.setSelectedChallenges(ids))
  }, [])

  const toggleCheckIn = useCallback((challengeId) => {
    setState(taskService.toggleCheckIn(challengeId))
  }, [])

  const today = taskService.todayKey()
  const todayCheckIns = state.checkIns[today] ?? []

  const getStreak = useCallback(
    (challengeId) => taskService.getStreak(challengeId, state),
    [state],
  )

  return {
    selectedChallenges: state.selectedChallenges,
    todayCheckIns,
    selectChallenges,
    toggleCheckIn,
    getStreak,
  }
}
