// ===== PWA Install + Service Worker Registration (Shared) =====

// 0. Disable pull-to-refresh / overscroll bounce (works in standalone PWA & most mobile browsers)
(function () {
    const style = document.createElement('style');
    style.textContent = `
        html, body {
            overscroll-behavior-y: contain;
            overscroll-behavior-x: none;
        }
    `;
    document.head.appendChild(style);

    // Extra JS-based guard: prevent pull-to-refresh when at the very top of the page
    // and the user drags downward (only blocks the refresh gesture, not normal scroll).
    let touchStartY = 0;

    document.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartY = e.touches[0].clientY;
        }
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (e.touches.length !== 1) return;
        const touchY = e.touches[0].clientY;
        const scrollableParent = findScrollableParent(e.target);
        const scrollTop = scrollableParent ? scrollableParent.scrollTop : (window.scrollY || document.documentElement.scrollTop);

        // If at the top and pulling down, prevent the native pull-to-refresh
        if (scrollTop <= 0 && touchY > touchStartY) {
            e.preventDefault();
        }
    }, { passive: false });

    function findScrollableParent(el) {
        while (el && el !== document.body) {
            const style = window.getComputedStyle(el);
            const overflowY = style.overflowY;
            if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    }
})();

// 1. Service Worker register
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => console.log('PWA Ready!', reg.scope))
            .catch((err) => console.log('PWA Failed:', err));
    });
}

// 2. Custom Install Prompt Popup
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;

    if (localStorage.getItem('pwa_install_dismissed') === 'true') return;
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    showInstallPopup();
});

function showInstallPopup() {
    if (document.getElementById('pwa-install-popup')) return;

    const overlay = document.createElement('div');
    overlay.id = 'pwa-install-popup';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0,0,0,0.75); z-index: 99999;
        display: flex; justify-content: center; align-items: center;
    `;

    overlay.innerHTML = `
        <div style="background-color:#282a2d; border:1px solid #4a4d51; border-radius:14px; width:88%; max-width:380px; padding:25px; text-align:center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#fff;">
            <div style="font-size:40px; margin-bottom:10px;">📲</div>
            <div style="font-size:18px; font-weight:bold; color:#8ab4f8; margin-bottom:10px;">অ্যাপটি ইন্সটল করুন</div>
            <div style="font-size:14px; color:#e8eaed; margin-bottom:20px; line-height:1.5;">
                ভালো অভিজ্ঞতার জন্য এই অ্যাপটি আপনার মোবাইলে ইন্সটল করে নিন। এটি সম্পূর্ণ ফ্রি এবং দ্রুত লোড হবে।
            </div>
            <div style="display:flex; gap:10px;">
                <button id="pwa-install-yes" style="flex:1; padding:12px; border:none; border-radius:8px; background-color:#34a853; color:white; font-size:15px; font-weight:bold; cursor:pointer;">Install করুন</button>
                <button id="pwa-install-no" style="flex:1; padding:12px; border:none; border-radius:8px; background-color:#383a3e; color:#e8eaed; font-size:15px; font-weight:bold; cursor:pointer;">Not Now</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('pwa-install-yes').onclick = async () => {
        overlay.remove();
        if (deferredInstallPrompt) {
            deferredInstallPrompt.prompt();
            const { outcome } = await deferredInstallPrompt.userChoice;
            console.log('Install outcome:', outcome);
            deferredInstallPrompt = null;
        }
    };

    document.getElementById('pwa-install-no').onclick = () => {
        localStorage.setItem('pwa_install_dismissed', 'true');
        overlay.remove();
    };
}

window.addEventListener('appinstalled', () => {
    localStorage.setItem('pwa_install_dismissed', 'true');
    const popup = document.getElementById('pwa-install-popup');
    if (popup) popup.remove();
});

// 3. Smooth fade transition between page navigations (masks the browser's
// default loading/progress bar flash when moving from one page to another)
(function () {
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        body { transition: opacity 0.12s ease-out; }
        body.pwa-fade-out { opacity: 0; }
    `;
    document.head.appendChild(fadeStyle);

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('http') || link.target === '_blank') return;

        e.preventDefault();
        document.body.classList.add('pwa-fade-out');
        setTimeout(() => { window.location.href = href; }, 120);
    });
})();
