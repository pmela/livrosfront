import { Component } from '@angular/core';
import { LivrosService } from './livros.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livrosfront';
  constructor(
    private livroservice: LivrosService
  ) { this.exibeLivro()}

  exibeLivro(){
    this.livroservice.exibeLivro().subscribe(
      (listalivro)=>{
        console.log('lista de livros',listalivro)
      },
      (erro:Error)=>{
        console.log(erro)
      }
    )
  }
}
