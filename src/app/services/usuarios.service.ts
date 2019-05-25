import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Fernando Herrera');


    return this.http.get(`https://reqres123.in/api/user`, {
      params
    }).pipe(
      map( resp => resp['data'] ),
    );

  }


}
