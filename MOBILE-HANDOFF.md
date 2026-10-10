# Peopi mobile implementation handoff

This frontend is the visual and behavioral specification for a Flutter mobile application with iOS as the primary platform. It is a prototype, not a production backend or native iOS implementation.

## Source of truth

- `index.html`: actual SCREENS markup, application-only component families, live state examples.
- `peopi-ui.tokens.json`: readable typography, rounded surface, touch target and navigation clearance values.
- `UI-MODERNIZATION.md`: screen-family plan and implementation scope.
- `peopi-motion.tokens.json`: versioned motion values. These are Peopi choices informed by Apple guidance, not published Apple animation constants.
- `peopi-screen-contracts.json`: rules, route types, motion recipes and validation for all 23 screens plus the profile sheet.
- `peopi-motion.js` / `peopi-motion.css`: working web reference and replayable motion examples. Embedded tokens/contracts are generated from the two JSON files; synchronize them when updating the specification.
- Right Notes panel: human-readable Codex rules and per-screen motion contract.

## Native implementation

Build reusable Peopi components and a shared motion layer before composing screens. Use persistent root-tab navigation/state and native Cupertino route transitions with interactive back for child pages. Use the specified spring for custom selection/sheets; native navigation may retain system physics. Respect `MediaQuery.disableAnimations`, accessible navigation and system Reduce Transparency. Do not mimic Liquid Glass with unreadable blur behind every content surface. The web preview is an approximation; native glass, interactive dismissal, haptics, keyboard and 60/120 Hz behavior require physical-device validation.

## Motion recipes

| Recipe | Peopi duration | Behavior |
|---|---:|---|
| Press/release | 90/220 ms | scale 0.97, return gently; no delayed action |
| Root tab | 220 ms | crossfade; retain content/scroll; selection capsule moves 260 ms |
| Push/pop | 360/320 ms | forward from right; reverse on back, outgoing parallax |
| Sheet/dismiss | 380/240 ms | lift from below and fade backdrop; maintain focus |
| Content block | 240 ms | opacity + 10 px lift, at most three groups, never letter-by-letter |
| Feedback | 180 ms | reveal a new bubble/card/status; never replay the entire list |
| Reduce Motion | 120 ms | opacity only; no spatial travel, scaling or ambient pulse |

All transitions are interruptible. State/visibility/security changes occur immediately and never wait for animation. Avoid flashing glints, endless card motion, sequential word/letter motion and artificial wait times. No web vibration substitutes for native haptics.

## New screen workflow

Inspect Components first. Reuse a fitting component or variant. If a new component is required, use it in the new screen, then add its source specimen to the appropriate flat family. Add a screen contract and a motion recipe from the shared library. Keep examples, screen behavior and JSON specifications aligned.

## Required native acceptance checks

Test all flows on real iOS devices, including rapid taps, interactive back/dismiss, tab state retention, keyboard, VoiceOver/focus, large text, Reduce Motion, Reduce Transparency, session expiry and privacy states. Integrate and verify secure backend/auth/permissions separately; local demo state does not satisfy production security.

## Primary references (reviewed 2026-10-10)

- https://www.apple.com/os/ios/ — iOS 27 design refinements.
- https://developer.apple.com/design/human-interface-guidelines/motion
- https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass
- https://api.flutter.dev/flutter/cupertino/CupertinoPageRoute-class.html
- https://api.flutter.dev/flutter/physics/SpringDescription-class.html
- https://api.flutter.dev/flutter/widgets/MediaQueryData/disableAnimations.html

## Mobile UI presentation
Use main text at 15–17 pt, supporting text at 13–14 pt and form input text at 16 pt. Respect text scaling, wrap long text and retain user content. Group related controls in theme-aware rounded surfaces with subtle shadows. Reduce repeated captions and editor links; keep important privacy, consent and trust explanations. Shared bottom navigation uses a 70 pt shell, 16 pt bottom inset and a fade beginning 30 pt above the shell. Apply the per-screen uiRecipe in peopi-screen-contracts.json and keep Components specimens aligned.
