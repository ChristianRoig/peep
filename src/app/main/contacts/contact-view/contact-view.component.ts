import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { ContactsService } from '../contacts.service';
import { Proveedor } from '../proveedor.model';
import { Contact } from '../contact.model';

@Component({
  selector: 'contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ContactViewComponent implements OnInit {

  proveedor: Contact;
  gastos: any;

  constructor(private _contactsService: ContactsService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        this.proveedor = this._contactsService.getProveedor(params['name']);
         this._contactsService.getGastosByName(this.proveedor.name).then((value) => {
        this.gastos = value;
        }); 
      });
   }

  ngOnInit(): void {
  }

}
