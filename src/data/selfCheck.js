// 生活習慣自我檢視的題庫與計分設定。
//
// 計分方式：每題選項 0-2 分，分數越高代表該習慣與痘痘生成的關聯風險越高。
// 每個維度 3 題（滿分 6 分），依總分歸類為低/中/偏高三個等級。
// 這是生活習慣的自我整理工具，不是醫療檢測 — 文案用詞請維持這個定位。

export const DIMENSIONS = [
  {
    id: 'diet',
    emoji: '🍱',
    title: '飲食習慣',
    articles: [
      { slug: 'diet-and-acne', title: '飲食與痘痘的關聯' },
      { slug: 'whole-vs-processed-food', title: '原型食物 vs 加工食物' },
    ],
    challenges: ['noSugar', 'wholeFood', 'water2000'],
  },
  {
    id: 'sleep',
    emoji: '🌙',
    title: '睡眠品質',
    articles: [{ slug: 'sleep-stress-skin', title: '睡眠與壓力如何影響膚況' }],
    challenges: ['earlySleep'],
  },
  {
    id: 'cleansing',
    emoji: '🧼',
    title: '清潔習慣',
    articles: [{ slug: 'cleansing-habits', title: '正確清潔習慣' }],
    challenges: [],
  },
  {
    id: 'stress',
    emoji: '😮‍💨',
    title: '壓力程度',
    articles: [{ slug: 'sleep-stress-skin', title: '睡眠與壓力如何影響膚況' }],
    challenges: ['earlySleep'],
  },
  {
    id: 'environment',
    emoji: '🖐️',
    title: '環境與小動作',
    articles: [{ slug: 'sneaky-acne-habits', title: '這些生活習慣正在悄悄養痘' }],
    challenges: ['noTouchFace'],
  },
]

