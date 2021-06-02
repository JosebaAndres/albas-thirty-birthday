import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepAComponent } from './views/step-a/step-a.component';
import { StepBComponent } from './views/step-b/step-b.component';
import { StepCComponent } from './views/step-c/step-c.component';
import { StepDComponent } from './views/step-d/step-d.component';
import { StepEComponent } from './views/step-e/step-e.component';
import { StepFComponent } from './views/step-f/step-f.component';
import { StepGComponent } from './views/step-g/step-g.component';
import { StepHComponent } from './views/step-h/step-h.component';
import { StepZComponent } from './views/step-z/step-z.component';

const routes: Routes = [
  { path: '', redirectTo: '/step-a', pathMatch: 'full' },
  {
    path: 'step-a',
    component: StepAComponent,
  },
  {
    path: 'step-b',
    component: StepBComponent,
  },
  {
    path: 'step-c',
    component: StepCComponent,
  },
  {
    path: 'step-d',
    component: StepDComponent,
  },
  {
    path: 'step-e',
    component: StepEComponent,
  },
  {
    path: 'step-f',
    component: StepFComponent,
  },
  {
    path: 'step-g',
    component: StepGComponent,
  },
  {
    path: 'step-h',
    component: StepHComponent,
  },
  {
    path: 'step-z',
    component: StepZComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
