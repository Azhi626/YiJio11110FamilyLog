const CACHE_NAME = 'family-app-v1';

console.log("[A] Service Worker 腳本載入..."); // 診斷點 A

self.addEventListener('install', (event) => {
    console.log("[B] Service Worker 安裝中..."); // 診斷點 B
    self.skipWaiting(); // 強制立即接管
});

self.addEventListener('activate', (event) => {
    console.log("[C] Service Worker 已啟動，準備攔截請求"); // 診斷點 C
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // 網路優先策略：API 或外部資源盡量抓取最新版
    event.respondWith(
        fetch(event.request).catch(() => {
            console.log("[D] 網路請求失敗，目前處於離線狀態:", event.request.url); // 診斷點 D
            // 離線時的容錯處理（可擴充回傳快取的離線頁面）
            return new Response('您目前處於離線狀態，請檢查網路連線。', {
                status: 503,
                statusText: 'Service Unavailable'
            });
        })
    );
});