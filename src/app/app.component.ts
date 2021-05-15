import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base';
  pessoas:Ipessoa[];
  infoPessoas:any;
constructor(private http: HttpClient, private firestore: AngularFirestore){
  this.getPessoa();
  this.infoPessoas = firestore.collection<Ipessoa>('pessoa');
}
adicionar(){
  for(let item of this.pessoas)
    this.infoPessoas.add(item);
}

  getPessoa(){
    this.http.get('http://localhost:3000/pessoas').subscribe((result:Ipessoa[])=>{ //o subscribe ta trazendo as informações do Http
      this.pessoas = result;
    });
  }
}
export interface Ipessoa{
  nome: string;
  idade: number;
  altura: number;
}
