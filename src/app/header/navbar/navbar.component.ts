import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/auth/services/autentificacion.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AutentificacionService],
})
export class NavbarComponent {
  public activo = false;

  public usuario$: Observable<any> = this.authSF.Auth.user;

  constructor(private authSF: AutentificacionService, private router:Router) { }

  async ngOnInit() { }


  async cerrarSesion(){
    try{
      await this.authSF.cerrarSesion();
      this.router.navigate(['/login']);
    }catch (error) {
      console.log(error);
    }

  }

}
