import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddlivroComponent } from './addlivro/addlivro.component';
import { LivrosService } from './livros.service'


export interface Livro {
  id: number;
  nome: string;
  autor: string;
  categoria: string;
  descricao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livrosfront';
  livros: Livro[] = []
  
  constructor(
    private rota: Router,
    private livroservice: LivrosService,
    public dialog: MatDialog
  ) {
    this.exibeLivro()
  }
  openDialog() {
    let meumodal = this.dialog.open(AddlivroComponent);
    meumodal.afterClosed().subscribe((resultado) => {
      this.exibeLivro()
    })
  }

  exibeLivro() {
    this.livroservice.exibeLivro().subscribe(
      (listalivro) => {
        this.livros = listalivro
        console.log('lista de livros', listalivro)
      },
      (erro: Error) => {
        console.log(erro)
      }
    )
  }

  excluirLivro(id: number) {
    this.livroservice.excluirLivro(id).subscribe(
      (respostaexcluir: any) => {
        console.log(respostaexcluir);
        // this.rota.navigate(['livro']);
      },

    );
  }




}
