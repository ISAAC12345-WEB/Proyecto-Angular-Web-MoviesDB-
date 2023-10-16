import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  popularMovies:Movie[]=[]
  
constructor(private peliculasP:PeliculasService, private router: Router){}
  ngOnInit(): void {
    this.peliculasP.getPeliculas().subscribe(movies=>{
      this.popularMovies=movies;
    })
    this.loadPeliculasPopulares();
  }
  loadPeliculasPopulares() {
    this.peliculasP.getPeliculasPopulares().subscribe((movies) => {
      this.popularMovies = movies;
    });
  }
  mostrarDetalles(id: number) {
    this.router.navigate(['/detalles', id]);
  }
}
