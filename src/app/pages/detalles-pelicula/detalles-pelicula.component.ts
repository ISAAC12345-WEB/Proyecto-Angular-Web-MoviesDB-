import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interface';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent {
  peliculaDetalles: any;

  constructor (private PeliculasService: PeliculasService, private  activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
      // Obtener el 'id' de la película de la URL
  this.activatedRoute.params.subscribe((params) => {
    const movieId = params['id'];

    // Obtener los detalles de la película utilizando el servicio PeliculasService
    this.PeliculasService.getDetallesPelicula(movieId).subscribe((detalles: any) => {
      this.peliculaDetalles = detalles;
    });
  });
}
}
