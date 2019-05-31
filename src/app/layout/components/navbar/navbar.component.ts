import { Component, ElementRef, Input, Renderer2, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { PerfilService } from 'app/main/perfil/perfil.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector     : 'navbar',
    templateUrl  : './navbar.component.html',
    styleUrls    : ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy
{
    // Private
    _variant: string;

    private _unsubscribeAll: Subject<any>;
    user: any;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2,
        private _profileService: PerfilService        
    )
    {

        this._unsubscribeAll = new Subject();

        // Set the private defaults
        this._variant = 'vertical-style-1';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Variant
     */
    get variant(): string
    {
        return this._variant;
    }

    @Input()
    set variant(value: string)
    {
        // Remove the old class name
        this._renderer.removeClass(this._elementRef.nativeElement, this.variant);

        // Store the variant value
        this._variant = value;

        // Add the new class name
        this._renderer.addClass(this._elementRef.nativeElement, value);
    }

    ngOnInit(): void {
        this._profileService.infoOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(info => {
                this.user = info;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
