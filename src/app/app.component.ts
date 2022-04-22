import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userForm: FormGroup;
  isSubmitted: boolean;

  constructor() {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(4),
      ]),
      lastname: new FormControl(''),
      email: new FormControl('', Validators.email),
      address: new FormGroup({
        street: new FormControl(''),
        postalCode: new FormControl(''),
        city: new FormControl(''),
      }),
    });

    this.isSubmitted = false;
    console.log(this.userForm);
  }

  onSubmitForm() {
    this.isSubmitted = true;
    console.log(this.userForm.value);
    //check s'il est valide
    console.log(this.userForm.valid);
    console.log(this.userForm);
  }

  setForm() {
    this.userForm.controls.firstname.setValue('Fabien');
    this.userForm.controls.lastname.setValue('SA');
    this.userForm.controls.email.setValue('Fabien@hotmail.fr');
  }
}

