# YiJio11110FamilyLog
# 義教街 貓狗好啦好啦 - 家庭管理系統

這是一個基於 React (CDN) 與 Tailwind CSS 構建的輕量化單頁應用程式 (SPA)。
搭配 Google Apps Script (GAS) 作為無伺服器後端，實現零成本的家庭財務與庫存管理。

## 🌟 功能特色

- **漸進式網頁應用 (PWA)**：支援加入手機主畫面，享受原生 App 般的全螢幕體驗。
- **即時庫存管理**：冰箱、庫房等消耗品增刪改查，用完自動沉底排序。
- **日常記帳**：選手明細、帳單流水帳，支援金額動態加總。
- **防抖機制 (Debounce)**：前端操作無延遲，後台自動節流合併請求，避免 API 擁塞。

## 🚀 部署教學

### 1. 前端部署 (GitHub Pages)
1. Fork 或 Clone 本專案。
2. 準備您的 `icon-192.png` 與 `icon-512.png` 以啟用 PWA。
3. 至 GitHub 專案的 Settings > Pages，將來源設為 `main` 分支進行部署。

### 2. 後端部署 (Google Apps Script)
1. 在 Google 試算表中點擊「擴充功能」>「Apps Script」。
2. 部署為「網頁應用程式 (Web App)」，權限設定為「任何人」。
3. 取得部署網址。

### 3. 前後端介接
1. 開啟 GitHub Pages 部署好的網頁。
2. 點擊右上角狀態燈號 ⚙️。
3. 貼上 GAS Web App 的網址並儲存，系統將自動同步您的試算表資料。

## 📂 專案架構
- `index.html`: 主應用程式 (React JSX + UI 元件)
- `manifest.json`: PWA 設定檔
- `sw.js`: Service Worker (處理快取與離線狀態)
