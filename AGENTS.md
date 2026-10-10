# Peopi component library

Components is an inventory of reusable UI already used in the application, not a general UI catalogue.

- Before designing a screen, inspect the relevant Components family and reuse a suitable existing pattern or variant.
- If the new screen requires a new component, design it in Peopi's established screen language, use it in that screen, then add a specimen with its source screen to the appropriate family.
- Extend a family's examples before adding another menu item. Keep Components navigation flat; related uses appear vertically on the same page.
- Do not add speculative components or generic demos merely to fill a catalogue.
- Keep Icons & Iconography as the shared Phosphor resource, even for icons not yet used.
- Preserve source markup/styles, light and dark variants, accessible labels and existing privacy rules. Specimen interactions must not change the actual screen state.
- Keep source screens, component examples and their behavior aligned whenever modifying a reusable component.

The family inventory is `dsCatalog` in `index.html`; its `members` refer to screen specimens in `showDesign`. Existing specimens reuse actual screen markup and styles. Discovery filters share `discoveryFilterMarkup`; request row specimens share `journeyRow` and `cancelRequestButton`.

## Mobile and motion contracts
This prototype is the Codex mobile implementation specification. Read MOBILE-HANDOFF.md. Keep every implemented screen in peopi-screen-contracts.json. Use shared motion recipes, never screen-local durations. Honor system Reduce Motion and preserve tab state. Update JSON sources, then run scripts/sync-motion-spec.py to refresh runtime constants. New components must be used by a real screen and registered in an existing flat Components family. Native accessibility, interactive routes and backend security require separate device/integration validation.

## Readability and grouped surfaces
Read UI-MODERNIZATION.md and peopi-ui.tokens.json before modifying mobile UI. Main content is 15–17 pt, support 13–14 pt, inputs 16 pt, touch targets at least 44 pt. Group related content and controls in rounded theme-aware surfaces rather than divider-heavy rows. Reduce repeated copy without removing privacy/consent/trust meaning or user-authored content. All root-tab scrollers share 116 pt bottom fade extent (70 pt navigation + 16 pt inset + 30 pt clearance), plus sufficient end padding. Update uiRecipe and actual source specimens with each screen change.
