import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-h',
  templateUrl: './step-h.component.html',
  styleUrls: ['./step-h.component.scss'],
})
export class StepHComponent {
  myForm = new FormGroup({
    myValue: new FormControl(''),
  });

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  clearValue(): void {
    this.myForm.controls.myValue.setValue('');
  }

  onSubmit(): void {
    if (this.myForm.controls.myValue.value === 'Nanug') {
      this.router.navigate(['/step-f']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
