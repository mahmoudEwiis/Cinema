import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../Service/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ AuthService ],
})
export class SigninComponent implements OnInit {

  constructor(private _auth: AuthService, private _hotToastService: HotToastService, private _router: Router) { }
  loginUserData = {
    "Email":"",
    "Password":""
  }

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
  // login By Email & password 
  loginUser (loginForm) {
    let {email , password} = loginForm.value;
    this._auth.loginByEmail(email , password).pipe(
      this._hotToastService.observe({
        success: 'Logged in successfully',
        loading: 'Logging in...',
        error: ({ message }) => `There was an error: ${message} `
      })
    ).subscribe(() => {
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
