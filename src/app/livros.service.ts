import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(
    private http: HttpClient,
  ) { }

  exibeLivro():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/livros/')
  }
}
