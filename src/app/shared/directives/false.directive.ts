import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFalse]',
})
export class FalseDirective {
  @Input() public appFalse?: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor?: string;
  @HostBinding('style.color') private color?: string;
  constructor() {
    this.appFalse = false;
  }
  ngOnChanges(): void {
    if (this.appFalse) {
      this.backgroundColor = '#dc2626';
      this.color = 'white';
    }
  }
}
