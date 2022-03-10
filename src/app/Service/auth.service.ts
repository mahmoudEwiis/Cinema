import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import {  from, Observable } from 'rxjs';
import { AngularFireAuth  } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private _router: Router , private _angularFireAuth: AngularFireAuth) { }
  
  // login By google
  loginByGoogle(): Observable<any> {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    return from(this._angularFireAuth.signInWithPopup(googleAuthProvider));
  }
  // login By github
  loginByGithub(): Observable<any>{
    const githubAuthProvider = new firebase.auth.GithubAuthProvider();
    return from(this._angularFireAuth.signInWithPopup(githubAuthProvider));
  }

  // login By email
  loginByEmail(email: string, password: string): Observable<any>{
    return from(firebase.auth().signInWithEmailAndPassword(email , password))
  }

  // login By email
  registerWithEmail(email: string, password: string):Observable<any>{
    return from(this._angularFireAuth.createUserWithEmailAndPassword(email, password))
  }
  logOut() {
    this._angularFireAuth.signOut();
  }


}


