import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { checkResult } from 'src/app/utils/check-result';

@Component({
  selector: 'app-step-e',
  templateUrl: './step-e.component.html',
  styleUrls: ['./step-e.component.scss'],
})
export class StepEComponent {
  myForm = new FormGroup({
    myValue: new FormControl(''),
  });

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  clearValue(): void {
    this.myForm.controls.myValue.setValue('');
  }

  onSubmit(): void {
    if (checkResult('Cal Ramon', this.myForm.controls.myValue.value)) {
      this.router.navigate(['/step-f']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
