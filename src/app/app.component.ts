import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ right: '-100%' })], {
      optional: true,
    }),
    group([
      query(':leave', [animate('600ms ease', style({ right: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('600ms ease', style({ right: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  private isFirstRoute = true;

  prepareRoute(outlet: RouterOutlet): any {
    if (outlet.isActivated) {
      if (!this.isFirstRoute) {
        return outlet.activatedRoute;
      }
      this.isFirstRoute = false;
    }
    return '';
  }
}
