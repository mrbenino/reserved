import {Component, Input, forwardRef, EventEmitter, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterControlComponent),
    multi: true
  }]
})
export class CounterControlComponent implements ControlValueAccessor {
  private _value: any;

  get value(): any {
    return this._value;
  }

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  @Input() valueShow: any;
  @Input() countStop = 0;
  @Output() eventControl = new EventEmitter();
  onChange(_: any): void {
  }

  up(): void {
    if (this.value < this.countStop) {
      this.value++;

      this.eventControl.emit();
    }
  }

  down(): void {
    if (this.value <= 0) {
      return;
    }
    this.value--;

    this.eventControl.emit();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
  }

}
