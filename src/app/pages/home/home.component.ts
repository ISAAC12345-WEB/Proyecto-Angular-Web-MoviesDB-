import { Component,HostListener,OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  title = 'Movie DB';
  name = 'Isaac Valqui';

  movie:Movie[]=[]
  movieSlideShow:Movie[]=[]
  
  constructor(private peliculasP:PeliculasService){
    /**this.peliculasP.getPeliculas().subscribe((res)=>{  console.log(res);  } )*/
  }
  ngOnInit(): void {
    this.peliculasP.getPeliculas().subscribe(movies=>{
      this.movieSlideShow = movies;
      this.movie=movies;
    })
  }
}
