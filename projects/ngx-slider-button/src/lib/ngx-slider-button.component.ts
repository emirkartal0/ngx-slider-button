import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-slider-button',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container">
      <input
        [disabled]="checkDisable"
        value="0"
        [(ngModel)]="currentValue"
        #slider
        class="slider"
        type="range"
        min="0"
        [max]="_maxValue"
        (mouseup)="confirmEndHandler()"
      />
      <label
        [style.left]="
          'calc(' +
          calcThumbLocation +
          '% + 0.80rem - ' +
          1.9 * calcRatio +
          'rem)'
        "
        class="icon"
        id="icon"
      >
        {{ src }}
      </label>
      <span
        class="text"
        [style.opacity]="abs(1 - calcRatio * 2)"
        >{{
          calcRatio < 0.5 ? placeholderText : secondaryPlaceholderText
        }}</span
      >
    </div>
  `,
  styles: `
:root {
	--clr-tr: #ffffff;
	--clr-th: #0000ff;
  font-size: 16px;
}

.container {
	position: relative;
}

.icon {
  position: absolute;
  top: 0.6rem;
  pointer-events: none;
  font-weight: 700;
}

.text {
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 100%;
  text-align: center;
  color: #000;
  pointer-events: none;
}

.slider {
	width: 100%;
	appearance: none;
	background-color: transparent;
	pointer-events: none;
}

.slider-label {
	position: absolute;
	pointer-events: none;
	top: 0.25rem;
}

.slider-placeholder {
	position: absolute;
	width: 100%;
	text-align: center;
	left: 0px;
	top: 0.25rem;
	color: rgb(0 0 0 1);
	pointer-events: none;
}

.slider:active::-webkit-slider-thumb {
	pointer-events: auto;
	appearance: none;
	transform: scale(1.2);
	cursor: -webkit-grabbing;
}

.slider:active::-moz-range-thumb {
	pointer-events: auto;
	border: 0;
	transform: scale(1.2);
	cursor: -moz-grabbing;
}

.slider:active::-ms-thumb {
	pointer-events: auto;
	transform: scale(1.2);
	cursor: -webkit-grabbing;
	cursor: -moz-grabbing;
}

.slider:focus {
	outline: none;
}

.slider::-webkit-slider-runnable-track {
	height: 1.5rem;
	padding: 0.25rem;
	box-sizing: content-box;
	border-radius: 1rem;
	background-color: var(--clr-tr);
}

.slider::-moz-range-track {
	height: 1.5rem;
	padding: 0.25rem;
	box-sizing: content-box;
	border-radius: 1rem;
	background-color: var(--clr-tr);
}

.slider::-ms-track {
	border: 0;
	height: 1.5rem;
	padding: 0.25rem;
	box-sizing: content-box;
	border-radius: 1rem;
	background-color: var(--clr-tr);
	color: var(--clr-tr);
}

.slider::-moz-focus-outer {
	border: 0;
}

.slider::-webkit-slider-thumb {
	pointer-events: auto;
	appearance: none;
	display: block;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	background-color: var(--clr-th);
	transform-origin: 50% 50%;
	transform: scale(1);
	transition: transform ease-out 200ms;
	cursor: -webkit-grab;
}

.slider::-moz-range-thumb {
	pointer-events: auto;
	appearance: none;
	display: block;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	background-color: var(--clr-th);
	transform-origin: 50% 50%;
	transform: scale(1);
	transition: transform ease-out 200ms;
	cursor: -moz-grab;
}

.slider::-ms-thumb {
	pointer-events: auto;
	appearance: none;
	display: block;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	background-color: var(--clr-th);
	transform-origin: 50% 50%;
	transform: scale(1);
	transition: transform ease-out 200ms;
	cursor: -webkit-grab;
	cursor: -moz-grab;
}
  `,
})
export class NgxSliderButtonComponent implements OnChanges, AfterViewInit {
  @Output() successEvent = new EventEmitter<void>();
  @Input() thumbColor: string = '#3b82f6';
  @Input() trackColor: string = '#fff';
  @Input() placeholderText: string = 'Slide to confirm';
  @Input() secondaryPlaceholderText: string = 'Confirming';
  @Input() placeholderColor: string = '#000';
  @Input() src: string = '>';
  @Input() checkDisable: boolean = false;

  @ViewChild('slider') sliderEl?: ElementRef<HTMLInputElement>;

  _maxValue: number = 1000;
  currentValue: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      !changes['thumbColor'].firstChange ||
      !changes['trackColor'].firstChange
    ) {
      this.ngAfterViewInit();
    }
  }

  ngAfterViewInit(): void {
    this.sliderEl!.nativeElement.style.setProperty(`--clr-th`, this.thumbColor);
    this.sliderEl!.nativeElement.style.setProperty(`--clr-tr`, this.trackColor);
  }

  get calcThumbLocation(): number {
    return this.calcRatio * 100;
  }

  get calcRatio() {
    return this.currentValue / this._maxValue;
  }

  abs(val: number) {
    return Math.abs(val);
  }

  confirmEndHandler() {
		if (this.currentValue === this._maxValue) {
			this.successEvent.emit();
		}
		requestAnimationFrame(this.moveHandleBack.bind(this));
	}

	moveHandleBack() {
    this.currentValue = this.currentValue - 40;
		if (this.currentValue < 0.5) {
			this.currentValue = 0;
		} else {
			requestAnimationFrame(this.moveHandleBack.bind(this));
		}
	}
}
