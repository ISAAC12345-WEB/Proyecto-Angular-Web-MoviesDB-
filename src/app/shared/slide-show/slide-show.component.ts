import { AfterViewInit, Component , Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { interval } from 'rxjs';
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

  currentIndex = 0; 
  intervalTime = 2000; // Cambiar de imagen

  constructor(private router:Router){}
  ngAfterViewInit(): void {
    this.myswiper = new Swiper('.swiper',{
      loop:true
    })
  }
  ngOnInit(): void {
      interval(this.intervalTime).subscribe(() => {
      this.onSliderNext(); // Llamar al método que cambia a la siguiente imagen
    });
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
  buscarPelicula(texto:string){
    //console.log(texto)
    texto=texto.trim(); 
    if(texto.length === 0){
      return;
    }
    this.router.navigate(['/buscar',texto])
  }

}
