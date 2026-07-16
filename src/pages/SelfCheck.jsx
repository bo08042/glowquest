import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DIMENSIONS, QUESTIONS, scoreByDimension } from '../data/selfCheck'
import { CHALLENGES } from '../data/challenges'
import * as selfCheckService from '../services/selfCheckService'

// Tailwind 無法解析動態組出的 class 名稱，等級顏色需列成靜態對照表
const levelStyles = {
  low: { badge: 'bg-emerald-100 text-emerald-800', bar: 'bg-emerald-500' },
  mid: { badge: 'bg-amber-100 text-amber-800', bar: 'bg-amber-500' },
  high: { badge: 'bg-rose-100 text-rose-700', bar: 'bg-rose-500' },
}

function Questionnaire({ answers, setAnswers, onSubmit }) {
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === QUESTIONS.length

  return (
    <div className="space-y-8">
      {DIMENSIONS.map((dim) => (
        <section key={dim.id} className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-stone-900">
            <span>{dim.emoji}</span>
            {dim.title}
          </h2>
          {QUESTIONS.filter((q) => q.dimension === dim.id).map((q) => (
            <fieldset
              key={q.id}
              className="rounded-xl border border-stone-200 bg-white p-5"
            >
              <legend className="sr-only">{q.text}</legend>
              <p className="font-medium text-stone-800">{q.text}</p>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, idx) => {
                  const selected = answers[q.id] === idx
                  return (
                    <label
                      key={idx}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selected
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                          : 'border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={selected}
                        onChange={() => setAnswers({ ...answers, [q.id]: idx })}
                        className="accent-emerald-600"
                      />
                      {opt.text}
                    </label>
                  )
                })}
              </div>
            </fieldset>
          ))}
        </section>
      ))}

      <div className="sticky bottom-4">
        <button
          onClick={onSubmit}
          disabled={!allAnswered}
          className="w-full rounded-full bg-emerald-600 py-3 font-medium text-white shadow-lg transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          {allAnswered
            ? '看看我的檢視結果'
            : `已完成 ${answeredCount} / ${QUESTIONS.length} 題`}
        </button>
      </div>
    </div>
  )
}

function Results({ answers, completedAt, onRestart }) {
  const results = scoreByDimension(answers)
  const sorted = [...results].sort((a, b) => b.score - a.score)
  const focus = sorted.filter((r) => r.level.key !== 'low').slice(0, 2)

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h2 className="font-semibold text-stone-900">各面向檢視結果</h2>
          {completedAt && (
            <span className="text-xs text-stone-400">
              檢視於 {new Date(completedAt).toLocaleDateString('zh-TW')}
            </span>
          )}
        </div>
        {results.map((r) => {
          const style = levelStyles[r.level.key]
          return (
            <div key={r.id} className="rounded-xl border border-stone-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-stone-800">
                  {r.emoji} {r.title}
                </span>
                <span className={`rounded-full px-3 py-0.5 text-xs ${style.badge}`}>
                  {r.level.label}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-100">
                <div
                  className={`h-full rounded-full ${style.bar}`}
                  style={{ width: `${(r.score / r.maxScore) * 100}%` }}
                />
              </div>
            </div>
          )
        })}
      </section>

      {focus.length > 0 ? (
        <section className="space-y-4">
          <h2 className="font-semibold text-stone-900">建議優先檢視的面向</h2>
          {focus.map((r) => (
            <div
              key={r.id}
              className="space-y-3 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5"
            >
              <p className="font-medium text-stone-800">
                {r.emoji} {r.title}
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-stone-500">推薦閱讀：</p>
                {r.articles.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/knowledge/${a.slug}`}
                    className="block text-emerald-700 hover:underline"
                  >
                    📖 {a.title}
                  </Link>
                ))}
              </div>
              {r.challenges.length > 0 && (
                <div className="space-y-1 text-sm">
                  <p className="text-stone-500">適合你的每日任務挑戰：</p>
                  <div className="flex flex-wrap gap-2">
                    {r.challenges.map((id) => {
                      const c = CHALLENGES.find((x) => x.id === id)
                      return (
                        <span
                          key={id}
                          className="rounded-full bg-white px-3 py-1 text-stone-700 ring-1 ring-stone-200"
                        >
                          {c.emoji} {c.title}
                        </span>
                      )
                    })}
                  </div>
                  <Link
                    to="/daily-tasks"
                    className="inline-block pt-1 text-emerald-700 hover:underline"
                  >
                    → 前往每日任務開始挑戰
                  </Link>
                </div>
              )}
            </div>
          ))}
        </section>
      ) : (
        <section className="rounded-xl bg-emerald-50 p-5 text-emerald-900">
          <p className="font-medium">目前的生活習慣整體來說相當不錯！</p>
          <p className="mt-1 text-sm">
            繼續保持，也歡迎到「每日任務」挑戰自己，或到「好膚道」看看更多知識。
          </p>
        </section>
      )}

      <button
        onClick={onRestart}
        className="rounded-full border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100"
      >
        重新檢視一次
      </button>

      <p className="text-sm text-stone-400">
        本結果僅為生活習慣的自我整理，反映的是「與痘痘生成相關的習慣風險」，並非膚況評估或醫療診斷。如有皮膚困擾，請諮詢皮膚科醫師。
      </p>
    </div>
  )
}

export default function SelfCheck() {
  // 進入頁面時載入上一次完成的紀錄；有紀錄就直接顯示結果。
  // 在 mount 後才讀取 — 頁面經過預渲染（SSG），
  // 伺服端沒有 localStorage，hydrate 時兩端初始畫面必須一致。
  const [lastResult, setLastResult] = useState(null)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const saved = selfCheckService.getLastResult()
    if (saved) {
      setLastResult(saved)
      setSubmitted(true)
    }
  }, [])

  // 重新作答：清空表單但保留舊紀錄，完成送出時才覆蓋
  const restart = () => {
    setAnswers({})
    setSubmitted(false)
    window.scrollTo({ top: 0 })
  }

  const submit = () => {
    setLastResult(selfCheckService.saveResult(answers))
    setSubmitted(true)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-stone-900">生活習慣自我檢視</h1>
        <p className="mt-1 text-stone-500">
          {submitted
            ? '這是你最近一次的生活習慣整理結果'
            : '15 個小問題，檢視哪些日常習慣可能與痘痘生成有關'}
        </p>
      </header>

      {submitted && lastResult ? (
        <Results
          answers={lastResult.answers}
          completedAt={lastResult.completedAt}
          onRestart={restart}
        />
      ) : (
        <>
          {lastResult && (
            <div className="flex items-center justify-between rounded-xl bg-stone-100 px-5 py-3 text-sm text-stone-600">
              <span>你有一份先前的檢視結果，完成本次作答後將會覆蓋。</span>
              <button
                onClick={() => setSubmitted(true)}
                className="shrink-0 text-emerald-700 hover:underline"
              >
                查看上次結果
              </button>
            </div>
          )}
          <Questionnaire answers={answers} setAnswers={setAnswers} onSubmit={submit} />
        </>
      )}
    </div>
  )
}
