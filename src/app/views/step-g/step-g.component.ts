import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
      this.myForm.controls.myValue.value === 'Cèntric Gastro Bar' ||
      this.myForm.controls.myValue.value === 'cèntric Gastro Bar' ||
      this.myForm.controls.myValue.value === 'cèntric gastro bar' ||
      this.myForm.controls.myValue.value === 'Centric Gastro Bar' ||
      this.myForm.controls.myValue.value === 'centric Gastro Bar' ||
      this.myForm.controls.myValue.value === 'centric gastro bar'
    ) {
      this.router.navigate(['/step-h']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
