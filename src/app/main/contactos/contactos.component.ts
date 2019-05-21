import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ContactosComponent implements OnInit {

  contactsTitle: string = "Equipo de Colaboradores";

  searchInput: FormControl; 

  constructor() { 
    this.searchInput = new FormControl('');
  }

  ngOnInit() {
  }
  
  toggleSidebar(name): void
  {
      //this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

  newContact(): void { }

}
