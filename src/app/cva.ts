import {
  Directive,
  ElementRef,
  Input,
  forwardRef,
  EventEmitter,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';

@Directive({
  selector: '[toPercentage]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToPercentDirective),
      multi: true,
    },
  ],
  host: {
    '(blur)': 'onBlur()',
  },
})
export class ToPercentDirective implements ControlValueAccessor {
  constructor(private el: ElementRef) {}

  private innerValue!: string;
  private toNumber!: number;
  private toPercent!: number;

  public onChangeCallback: any = (_) => {
    console.log(_);
  };
  public onTouched: any = () => {
    /*Empty*/
  };

  onBlur() {
    var input = this.el.nativeElement.value;
    this.toPercent = parseFloat(input) / 100;

    if (input != this.toNumber) {
      this.onChangeCallback(this.toPercent);
    }
  }

  get value(): any {
    console.log(this.innerValue);
    return this.innerValue;
  }

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(val: string): void {
    // this.ngModel.ControlValueAccessor.writeValue(val);
    this.toNumber = parseFloat(val) * 100;
    this.el.nativeElement.value = this.toNumber;
  }

  registerOnChange(fn: any): void {
    // console.log(fn);
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    // console.log(fn);
    this.onTouched = fn;
  }
}
