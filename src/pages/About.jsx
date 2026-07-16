export default function About() {
  return (
    <div className="prose prose-stone max-w-none space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-stone-900">關於我們／免責聲明</h1>
      </header>

      <section className="space-y-3 text-stone-700">
        <h2 className="text-lg font-semibold text-stone-900">關於痘掰計畫</h2>
        <p>
          痘掰計畫（DouBye）是一個分享痘痘衛教知識與好膚習慣養成的網站。
          我們相信理解自己的生活習慣，是照顧皮膚的第一步。
        </p>
      </section>

      <section className="space-y-3 text-stone-700">
        <h2 className="text-lg font-semibold text-stone-900">免責聲明</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>本站所有內容僅供衛教參考，不構成醫療診斷、治療建議或處方。</li>
          <li>「生活習慣自我檢視」為生活習慣整理工具，並非醫療檢測或診斷。</li>
          <li>每個人的膚況與體質不同，任何飲食或生活習慣的調整，效果因人而異。</li>
          <li>如有持續性或嚴重的皮膚困擾，請諮詢皮膚科醫師等專業醫療人員。</li>
          <li>本站引用之研究或統計資料均標註來源，惟不保證其即時性與完整性。</li>
        </ul>
      </section>
    </div>
  )
}
