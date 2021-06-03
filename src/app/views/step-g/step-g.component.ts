import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { checkResult } from 'src/app/utils/check-result';

@Component({
  selector: 'app-step-g',
  templateUrl: './step-g.component.html',
  styleUrls: ['./step-g.component.scss'],
})
export class StepGComponent {
  myForm = new FormGroup({
    myValue: new FormControl(''),
  });

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  clearValue(): void {
    this.myForm.controls.myValue.setValue('');
  }

  onSubmit(): void {
    if (
      checkResult('Cèntric Gastro Bar', this.myForm.controls.myValue.value) ||
      checkResult('Centric Gastro Bar', this.myForm.controls.myValue.value)
    ) {
      this.router.navigate(['/step-h']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
