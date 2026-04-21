## DM Mono font files

This project sets a global default `fontFamily` to **DM Mono** (`DMMono-Regular`).

To make it actually render on-device, add these TTF files into this folder:

- `DMMono-Regular.ttf`
- `DMMono-Italic.ttf` (optional)
- `DMMono-Medium.ttf` (optional)
- `DMMono-MediumItalic.ttf` (optional)

Then link assets:

- **Android/iOS**: `npx react-native-asset`
- **iOS**: `cd ios && bundle exec pod install`

