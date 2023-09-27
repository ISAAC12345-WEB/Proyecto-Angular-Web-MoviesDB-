import { AfterViewInit, Component , Input, OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent  implements OnInit ,AfterViewInit{
 @Input() movies?:Movie[]; 
myswiper?:Swiper;
movie:Movie[]=[];

  constructor(private router:Router){}
  ngAfterViewInit(): void {
    this.myswiper = new Swiper('.swiper',{
      loop:true
    })
  }
  ngOnInit(): void {
    //console.log(this.movies)
  }
  onSliderPrev(){
    this.myswiper?.slidePrev();
  }
  onSliderNext(){
    this.myswiper?.slideNext();
  }
  onMovieClick(movie:Movie){
    this.router.navigate(['/pelicula',movie.id])
  } 
}
