import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  textoNavbar: string = 'Teste';
  constructor() { }

  ngOnInit(): void {}

  mudarTexto(): void{
    this.textoNavbar = 'Alterado';
  }
  retornarTexto(): void{
    this.textoNavbar = 'Retornado';
  }
}
