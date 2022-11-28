import { Component, OnInit } from '@angular/core';
/*import { Interface } from 'readline';*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [

  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icone: string;
  nome: string;
  link: string
}
