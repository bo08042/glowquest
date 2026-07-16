# 痘掰計畫 GlowQuest

痘痘衛教知識、生活習慣自我檢視與每日好膚習慣挑戰的網站。

> 本站內容僅供衛教參考，非醫療診斷或治療建議。如有皮膚困擾，請諮詢皮膚科醫師。

## 開發

```bash
npm install
npm run dev      # 本機開發（http://localhost:5173/glowquest/）
npm run build    # 建置到 dist/
npm run preview  # 預覽建置結果
```

## 技術架構

- React 19 + Vite 6 + Tailwind CSS 4
- `HashRouter` 路由（GitHub Pages 相容）
- 每日任務資料存於 localStorage，經 `src/services/taskService.js` 抽象層存取
  （Phase 2 接 Firebase/Supabase 時只需替換此層）

## 部署

Push 到 `main` 分支後，GitHub Actions 會自動建置並部署到 GitHub Pages。
首次使用需到 repo 的 **Settings → Pages** 將 Source 設為 **GitHub Actions**。

詳細規劃見 [docs/project-plan.md](docs/project-plan.md)。
