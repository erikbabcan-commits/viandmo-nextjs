(function () {
    if (!("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
            .then((reg) => {
                // If there's an update found
                reg.onupdatefound = () => {
                    const installingWorker = reg.installing;
                    if (installingWorker == null) return;

                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === "installed") {
                            if (navigator.serviceWorker.controller) {
                                // console.log("[PWA] New content is available; please refresh.");
                            } else {
                                // console.log("[PWA] Content is cached for offline use.");
                            }
                        }
                    };
                };
            })
            .catch((e) => {
                console.error("[PWA] Service Worker registration failed:", e);
            });
    });

    // Handle controller change (e.g. after skipWaiting)
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
    });
})();
