import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';


@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ListContactosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //displayedColumns: string[] = ['Legajo', 'Nombre', 'CUIL', 'Equipo/Sector'];
  dataSource = ELEMENT_DATA;


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 121, name: 'Rene Favaloro', weight: 1.0079, symbol: 'H'},
  {position: 211, name: 'Emmmanuel Ginobili', weight: 4.0026, symbol: 'He'},
  {position: 163, name: 'Tato Bores', weight: 6.941, symbol: 'Li'},
  {position: 147, name: 'Alfredo Alcon', weight: 9.0122, symbol: 'Be'},
  {position: 185, name: 'Alberto Olmedo', weight: 10.811, symbol: 'B'},
  {position: 216, name: 'Carlos Catalano', weight: 12.0107, symbol: 'C'},
  {position: 197, name: 'Jorge Boria', weight: 14.0067, symbol: 'N'},
  {position: 118, name: 'J. Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 179, name: 'M. Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 180, name: 'Carlos Neon', weight: 20.1797, symbol: 'Ne'},
];
