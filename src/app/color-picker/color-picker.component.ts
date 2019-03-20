import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorPickerComponent),
    multi: true
  }]
})
export class ColorPickerComponent implements ControlValueAccessor {

  @Input() value: string;
  onChange: any;

  writeValue(value: string): void {
    this.value = value;
  }

  colorPicked(event: any){
    this.onChange(event.detail);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    // this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }
}
