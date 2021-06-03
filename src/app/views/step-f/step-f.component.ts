import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { checkResult } from 'src/app/utils/check-result';

@Component({
  selector: 'app-step-f',
  templateUrl: './step-f.component.html',
  styleUrls: ['./step-f.component.scss'],
})
export class StepFComponent {
  myForm = new FormGroup({
    myValue: new FormControl(''),
  });

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  clearValue(): void {
    this.myForm.controls.myValue.setValue('');
  }

  onSubmit(): void {
    if (checkResult('La Parra', this.myForm.controls.myValue.value)) {
      this.router.navigate(['/step-g']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
