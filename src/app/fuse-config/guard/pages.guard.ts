import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../main/pages/authentication/login/login.service';

@Injectable({
    providedIn: 'root'
})
export class PagesGuard implements CanActivate {
    constructor(
        public authService: LoginService,
        public router: Router
    ){}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn){
            console.error('Ya iniciaste sesion no puedes volver a esta pagina.');
            this.router.navigate(['/apps/dashboards/analytics']);
        }
        return true;
    }
}
