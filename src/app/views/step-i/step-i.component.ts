import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-i',
  templateUrl: './step-i.component.html',
  styleUrls: ['./step-i.component.scss'],
})
export class StepIComponent {
  myForm = new FormGroup({
    myValue: new FormControl(''),
  });

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  clearValue(): void {
    this.myForm.controls.myValue.setValue('');
  }

  onSubmit(): void {
    if (this.myForm.controls.myValue.value === 'Nanug') {
      this.router.navigate(['/step-z']);
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
