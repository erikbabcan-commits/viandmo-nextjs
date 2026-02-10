# PROMPT: Robust PWA & Service Worker Implementation

## Objective
Implement a high-performance, resilient PWA system for viandmo.com that ensures an "App-like" experience, full offline capabilities for critical pages, and intelligent asset caching.

## 1. Manifest Strategy (`manifest.ts`)
- **Theme Color**: #20C05C (Solid brand green).
- **Display**: `standalone` for immersive experience.
- **Orientation**: `portrait-primary`.
- **Short Name**: `viandmo`.
- **Purpose**: Ensure the manifest is correctly generated and linked in the Root Layout.

## 2. Service Worker Architecture (`sw.js`)
- **Cache Names**: Versioned caches (e.g., `viandmo-static-v1`, `viandmo-runtime-v1`).
- **Caching Strategies**:
    - **Static Assets (JS/CSS/Fonts)**: Cache-First. These are fingerprinted and should be served from cache for speed.
    - **External Assets (Google Fonts)**: Cache-First with expiration.
    - **Images**: Stale-While-Revalidate with a fallback to a generic placeholder SVG when offline.
    - **Navigation (HTML)**: Network-First with fallback to a dedicated `/offline` page.
- **Lifecycle Management**:
    - `install`: Pre-cache `/`, `/offline`, and essential CSS/JS.
    - `activate`: Clean up old cache versions immediately.
    - `skipWaiting` & `clients.claim`: Ensure new SW takes control instantly without requiring reload.

## 3. Registration & UX (`sw-register.js`)
- **Update Notification**: Listen for `controllerchange` to potentially notify users of updates.
- **Connection Monitoring**: Add a global listener for `online`/`offline` events to provide UI feedback (subtle pill/toast).

## 4. Offline Page (`app/offline/page.tsx`)
- Create a beautiful, brand-aligned offline page that allows users to:
    - Retain access to the [phone button](tel:+421911275755) (which works offline).
    - View a friendly "You are offline" message with a "Retry" button.

## 5. Verification Requirements
- **Lighthouse**: 100/100 PWA score.
- **DevTools**: Verify "Service Worker" is active and "Cache Storage" is populated.
- **Real-world Test**: Simulate airplane mode and verify `/offline` fallback.
