export default function Privacy() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-stone-900">隱私權政策</h1>
        <p className="mt-1 text-sm text-stone-400">最後更新：2026 年 7 月</p>
      </header>

      <section className="space-y-3 text-stone-700">
        <h2 className="text-lg font-semibold text-stone-900">資料的蒐集與使用</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            本站的「每日任務」打卡紀錄儲存於你瀏覽器的
            localStorage，僅保存在你的裝置上，不會上傳至任何伺服器。
          </li>
          <li>本站目前不要求註冊帳號，也不主動蒐集姓名、電子郵件等個人資料。</li>
        </ul>
      </section>

      <section className="space-y-3 text-stone-700">
        <h2 className="text-lg font-semibold text-stone-900">第三方服務</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            本站使用 Google AdSense 顯示廣告。Google 及其合作夥伴可能使用 Cookie
            依據你先前造訪本站或其他網站的紀錄放送個人化廣告。你可以前往
            Google 的廣告設定停用個人化廣告。
          </li>
          <li>本站託管於 GitHub Pages，GitHub 可能記錄基本的存取紀錄（如 IP 位址）。</li>
        </ul>
      </section>

      <section className="space-y-3 text-stone-700">
        <h2 className="text-lg font-semibold text-stone-900">政策變更與聯絡方式</h2>
        <p>
          本政策若有變更將於本頁公告。如對本政策有任何疑問，歡迎透過本站
          GitHub 專案頁面與我們聯繫。
        </p>
      </section>
    </div>
  )
}
