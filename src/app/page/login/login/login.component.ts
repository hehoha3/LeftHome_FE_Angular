import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/common/validateForm';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  listUser: any[] = [];
  usernameNotExistsError: boolean = false;
  passwordNotMatchError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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

  onSubmit() {
    const userLogin = this.loginForm.value;
    console.log(userLogin);

    this.userService.signIn(userLogin);
    this.router.navigate(['']);

    // this.userService.signIn(userLogin);
    // console.log(this.userService.signIn(userLogin))
  }
}
