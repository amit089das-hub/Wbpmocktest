// ========== PWA Helper ==========
(function() {
  'use strict';

  // ---- Pull-to-refresh সম্পূর্ণ বন্ধ ----
  document.documentElement.style.overscrollBehavior = 'none';
  
  document.addEventListener('DOMContentLoaded', function() {
    if (document.body) {
      document.body.style.overscrollBehavior = 'none';
    }
  });

  let startY = 0;
  document.addEventListener('touchstart', function(e) {
    startY = e.touches[0].pageY;
  }, { passive: true });

  document.addEventListener('touchmove', function(e) {
    const y = e.touches[0].pageY;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop === 0 && y > startY) {
      e.preventDefault();
    }
  }, { passive: false });

  // ---- PWA mode detect ----
  const isStandalone = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  // ---- PWA তে চললে কিছু করার নেই ----
  if (isStandalone()) {
    localStorage.setItem('pwa_installed', 'true');
    return;
  }

  // ---- Desktop হলে দেখাবে না ----
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) return;

  // ---- ইতিমধ্যে installed হলে দেখাবে না ----
  if (localStorage.getItem('pwa_installed') === 'true') return;

  // ---- Install Banner CSS ----
  const css = `
    #pwa-banner-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.8);
      z-index: 99998;
      animation: fadein 0.3s ease;
    }
    #pwa-banner-card {
      position: fixed; bottom: 0; left: 0; right: 0;
      background: #1a1a1a;
      border-radius: 20px 20px 0 0;
      padding: 28px 22px 44px;
      z-index: 99999;
      text-align: center;
      color: #fff;
      box-shadow: 0 -8px 40px rgba(0,0,0,0.6);
      animation: slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes slideUp {
      from { transform: translateY(100%); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }
    @keyframes fadein {
      from { opacity: 0; } to { opacity: 1; }
    }
    #pwa-banner-icon { font-size: 52px; margin-bottom: 8px; }
    #pwa-banner-title { font-size: 20px; font-weight: 700; color: #2ecc71; margin: 0 0 10px; }
    #pwa-banner-desc { font-size: 13.5px; color: #bbb; line-height: 1.75; margin: 0 0 18px; }
    #pwa-banner-desc strong { color: #fff; }
    #pwa-install-btn {
      display: none;
      background: linear-gradient(135deg, #2ecc71, #27ae60);
      color: #000; border: none;
      padding: 15px; border-radius: 12px;
      font-size: 16px; font-weight: 700;
      width: 100%; cursor: pointer;
      margin-bottom: 10px;
      box-shadow: 0 4px 15px rgba(46,204,113,0.4);
    }
    #pwa-ios-steps {
      display: none;
      background: #111;
      border-radius: 10px;
      padding: 12px 15px;
      margin-bottom: 12px;
      text-align: left;
      font-size: 13px;
      color: #ccc;
      line-height: 1.8;
    }
    #pwa-ios-steps span { color: #2ecc71; font-weight: 600; }
    #pwa-later-btn {
      background: transparent;
      color: #666;
      border: 1px solid #333;
      padding: 12px;
      border-radius: 10px;
      font-size: 14px;
      width: 100%;
      cursor: pointer;
    }
  `;

  // ---- Banner HTML ----
  const html = `
    <div id="pwa-banner-overlay"></div>
    <div id="pwa-banner-card">
      <div id="pwa-banner-icon">📚</div>
      <h2 id="pwa-banner-title">অ্যাপ ইনস্টল করুন</h2>
      <p id="pwa-banner-desc">
        সেরা অভিজ্ঞতার জন্য <strong>WB Mock Test</strong> অ্যাপটি ইনস্টল করুন।<br>
        ✅ দ্রুত লোড &nbsp; ✅ ফুলস্ক্রিন &nbsp; ✅ অফলাইন সাপোর্ট
      </p>
      <button id="pwa-install-btn">📲 এখনই ইনস্টল করুন</button>
      <div id="pwa-ios-steps">
        <span>iOS এ ইনস্টল করতে:</span><br>
        1️⃣ নিচের <strong>Share</strong> বাটনে (↑) ট্যাপ করুন<br>
        2️⃣ <strong>"Add to Home Screen"</strong> সিলেক্ট করুন<br>
        3️⃣ <strong>"Add"</strong> বাটনে ট্যাপ করুন
      </div>
      <button id="pwa-later-btn">এখন না, পরে করব</button>
    </div>
  `;

  let deferredPrompt = null;
  let bannerShown = false;

  function showBanner() {
    if (bannerShown) return;
    bannerShown = true;

    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    const div = document.createElement('div');
    div.id = 'pwa-banner-wrapper';
    div.innerHTML = html;
    document.body.appendChild(div);

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (deferredPrompt) {
      document.getElementById('pwa-install-btn').style.display = 'block';
    } else if (isIOS) {
      document.getElementById('pwa-ios-steps').style.display = 'block';
    } else {
      // Android কিন্তু prompt নেই = installed বা not eligible
      localStorage.setItem('pwa_installed', 'true');
      return;
    }

    // Install click
    document.getElementById('pwa-install-btn').addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        localStorage.setItem('pwa_installed', 'true');
      }
      deferredPrompt = null;
      hideBanner();
    });

    // Later click
    document.getElementById('pwa-later-btn').addEventListener('click', hideBanner);
    document.getElementById('pwa-banner-overlay').addEventListener('click', hideBanner);
  }

  function hideBanner() {
    const w = document.getElementById('pwa-banner-wrapper');
    if (w) w.remove();
  }

  // Android Chrome
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Page load এর পরে banner দেখাও
    if (document.readyState === 'complete') {
      setTimeout(showBanner, 1000);
    } else {
      window.addEventListener('load', () => setTimeout(showBanner, 1000));
    }
  });

  // iOS Safari
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isSafari = /Safari/i.test(navigator.userAgent) && !/CriOS|FxiOS|Chrome/i.test(navigator.userAgent);
  if (isIOS && isSafari) {
    window.addEventListener('load', () => setTimeout(showBanner, 1500));
  }

  // Installed event
  window.addEventListener('appinstalled', () => {
    localStorage.setItem('pwa_installed', 'true');
    hideBanner();
  });

})();
