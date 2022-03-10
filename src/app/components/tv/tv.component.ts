import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetdataService} from '../../Service/getdata.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  pageNumber = 1;
  media_type = 'tv';
  pageNumbers=[];
  movies=[];
  videoUrl ='';
  constructor(private _getdataService:GetdataService , private _router:Router) { 
    _getdataService.getData(this.media_type , this.pageNumber).subscribe((data)=>{
      this.movies=data.results;
    })
    for (let index = 1; index <= 4; index++) {
      this.pageNumbers.push(index)
      
    }
  }
  changePage(event){
    event.preventDefault();
    this.pageNumber = event.target.textContent;
    this._getdataService.getData(this.media_type , this.pageNumber).subscribe((data)=>{
      this.movies=data.results;
    })
    document.documentElement.scrollTop = 0;
    event.target.parentElement.classList.add('active');
    let elems = event.target.parentElement.parentElement.querySelectorAll("li");
    let siblings = [].slice.call(elems).filter( d => d != event.target.parentElement);
    siblings.forEach(sibling => {
      sibling.classList.remove('active');
    });


  }
  nextPage(event) {
    event.preventDefault();
    this.pageNumber++;
    this._getdataService.getData(this.media_type , this.pageNumber).subscribe((data)=>{
      this.movies=data.results;
    })
    document.documentElement.scrollTop = 0;
  }
  goToMovieDetails(movieId){
    this._router.navigate(['/tv' , movieId])
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
