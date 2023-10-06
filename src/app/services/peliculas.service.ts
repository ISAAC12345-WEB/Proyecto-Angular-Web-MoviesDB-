import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Movie, PopularResponse } from '../interfaces/peliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  //ponemos la url del la pagina movie db
  //https://api.themoviedb.org/3/movie/now_playing?lenguage=es-ES
  private serverURL:String = 'https://api.themoviedb.org/3';
  private pelisPages = 1;
  cargando: any;
  getDetallesPelicula: any;
  constructor(private http: HttpClient) { }

  get params(){
    //probamos en el postman para ver los resultados
    //las api_key varian al momento de registrarse en https://www.themoviedb.org/
    return{
      api_key : '2f9ba10fef143b94cb1bd3792c8f00af',
      lenguage : 'es-ES',
      page : this.pelisPages.toString()
    }
  }

  getPeliculas():Observable<Movie[]>{

    return this.http.get<PopularResponse>(`${this.serverURL}/movie/now_playing`,{params:this.params}).pipe(
      map((res)=>res.results), tap(()=>(
        this.pelisPages+=1
      ))
    );

  }
  buscarPeliculas(texto:string):Observable<Movie[]>{

  const params = {...this.params ,query:texto};
  return this.http.get<PopularResponse>(`${this.serverURL}/search/movie`,{
    params
  }).pipe(map(res=>res.results))
  }
  //https://api.themoviedb.org/3/search/movie/now_playing?lenguage=es-ES
}
