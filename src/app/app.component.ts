import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastname: new FormControl(''),
      email: new FormControl('', Validators.email),
      address: new FormGroup({
        street: new FormControl(''),
        postalCode: new FormControl(''),
        city: new FormControl(''),
      }),
    });

    console.log(this.userForm);
  }

  onSubmitForm() {
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
