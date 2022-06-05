# CHANGELOG

## 1.2.0

### New Features

- `error()`
- `success()`
- `warning()`

### Bug fixes

- allow null transitions
- focus trap on empty dialogs
- prompt inputs custom props mapping

### Improvements

- added default components in exports
- added types radio and select in DialogInput

## 1.1.1

### Bug fixes

- input type checkbox and file work properly
- fixed input.props leak
- styles fixes

## 1.1.0

### Improvements

- svelte transitions in options can be passed as strings

### New Features

- event-handlers can be defined in options
- use script tag with `SvelteDialogs` global object

## 1.0.1

### Bug fixes

- styles fix

## 1.0.0

### New Features

- `prompt()` now accepts props for default input
- prompt form validation

### Design changes

- added `DialogInput`

- default options:

  - added `dividerClass`

- prompt options:
  - `title` default to empy string
  - added `inputComponent`
  - added `inputProps`
  - `formLabelClass` => `inputLabelClass`
  - `formInputClass` => `inputClass`

## 0.3.1

### Improvements

- babel preset env `> 0.25%, not dead`
- types

### Design changes

- slot `close` and `data` props in `Dialog`

## 0.3.0

### New Features

- `prompt()`

## 0.2.0

### New Features

- In-template Event-based dialog

## 0.1.2

### Bug fixes

- transitions config fix

## 0.1.1

### Design changes

- renamed content to props
- renamed component to content
- title as default string content
