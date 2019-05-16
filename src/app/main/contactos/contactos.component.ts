import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styles: ['./contactos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ContactosComponent implements OnInit {

  contactsTitle: string = "Contacts"

  constructor() { }

  ngOnInit() {
  }
  
  toggleSidebar(name): void
  {
      //this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
