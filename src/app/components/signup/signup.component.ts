import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../Service/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {
  registerUserData = {
    "Name": "",
    "Email": "",
    "Password": ""
  }

  constructor(private _router: Router, private _hotToastService: HotToastService, private _auth: AuthService) { }

  changeInputType(e) {
    let inputPassword = document.getElementById("passwordInp");
    if (inputPassword.getAttribute('type') == "password") {
      e.target.classList.remove("fa-eye-slash")
      e.target.classList.add("fa-eye")
      inputPassword.setAttribute("type", "text")
    }
    else {
      e.target.classList.add("fa-eye-slash")
      e.target.classList.remove("fa-eye")
      inputPassword.setAttribute("type", "password")

    }
  }

  registerUser(registerForm) {
    let { email, password } = registerForm.value
    this._auth.registerWithEmail(email, password)
    .pipe(
      this._hotToastService.observe({
        success: 'Congrats! You are all signed up',
        loading: 'Signing up...',
        error: ({ message }) => `${message}`,
      })
    )
    .subscribe(() => {
      this._router.navigate(['/home']);
    });
  }

  
  // login By google account 
  loginByGoogle(event){
    event.preventDefault();
    this._auth.loginByGoogle().pipe(
      this._hotToastService.observe({
        success: 'Logged in successfully',
        loading: 'Logging in...',
        error: ({ message }) => `There was an error: ${message} `
      })
    ).subscribe(() => {
      this._router.navigate(['/home']);
    });
  }

  // login By Github account 
  loginByGithub(event){
    event.preventDefault();
    this._auth.loginByGithub().pipe(
      this._hotToastService.observe({
        success: 'Logged in successfully',
        loading: 'Logging in...',
        error: ({ message }) => `There was an error: ${message} `
      })
    ).subscribe(() => {
      this._router.navigate(['/home']);
    });
  }
  // login By Twitter account 
  loginByTwitter(event){
    event.preventDefault();
  }
  

  ngOnInit(): void {
  }

}
