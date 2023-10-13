import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  movie:Movie[]=[]
  
constructor(private peliculasP:PeliculasService){}
  ngOnInit(): void {
    this.peliculasP.getPeliculas().subscribe(movies=>{
      this.movie=movies;
    })
    this.loadPeliculasPopulares();
  }
  loadPeliculasPopulares() {
    this.peliculasP.getPeliculasPopulares().subscribe((movies) => {
      this.movie = movies;
    });
  }
}
