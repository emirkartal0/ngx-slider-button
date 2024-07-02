# ngx-slider-button

An Angular component that provides a "Slide to Confirm" functionality, typically used for actions that require user verification.

## Installation

Install the package using npm:

```bash
npm i ngx-slider-button
```
### Inputs

| Input                      | Type    | Description                                              | Default Value     |
|----------------------------|---------|----------------------------------------------------------|-------------------|
| `thumbColor`               | string  | Specifies the color of the thumb in hex format.          | `"#3b82f6"`       |
| `trackColor`               | string  | Specifies the color of the track in hex format.          | `"#fff"`          |
| `placeholderText`          | string  | The text displayed as the placeholder initially.         | `"Slide to confirm"` |
| `secondaryPlaceholderText` | string  | The text displayed as the placeholder while sliding.     | `"Confirming"`    |
| `placeholderColor`         | string  | The color of the placeholder text.                       | `"#fff"`          |
| `src`                      | string  | The character or symbol displayed on the thumb.          | `">"`             |
| `checkDisable`             | boolean | Controls the disabled state of the component.            | `false`           |

### Output
```js
@Output() successEvent
```
Event emitted when the sliding action is successfully completed.

## Example

Here is a complete example of how to use the `slide-to-confirm` component in an Angular application:

```typescript
import { Component } from '@angular/core';
import { SlideToConfirmComponent } from 'your-package-name';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SlideToConfirmComponent],
  template: `
    <slide-to-confirm
      [placeholderText]="'Swipe to unlock'"
      [secondaryPlaceholderText]="'Unlocking...'"
      (successEvent)="onSuccess()">
    </slide-to-confirm>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSuccess() {
    console.log('Slide to confirm completed!');
  }
}
```
