import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  peopleForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.peopleForm = formBuilder.group({
      nombre: [
        null,
        [Validators.required, Validators.minLength(3), Validators.pattern(/\S/)],
      ],
      edad: [null, [Validators.required, Validators.min(18), Validators.max(120)]],
      carrera: [null, [Validators.required, Validators.pattern(/\S/)]],
      hobbie: [null, [Validators.required, Validators.pattern(/\S/)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.peopleForm.valid) return;

    console.log(this.peopleForm.value);
  }
}
