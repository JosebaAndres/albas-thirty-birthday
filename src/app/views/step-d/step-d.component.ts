import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
      this.myForm.controls.myValue.value === 'Plaça de Sant Joan, 5' ||
      this.myForm.controls.myValue.value === 'Plaça de Sant Joan 5' ||
      this.myForm.controls.myValue.value === 'plaça de Sant Joan, 5' ||
      this.myForm.controls.myValue.value === 'plaça de Sant Joan 5' ||
      this.myForm.controls.myValue.value === 'plaça de sant joan, 5' ||
      this.myForm.controls.myValue.value === 'plaça de sant joan 5'
    ) {
      this.router.navigate(['/step-e']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
