import { Component, OnInit, ViewEncapsulation, OnDestroy, Input } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NovedadesService } from '../../novedades.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

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
    
    novedadesEq: [];
    novedadesEx: [];
    // dataSource: FilesDataSourceNov | null;

    dataSourceEq = new MatTableDataSource< any[] | null>([]);
    dataSourceEx = new MatTableDataSource< any[] | null>([]);
    // dataSourceEx: FilesDataSourceNov | null;
    

    // Private
    private _unsubscribeAll: Subject<any>;

    displayedColumnsNovedadEquipo: string[] = ['Fecha', 'Concepto', 'Cantidad'];
    displayedColumnsNovedadExternas: string[] = ['Fecha', 'Concepto', 'Monto'];
  

    /**
     * Constructor
     *
     * @param {PerfilService} _profileService
     */
    constructor(
        private _novedadesService: NovedadesService
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
        // this.dataSource = new FilesDataSourceNov(this._novedadesService);
        // this.dataSource2 = new FilesDataSourceNov(this._novedadesService);
        
        this._novedadesService.infoOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(info => {

                console.log(info);
                this.novedadesEq = info.Eq;
                this.novedadesEx = info.Ex;

                this.dataSourceEq.data = info.Eq;
                this.dataSourceEx.data = info.Ex;
            });            
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

// export class FilesDataSourceNov extends DataSource<any>
// {
//     /**
//      * Constructor
//      *
//      * @param {NovedadesService} _novedadesService
//      */
//     constructor(
//         private _novedadesService: NovedadesService
//     ) {
//         super();
//     }

//     /**
//      * Connect function called by the table to retrieve one stream containing the data to render.
//      * @returns {Observable<any[]>}
//      */
//     connect(): Observable<any[]> {
//         return this._novedadesService.infoOnChanged;
//     }

//     /**
//      * Disconnect
//      */
//     disconnect(): void {
//     }
// }
