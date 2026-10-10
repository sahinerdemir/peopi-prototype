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
