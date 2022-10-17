import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Livro } from '../app.component';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-addlivro',
  templateUrl: './addlivro.component.html',
  styleUrls: ['./addlivro.component.css']
})
export class AddlivroComponent implements OnInit {

  livro:Livro={autor:'', nome: '', categoria:'', descricao:''}
  constructor(private livroservice: LivrosService,public dialogRef: MatDialogRef<AddlivroComponent>) { }

  ngOnInit(): void {
  }
  salvaLivro(){
    this.livroservice.salvaLivro(this.livro).subscribe(
      (resultado)=>{
        console.log(resultado)
        this.dialogRef.close()
      }
    )

  }

}
