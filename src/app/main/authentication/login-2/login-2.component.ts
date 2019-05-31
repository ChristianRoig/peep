import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';

@Component({
    selector     : 'login-2',
    templateUrl  : './login-2.component.html',
    styleUrls    : ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Login2Component implements OnInit
{
    loginForm: FormGroup;

    error: boolean = false;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private router: Router,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required]], //, Validators.email
            password: ['', Validators.required]
        });
    }

    onSubmit(): void{
        
        // console.log("email " + this.loginForm.get('email').value);
        // console.log("password " + this.loginForm.get('password').value);

        this.error = this._checkIngreso();


        if (!this.error){
            this._saveLocalStorage();

            this.router.navigate(['perfil']); 
        }else{
            // true


        }

        
    }

    private _checkIngreso(): boolean{
        const usuarios = ['fq', 'sf', 'ce', 'fm'];

        const mail: string = this.loginForm.get('email').value;
        const pass: string = this.loginForm.get('password').value;
        
        if ((pass !== "demo") || (usuarios.indexOf(mail) < 0)){
            return true;
        }

        return false;

    }

    private _saveLocalStorage(): void {        
        localStorage.removeItem("user");
        localStorage.clear();

        let mail: string = this.loginForm.get('email').value;


        if ((mail === "fq") || (mail === "FQ") || (mail === "sf") || (mail === "SF") || (mail === "ce") || (mail === "CE")) {
            localStorage.setItem("user", mail);
        } else {
            localStorage.setItem("user", "fm");
        }

    }



}
