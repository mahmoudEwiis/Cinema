import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cinema';
  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    let stickyHeader =  document.getElementById('sticky-header');
    let scrolltop =  document.getElementById('scroll-top')
    if (window.pageYOffset < 245) {
      stickyHeader.classList.remove("sticky-menu");
      scrolltop.classList.remove("open");
  
    } else {
      stickyHeader.classList.add("sticky-menu");
      scrolltop.classList.add("open");

    }
  }
  scrollToUp(){
    document.documentElement.scrollTop = 0;
  } 
}
