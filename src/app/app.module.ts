import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { StepAComponent } from './views/step-a/step-a.component';
import { StepBComponent } from './views/step-b/step-b.component';
import { StepCComponent } from './views/step-c/step-c.component';
import { StepDComponent } from './views/step-d/step-d.component';
import { StepEComponent } from './views/step-e/step-e.component';
import { StepFComponent } from './views/step-f/step-f.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ImageComponent } from './components/image.component';

@NgModule({
  declarations: [
    AppComponent,
    StepAComponent,
    StepBComponent,
    StepCComponent,
    StepDComponent,
    StepEComponent,
    StepFComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
