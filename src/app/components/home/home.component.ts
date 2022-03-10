import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetdataService } from 'src/app/Service/getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies = []
  videoUrl = ''
  constructor(private _getdataService: GetdataService, private _router: Router) {
    _getdataService.getData('all', 1).subscribe((data) => {
      this.movies = data.results;
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    items: 4,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      575: {
        items: 2,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 5
      },
    }
  }
  goToMovieDetails(movieId, media_type) {
    this._router.navigate([`/${media_type}`, movieId])
  }
  showModel(event) {
    event.preventDefault();
    let model = document.getElementById("trailer-modal");
    model.classList.add('show', 'active')
    document.body.style.overflow = 'hidden'
  }
  showMovieTrailer(event , movieMedia_type , movieId ) {
    let movie = `/${movieMedia_type}/${movieId}`
    event.preventDefault();
    let model = document.getElementById("trailer-modal");
    this._getdataService.getMovieTrailer(movie).subscribe((data) => {
      this.videoUrl = `https://www.youtube.com/embed/${data.results[0].key}`;
    });
    model.classList.add('show', 'active');
    document.body.style.overflow = 'hidden';
  }
  closeModel(iframe){
    let model = document.getElementById("trailer-modal");
    iframe.src =  iframe.src
    model.classList.remove('show', 'active');
    document.body.style.overflow = 'auto';

  }
  ngOnInit(): void {
  }

}