export const QUESTIONS = [
  // 飲食習慣
  {
    id: 'diet-sugar-drinks',
    dimension: 'diet',
    text: '含糖飲料（手搖飲、汽水、含糖咖啡）喝的頻率是？',
    options: [
      { text: '幾乎不喝，或都選無糖', score: 0 },
      { text: '每週一到三次', score: 1 },
      { text: '幾乎每天一杯以上', score: 2 },
    ],
  },
  {
    id: 'diet-snacks',
    dimension: 'diet',
    text: '甜點、餅乾零食或油炸物出現在日常的頻率是？',
    options: [
      { text: '偶爾才吃', score: 0 },
      { text: '每週幾次', score: 1 },
      { text: '幾乎每天都有', score: 2 },
    ],
  },
  {
    id: 'diet-whole-food',
    dimension: 'diet',
    text: '蔬菜、水果等原型食物，在你的三餐中出現的情況是？',
    options: [
      { text: '幾乎每餐都有蔬菜或水果', score: 0 },
      { text: '一天大概只有一餐有', score: 1 },
      { text: '常常整天都沒吃到', score: 2 },
    ],
  },

  // 睡眠品質
  {
    id: 'sleep-bedtime',
    dimension: 'sleep',
    text: '你通常幾點睡覺？',
    options: [
      { text: '大多在 11 點前', score: 0 },
      { text: '大多在 11 點到 1 點之間', score: 1 },
      { text: '常常 1 點以後才睡', score: 2 },
    ],
  },
  {
    id: 'sleep-hours',
    dimension: 'sleep',
    text: '平均睡眠時數大約是？',
    options: [
      { text: '7 小時以上', score: 0 },
      { text: '6 到 7 小時', score: 1 },
      { text: '常常不到 6 小時', score: 2 },
    ],
  },
  {
    id: 'sleep-regular',
    dimension: 'sleep',
    text: '你的作息規律嗎？（平日與假日的就寢時間差異）',
    options: [
      { text: '差不多，作息穩定', score: 0 },
      { text: '假日會晚睡晚起一兩個小時', score: 1 },
      { text: '完全看心情，作息很浮動', score: 2 },
    ],
  },

  // 清潔習慣
  {
    id: 'cleansing-frequency',
    dimension: 'cleansing',
    text: '你每天用洗面乳洗臉的次數是？',
    options: [
      { text: '早晚各一次左右', score: 0 },
      { text: '一天一次或想到才洗', score: 1 },
      { text: '一天三次以上，覺得越洗越乾淨', score: 2 },
    ],
  },
  {
    id: 'cleansing-pillow',
    dimension: 'cleansing',
    text: '枕頭套多久換洗一次？',
    options: [
      { text: '大約每週一次', score: 0 },
      { text: '兩週到一個月', score: 1 },
      { text: '想不起來上次是什麼時候', score: 2 },
    ],
  },
  {
    id: 'cleansing-makeup',
    dimension: 'cleansing',
    text: '化妝或擦防曬的日子，睡前的清潔狀況是？',
    options: [
      { text: '一定會確實清潔（或幾乎不化妝）', score: 0 },
      { text: '偶爾累了就簡單洗洗', score: 1 },
      { text: '常常直接倒頭就睡', score: 2 },
    ],
  },

  // 壓力程度
  {
    id: 'stress-level',
    dimension: 'stress',
    text: '最近一個月，感覺壓力大或緊繃的頻率是？',
    options: [
      { text: '偶爾，大致輕鬆', score: 0 },
      { text: '每週有幾天', score: 1 },
      { text: '幾乎每天都覺得緊繃', score: 2 },
    ],
  },
  {
    id: 'stress-relax',
    dimension: 'stress',
    text: '你有規律的紓壓方式嗎？（運動、散步、興趣活動等）',
    options: [
      { text: '有，每週固定進行', score: 0 },
      { text: '偶爾，想到才做', score: 1 },
      { text: '幾乎沒有，時間都被正事塞滿', score: 2 },
    ],
  },
  {
    id: 'stress-eating',
    dimension: 'stress',
    text: '壓力大的時候，你會用吃來紓解嗎？',
    options: [
      { text: '不太會', score: 0 },
      { text: '偶爾會想吃點甜的', score: 1 },
      { text: '常常靠甜食、炸物、手搖飲紓壓', score: 2 },
    ],
  },

  // 環境與小動作
  {
    id: 'env-touch-face',
    dimension: 'environment',
    text: '你會不自覺托腮、摸臉或摳痘痘嗎？',
    options: [
      { text: '很少，幾乎不碰臉', score: 0 },
      { text: '偶爾會，被提醒才發現', score: 1 },
      { text: '常常，是明顯的習慣動作', score: 2 },
    ],
  },
  {
    id: 'env-mask-helmet',
    dimension: 'environment',
    text: '你長時間配戴口罩或安全帽的情況是？',
    options: [
      { text: '很少長時間配戴', score: 0 },
      { text: '每天幾小時，會定期更換清洗', score: 1 },
      { text: '每天長時間配戴，很少清洗或更換', score: 2 },
    ],
  },
  {
    id: 'env-hair',
    dimension: 'environment',
    text: '你的瀏海或髮品使用情況是？',
    options: [
      { text: '額頭大多露出，或很少用髮品', score: 0 },
      { text: '有瀏海，但會注意清潔', score: 1 },
      { text: '瀏海長期蓋額頭，常用髮油或造型品', score: 2 },
    ],
  },
]

// 每維度 3 題、每題 0-2 分，總分 0-6
export function levelOf(score) {
  if (score <= 1) return { key: 'low', label: '低關聯', color: 'emerald' }
  if (score <= 3) return { key: 'mid', label: '中等', color: 'amber' }
  return { key: 'high', label: '值得留意', color: 'rose' }
}

export function scoreByDimension(answers) {
  return DIMENSIONS.map((dim) => {
    const questions = QUESTIONS.filter((q) => q.dimension === dim.id)
    const score = questions.reduce(
      (sum, q) => sum + (q.options[answers[q.id]]?.score ?? 0),
      0,
    )
    const maxScore = questions.length * 2
    return { ...dim, score, maxScore, level: levelOf(score) }
  })
}
