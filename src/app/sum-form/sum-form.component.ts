import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SumRequest } from '../models/sum-request';
import { SumService } from '../services/sum.service';

@Component({
  selector: 'app-sum-form',
  templateUrl: './sum-form.component.html',
  styleUrls: ['./sum-form.component.css']
})
export class SumFormComponent {
  sumRequest?: SumRequest;
  sumForm = this.fb.nonNullable.group({
    a: ['', [Validators.required]],
    b: ['', [Validators.required]]
  });
  result? = 0;

  constructor(private fb: FormBuilder, private sumService: SumService) { }

  onSubmit() {
    this.sum();
  }

  sum() {
    this.sumRequest = {
      a: parseFloat(this.sumForm.controls.a.value),
      b: parseFloat(this.sumForm.controls.b.value)
    } as SumRequest;
    console.log(this.sumRequest);

    let result = this.sumService.sum(this.sumRequest);
    console.log(result);
    this.result = result;
  }
}
