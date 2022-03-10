import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router , public _angularFireAuth: AngularFireAuth) {

   }
  activeEle = this._router.url
  menuToggle(){
    document.getElementById('sticky-header').classList.toggle('mobile-menu-visible')
  }
  goToPage(event){
    event.preventDefault();
    let path = event.target.getAttribute('urlPath');
    this._router.navigate([`/${path}`]);
    event.target.parentElement.classList.add('active');
    let elems = event.target.parentElement.parentElement.querySelectorAll("li");
    let siblings = [].slice.call(elems).filter( d => d != event.target.parentElement);
    siblings.forEach(sibling => {
      sibling.classList.remove('active');
    });
    document.getElementById('sticky-header').classList.remove('mobile-menu-visible')

  }
  logout(event){
    event.preventDefault();
    this._angularFireAuth.signOut();
    this._router.navigate([``]);
    document.getElementById('sticky-header').classList.remove('mobile-menu-visible')

  }
  showModel(event){
    event.preventDefault();
    let model = document.getElementById("search-modal");
    model.classList.add('show' , 'active')
    document.body.style.overflow = 'hidden'
  }
  ngOnInit(): void {
    document.body.addEventListener('click', function(){
      let model = document.getElementById("search-modal");
      model.classList.remove('show' , 'active')
      document.body.style.overflow = 'auto'

    }, true); 
  }

}
