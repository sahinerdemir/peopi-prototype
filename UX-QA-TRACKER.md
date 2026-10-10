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

## Design System screen-source pass — 2026-10-10
- Screen specimens now clone actual SCREENS markup and reuse screen CSS; isolated IDs preserve source selectors and form labels.
- Discovery tabs/navigation, profile header/cards/fields, settings lists, avatars/chips, privacy rows/switches, verification, requests, chat bubbles, profile sheets and Closed screen specimens use their existing screen patterns.
- Discovery filters share the same markup factory with the live screen.
- Session duration uses the real screen choices rather than the former 15/30/60 example.
- Component-only interactions do not change live screen navigation, requests or privacy preferences.
- Corrected source labels for adaptations that have no matching current screen component.
- Validation: JavaScript syntax; 54 design sections rendered in DOM execution; duplicate IDs, labels, duration parity, exclusive choices, privacy isolation, original screen navigation and Closed map privacy checks passed.
- Live cloud-browser QA: Discovery tabs render correctly and selection works in light/dark; source-specific dark selectors now follow the specimen theme. Full mobile QA remains pending.

## Application component inventory — 2026-10-10
- Replaced 46 nested component entries with eight flat families; related real screen specimens appear vertically on each family page.
- Preserved the Phosphor icon library. Removed unused generic component demos and speculative patterns from the catalogue.
- Documented reuse-first and add-after-screen-use rules in AGENTS.md and each family page.
- Families: Icons, Actions, Forms & Selection, Navigation, Profile & Identity, Connections & Chat, Privacy & Feedback, Sheets & Dialogs.

## Application-wide readable UI pass — 2026-10-10
- Modernized all 23 screens plus the professional sheet with family-specific rules.
- Readable typography, rounded forms/menus/person rows, explicit actions, concise product-authored copy, shared 30 pt navigation fade clearance.
- Preserved existing request decisions, cancel icon, hidden-presence model, LinkedIn-versus-identity distinction and opt-in sessions.
- Added UI tokens, per-screen uiRecipe/Notes, grouped form/content specimens and mobile handoff guidance.
- Native Dynamic Type/keyboard/VoiceOver/device validation remains required.
- Validation: local regression passed for 23 screens + sheet contracts, auth/onboarding/session/filters/request decisions/hide-chat/block/preferences, unique IDs and 15 design sections. Live all-screen light/dark overflow/surface checks passed; corrected source-specific legacy font and scroll-padding overrides during QA. Native validation remains pending.
