import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      addresse: new FormGroup({
        street: new FormControl(''),
        postalCode: new FormControl(''),
        city: new FormControl('')
      })
    });

    console.log(this.userForm);
  }

  onSubmitForm() {
    console.log(this.userForm.value);
  }

  setForm() {
    this.userForm.controls.firstname.setValue('Fabien');
    this.userForm.controls.lastname.setValue('SA');
    this.userForm.controls.email.setValue('Fabien@hotmail.fr');
  }
}
