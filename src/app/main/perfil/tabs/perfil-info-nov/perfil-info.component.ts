import { Component, OnInit, ViewEncapsulation, OnDestroy, Input } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { PerfilService } from '../../perfil.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'perfil-info-nov',
  templateUrl: './perfil-info.component.html',
  styleUrls: ['./perfil-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class PerfilInfoNovComponent implements OnInit, OnDestroy
{
    @Input() info: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    displayedColumns: string[] = ['Fecha', 'Concepto', 'Cantidad', 'Unidad'];
    dataSource = ELEMENT_DATA;

    
















    /**
     * Constructor
     *
     * @param {PerfilService} _profileService
     */
    constructor(
        private _profileService: PerfilService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // this._profileService.infoOnChanged
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(info => {
        //         this.info = info;
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        // this._unsubscribeAll.next();
        // this._unsubscribeAll.complete();
    }
}

export interface PeriodicElement {
    Fecha: Date;
    Concepto: string;
    Cantidad: string;
    Unidad: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { Fecha: new Date('2019-05-15'), Concepto: 'Hydrogen', Cantidad: 'testC', Unidad: 'a'   },
    { Fecha: new Date('2019-06-05'), Concepto: 'Helium', Cantidad: 'testC', Unidad: 'a'   },
    { Fecha: new Date('2019-06-15'), Concepto: 'Lithium', Cantidad: 'testC', Unidad: 'a'   },
    { Fecha: new Date('2019-07-15'), Concepto: 'Boron', Cantidad: 'testC', Unidad: 'a'   },
];