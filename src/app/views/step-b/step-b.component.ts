import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-b',
  templateUrl: './step-b.component.html',
  styleUrls: ['./step-b.component.scss'],
})
export class StepBComponent {
  myForm = new FormGroup({
    myValue: new FormControl(''),
  });

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  clearValue(): void {
    this.myForm.controls.myValue.setValue('');
  }

  onSubmit(): void {
    if (this.myForm.controls.myValue.value === 'Piramides') {
      this.router.navigate(['/step-c']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca!', { duration: 5000 });
    }
  }
}
