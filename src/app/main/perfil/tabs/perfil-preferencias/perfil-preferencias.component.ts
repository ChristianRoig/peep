import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'perfil-preferencias',
  templateUrl: './perfil-preferencias.component.html',
  styleUrls: ['./perfil-preferencias.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class PerfilPreferenciasComponent implements OnInit {

  //preferencias = ['Uso', 'Facturacion Electronica', 'Cuenta Drive', 'Cuenta Mail'];

  constructor() { }

  ngOnInit() {
  }

}
