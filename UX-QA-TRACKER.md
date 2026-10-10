# Peopi UX / QA implementation tracker — 2026-10-09

Backup before changes: `backup/pre-ux-qa-overhaul-2026-10-09`.

## Implemented
- Interactive demo Discovery filters shared between Map and List.
- Result counts and empty results in List.
- Chat composer: multiline, 15px input, 14px bubbles, Enter to send, Shift+Enter for newline.
- Message timestamps for newly sent demo messages.
- Dynamic chat history clearance as composer grows.
- Confirmation before removing a connection.

## Requires live browser / mobile QA
- Navigate all 23 screen IDs and both Active Discovery tabs.
- Test every clickable action in light and dark themes.
- Test first-time onboarding, authentication demo, permissions, profile editing and recovery.
- Test all request states: sent, received, accepted, declined, cancelled.
- Test connected / hidden / blocked / removed person in Discovery, Network and Conversation.
- Test Map/List filters, zero matches, reset, opening profiles and clearing filters.
- Test scroll masks, floating navigation, keyboard and textarea expansion on iOS Safari and Android Chrome.
- Test narrow screens, accessibility labels, focus, touch targets, reduced motion, contrast.
- Test browser reload, storage reset, corrupted localStorage, session timeout.

## Still to implement (not covered by this pass)
- Real OAuth/email, recovery, account deletion, backend storage and support.
- Photo upload and preview.
- Actual location and notification permissions.
- Server-side privacy enforcement and location aggregation thresholds.
- True chat delivery/failure/retry states; date separators and message suggestions.
- Dedicated session-expired, permission-denied and network-error states.
- Navigation history/back-stack rather than fixed destination on all secondary pages.
- Automated browser E2E regression tests and accessibility audit.

Demo functionality must remain explicitly identified as demo, not production-ready.
