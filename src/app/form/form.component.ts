import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  peopleForm: FormGroup;

  get nombre(): AbstractControl {
    return this.peopleForm.controls['nombre'];
  }

  get edad(): AbstractControl {
    return this.peopleForm.controls['edad'];
  }

  get carrera(): AbstractControl {
    return this.peopleForm.controls['carrera'];
  }

  get hobbie(): AbstractControl {
    return this.peopleForm.controls['hobbie'];
  }

  formValue: any = null;

  constructor(formBuilder: FormBuilder) {
    this.peopleForm = formBuilder.group({
      nombre: [
        null,
        [Validators.required, Validators.minLength(3), Validators.pattern(/\S/)],
      ],
      edad: [null, [Validators.required, Validators.min(18), Validators.max(120)]],
      carrera: [null, [Validators.required, Validators.pattern(/\S/)]],
      hobbie: [null, [Validators.required, Validators.pattern(/\S/)]],
    }, { updateOn: 'blur' });
  }

  onSubmit() {
    if(!this.peopleForm.valid) {
      this.formValue = null;
      return;
    }

    this.formValue = this.peopleForm.value;
    this.peopleForm.reset();
  }

  hasErrors(control: AbstractControl): boolean {
    return control.touched && !control.valid;
  }

  handleError(errors: ValidationErrors | null): string[] {
    const errorNames = Object.keys(errors || {});

    // Create an array with the error message
    const errorMessages = {
      required: 'Este campo es requerido',
      minlength: 'Este campo debe tener al menos 3 caracteres',
      pattern: 'Este campo no es válido',
      min: 'Este campo debe ser mayor a 18',
      max: 'Este campo debe ser menor a 120',
    };

    return errorNames.map((error) => errorMessages[error as keyof typeof errorMessages]);
  }
}
