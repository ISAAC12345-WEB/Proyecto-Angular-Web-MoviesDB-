import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  texto:string = '';
  results:Movie[] = []; //movies
  searchQuery: string='';

  constructor(private router: Router,private http: HttpClient ,
    private activatedRoute: ActivatedRoute,private peliculasSvc:PeliculasService){}
  
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      console.log(params['texto'])//le enviamos al parametro texto  

      this.texto = params['texto'];
      this.peliculasSvc.buscarPeliculas(this.texto).subscribe(movies=>{

        console.log(movies)
        this.results=movies;
      })
    })
  }
  buscarTitulos() {
    if (this.searchQuery.trim() === '') {
      return; // Evitar búsquedas vacías
    }
    this.peliculasSvc.buscarPeliculas(this.searchQuery).subscribe(movies =>{
      this.results=movies;
    })
  }
  mostrarDetalles(id: number) {
    this.router.navigate(['/detalles', id]);
  }
}
