import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { checkResult } from 'src/app/utils/check-result';

@Component({
  selector: 'app-step-d',
  templateUrl: './step-d.component.html',
  styleUrls: ['./step-d.component.scss'],
})
export class StepDComponent {
  myForm = new FormGroup({
    myValue: new FormControl(''),
  });

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  clearValue(): void {
    this.myForm.controls.myValue.setValue('');
  }

  onSubmit(): void {
    if (
      checkResult(
        `Plaça de Sant Joan, 5`,
        this.myForm.controls.myValue.value
      ) ||
      checkResult(
        `Placa de Sant Joan, 5`,
        this.myForm.controls.myValue.value
      ) ||
      checkResult(`Plaça de Sant Joan 5`, this.myForm.controls.myValue.value) ||
      checkResult(`Placa de Sant Joan 5`, this.myForm.controls.myValue.value)
    ) {
      this.router.navigate(['/step-f']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
