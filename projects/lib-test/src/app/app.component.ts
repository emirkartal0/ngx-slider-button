import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() successEvent = new EventEmitter<void>();
	@Input() thumbColor: string = "#3b82f6";
	@Input() trackColor: string = "#fff";
	@Input() placeholder: string = "Slide to confirm";
	@Input() secondaryPlaceholder: string = "Confirming";
	@Input() placeholderColor: string = "#42f542";
	@Input() src: string = ">";
  @ViewChild('placeholderEl') placeholderEl!: HTMLSpanElement;
	_maxValue: number = 1000;
	currentValue: number = 0;

	constructor() {}

	ngOnInit(): void {
		document.documentElement.style.setProperty(`--clr-th`, this.thumbColor);
		document.documentElement.style.setProperty(`--clr-tr`, this.trackColor);
		this.placeholderEl.style.color = this.placeholderColor;
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
		} else {
			this.currentValue = 0;
			this.placeholderEl!.textContent = this.placeholder;
		}
	}
}
