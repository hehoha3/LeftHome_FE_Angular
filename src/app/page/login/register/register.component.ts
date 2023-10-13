import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  usernameExistsError: boolean = false;
  emailExistsError: boolean = false;
  passwordMismatchError: boolean = false;
  listUser: any[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
    this.getListUser();
  }

  getListUser() {
    this.userService.getAllUser().subscribe((response) => {
      for (let user of response) {
        this.listUser.push(user);
      }
    });
  }

  // onSignup() {
  //   if (this.signupForm.invalid) {
  //     return;
  //   }

  //   const user = this.signupForm.value;

  //   if (user.password != user.password2) {
  //     this.passwordMismatchError = true;
  //     return;
  //   }

  //   for (let userOfList of this.listUser) {
  //     if (
  //       user.email == userOfList.email ||
  //       user.username == userOfList.username
  //     ) {
  //       this.errorMessage = 'Username hoặc Email Đã Được Sử Dụng !';
  //       alert(this.errorMessage);
  //       return;
  //     }
  //   }

  //   this.userService.signUp(user).subscribe((res) => {
  //     console.log(res);
  //     alert('Đăng ký thành công!');
  //     this.router.navigate(['login']);
  //   });
  // }

  onSignup() {
    const user = this.signupForm.value;

    if (this.signupForm.invalid) {
      return;
    }

    // check password
    if (user.password != user.password2) {
      this.passwordMismatchError = true;
      this.signupForm.reset();
      return;
    }
    for (let userInDB of this.listUser) {
      // check username
      if (user.username == userInDB.username) {
        this.usernameExistsError = true;
        this.signupForm.reset();
        return;
      }
      // check email
      if (user.email == userInDB.email) {
        this.emailExistsError = true;
        this.signupForm.reset();
        return;
      }
    }

    console.log(user);
    this.userService.signUp(user).subscribe((res) => {
      console.log(res);
      alert('Đăng ký thành công!');
      this.router.navigate(['login']);
    });
  }
}
