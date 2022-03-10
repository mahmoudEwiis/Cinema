import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/Service/getdata.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  movie = {
    "poster_path":"",
    "release_date":"",
    "homepage":"",
    "overview":"",
    "original_title":"",
    "original_name":"",
    "media_type":'',
    "id":"",
  }
  videoUrl = '' ;
  pageNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  media_type = 'movie';
  movies = []
  constructor(private _getdataService: GetdataService, private router: Router) {
    _getdataService.getMovieDetails(this.router.url).subscribe((data) => {
      this.movie = data;

    })
    _getdataService.getData(this.media_type, this.pageNumber).subscribe((data) => {
      this.movies = data.results.splice(0, 5);
    })
  }
  goToMovieDetails(movieId , media_type){
    let _url = `/${media_type}/${movieId}`;
    let pageNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this._getdataService.getMovieDetails(_url).subscribe((data) => {
      this.movie = data;
    })

    this._getdataService.getData(media_type, pageNumber).subscribe((data) => {
      this.movies = data.results.splice(0, 5);
    })
    document.documentElement.scrollTop = 0;
    this.router.navigate([`/${media_type}` , movieId])
  }
  showMovieTrailer(event , movieMedia_type , movieId ) {
    event.preventDefault();
    let model = document.getElementById("trailer-modal");
    this._getdataService.getMovieTrailer(this.router.url).subscribe((data) => {
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
    document.documentElement.scrollTop = 0;

  }

}
