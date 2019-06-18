import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ContactsService } from 'app/main/contacts/contacts.service';

@Component({
    selector   : 'contacts-main-sidebar',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class ContactsMainSidebarComponent implements OnInit, OnDestroy
{
    user: any;
    filterBy: string;


    isCheck: boolean = false;
    @Output() isCheckSideBar: EventEmitter<boolean>;
    @Output() isFilterNov: EventEmitter<boolean>;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     */
    constructor(
        private _contactsService: ContactsService
    )
    {
        this.isCheckSideBar = new EventEmitter<any>();
        this.isFilterNov = new EventEmitter<any>();

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
        console.log(this.isCheck);
        this.filterBy = this._contactsService.filterBy || 'all';

        this._contactsService.onUserDataChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(user => {
                this.user = user;
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Change the filter
     *
     * @param filter
     */
    changeFilter(filter): void
    {
        this.filterBy = filter;
        this._contactsService.onFilterChanged.next(this.filterBy);

        if (this.filterBy === "NOV"){
            this.isFilterNov.emit(true);
        }else{
            this.isFilterNov.emit(false);
        }
    }

    changeCheck(): void {
        // console.log('changeCheck() ' + this.isCheck);
        this.isCheckSideBar.emit(this.isCheck);        
    }
}
