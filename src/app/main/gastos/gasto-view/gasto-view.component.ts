import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { GastosService } from '../gastos.service';
import { Gasto } from '../gasto.model';

@Component({
  selector: 'gasto-view',
  templateUrl: './gasto-view.component.html',
  styleUrls: ['./gasto-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class GastoViewComponent implements OnInit {

  gasto : Gasto

  constructor(private _gastosService: GastosService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        this.gasto = this._gastosService.getGasto(params['id'])
      })
   }

  ngOnInit() {
  }

  

}
