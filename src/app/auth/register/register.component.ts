import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AutentificacionService } from './../services/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ AutentificacionService ],
})
export class RegisterComponent implements OnInit {
  
  registroFormulario = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(private authSF: AutentificacionService, private router:Router) { }

  ngOnInit(): void { }

  async registrar(){
    const { correo, contrasena } = this.registroFormulario.value; 
    try {
      const usuario = await this.authSF.registrar(correo, contrasena);
      if(usuario){
        await this.authSF.cerrarSesion();
        this.router.navigate(['/login']); 
      }
    } catch (error) {
      console.log(error);
    }
  }

}
