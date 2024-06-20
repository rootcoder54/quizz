import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSuccess]',
})
export class SuccessDirective {
  @Input() public appSuccess?: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor?: string;
  @HostBinding('style.color') private color?: string;
  constructor() {
    this.appSuccess = false;
  }
  ngOnChanges(): void {
    if (this.appSuccess) {
      this.backgroundColor = '#22c55e';
      this.color = 'white';
    }
  }
}
