import { useCallback, useState } from 'react'
import * as taskService from '../services/taskService'

// 每日任務的 React 介面層。元件只跟這個 hook 互動，
// 不需要知道資料實際存在 localStorage 還是雲端。
export function useDailyTasks() {
  const [state, setState] = useState(taskService.getState)

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
