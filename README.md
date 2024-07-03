# ngx-slider-button

An Angular component that provides a "Slide to Confirm" functionality, typically used for actions that require user verification.

## Installation

Install the package using npm:

```bash
npm i ngx-slider-button
```

### Inputs

| Input                      | Type    | Description                                          | Default Value        |
| -------------------------- | ------- | ---------------------------------------------------- | -------------------- |
| `thumbColor`               | string  | Specifies the color of the thumb in hex format.      | `"#3b82f6"`          |
| `trackColor`               | string  | Specifies the color of the track in hex format.      | `"#fff"`             |
| `placeholderText`          | string  | The text displayed as the placeholder initially.     | `"Slide to confirm"` |
| `secondaryPlaceholderText` | string  | The text displayed as the placeholder while sliding. | `"Confirming"`       |
| `placeholderColor`         | string  | The color of the placeholder text.                   | `"#fff"`             |
| `src`                      | string  | The character or symbol displayed on the thumb.      | `">"`                |
| `checkDisable`             | boolean | Controls the disabled state of the component.        | `false`              |

### Output

```js
successEvent();
```

Event emitted when the sliding action is successfully completed.

## Example

Here is a complete example of how to use the `ngx-slider-button` component in an Angular application:

```typescript
import { Component } from "@angular/core";
import { NgxSliderButtonComponent } from "ngx-slider-button";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgxSliderButtonComponent],
  template: `
    <div style="width: 50%;">
      <ngx-slider-button 
        [placeholderText]="'Swipe to unlock'" 
        [secondaryPlaceholderText]="'Unlocking...'" 
        (successEvent)="onSuccess()"
      >
      </ngx-slider-button>
    </div>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  onSuccess() {
    console.log("Slide to confirm completed!");
  }
}
```
