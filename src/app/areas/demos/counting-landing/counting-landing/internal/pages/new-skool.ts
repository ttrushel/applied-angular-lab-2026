import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-demos-pages-new-skool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `<app-ui-page title="old-skool">
    <div class="flex items-center justify-center">
      <button class="btn btn-circle btn-error" (click)="decrement()">-</button>
      <span class="mx-2 text-2xl font-mono">{{ count() }}</span>
      <button class="btn btn-circle btn-success" (click)="increment()">+</button>
      <span class="mx-2 text-2xl font-mono">{{ count() * 2 }}</span>
      <span class="mx-2 text-2xl font-mono">{{ count() * 10 }}</span>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class NewSkoolPage {
  // the jeff default = no "raw" state (variables) in a component, all signals all the time.
  count = signal(0); // a variable

  increment() {
    // way one - give it a new value
    this.count.set(this.count() + 1);
  }

  decrement() {
    // way two - give it a function, it will give you the current value, the function should return the new value
    this.count.update((currentValue) => currentValue - 1);
  }

  updateTheUi() {
    // go find the span with the current...
    // go find the spand where it is doubled... update that
    // go find the span where it is * 10 ... update that.
  }
}
