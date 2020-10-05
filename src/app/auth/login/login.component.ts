import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutentificacionService } from '../services/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutentificacionService],
})
export class LoginComponent implements OnInit {
  inicioFormulario= new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(private authSF: AutentificacionService, private router: Router) { }

  ngOnInit(): void {

  }

  async iniciar() {
    const {correo, contrasena } = this.inicioFormulario.value;
    try{
      const usuario = await this.authSF.iniciar(correo, contrasena);
      if(usuario) {
        this.router.navigate(['/principal']); //add registro-campeon.
      }
    } catch (error) {
      console.log(error);
    }
  }

}
