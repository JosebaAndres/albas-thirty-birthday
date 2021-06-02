import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-z',
  templateUrl: './step-z.component.html',
  styleUrls: ['./step-z.component.scss'],
})
export class StepZComponent {
  myForm = new FormGroup({
    myValue: new FormControl(''),
  });

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  clearValue(): void {
    this.myForm.controls.myValue.setValue('');
  }

  onSubmit(): void {
    if (this.myForm.controls.myValue.value === 'Whisky') {
      alert('ole ole y ole!!!');
    } else {
      this.matSnackBar.open('chupito!!', 'tanca', { duration: 3000 });
    }
  }
}
