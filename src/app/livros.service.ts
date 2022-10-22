import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class LivrosService {

  constructor(
    private http: HttpClient,
  ) { }

  exibeLivro(nomelivro?: string): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/livros/', { params: { nomelivroback: String(nomelivro) } })
  }

  salvaLivro(livro: Livro): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/livros/', livro)
  }

  excluirLivro(id: number): Observable<any> {
    return this.http.delete<any>('http://127.0.0.1:8000/livros/' + String(id) + '/')
  }

}
