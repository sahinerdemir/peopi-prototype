# Peopi mobile UI modernization

User-approved direction: extend the readable, light My Profile presentation to all implemented mobile screens. This changes presentation and concise product copy; existing privacy, connection, verification and session behavior remain authoritative.

## Shared specification

- Main content 15–17 pt; supporting copy 13–14 pt; inputs 16 pt. Titles retain a clear hierarchy.
- Task/content groups use 22–26 pt radii, theme-aware card surfaces and subtle shadows. Use spacing rather than repeated divider lines.
- Actions have at least 44 pt hit areas. Primary actions 52 pt; received-request decisions retain equal half-width 48 pt controls.
- Shorten repeated product explanations. Preserve user-authored biographies/messages and critical privacy, consent, linked-account versus identity-check and demo boundaries.
- Floating navigation: 70 pt shell, 16 pt bottom inset, fade begins 30 pt above its top. Scrollers have 140 pt end padding.

## Screen-family plan and implementation

| Family | Screens | Presentation |
|---|---|---|
| Onboarding/account | Welcome, Auth, Profile setup, Intent setup, Permissions, Recovery | Readable intro, grouped form fields, large selections/actions, short demo/permission notes |
| Discovery | Closed, Session setup, Active map/list, Professional sheet | Map remains the focus; raised profile/completion surfaces; readable controls; scrollable session configuration; rounded detail sections |
| Connections | Network, Requests, Messages, Conversation, Connection detail | Rounded person rows and shortcuts; clear request decisions; readable messages/composer; shared identity/content groups |
| Profile/privacy | My Profile, Edit Profile, Privacy, Hidden, Blocked, Report, Verification, Settings, Notifications | Rounded form/menu/preference groups; concise captions; explicit privacy/trust state; readable switch rows |

Per-screen recipes are in peopi-screen-contracts.json and Notes section 07. Shared values are in peopi-ui.tokens.json; the working CSS sits in the PEOPI_MODERN_UI block inside index.html so source specimens inherit it. Components now also expose the grouped form and readable content-section specimens.

## Validation boundaries

Check every screen and component family in light/dark, navigation and action states, long content, scroll clearance, dialogs/sheets and rapid input. Native keyboard, Dynamic Type, VoiceOver, interactive gestures and secure backend enforcement require Flutter/device validation; the web prototype does not satisfy those requirements.
