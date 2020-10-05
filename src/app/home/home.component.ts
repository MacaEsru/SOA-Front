import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../auth/services/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authHS: AutentificacionService, private router: Router) { }

  ngOnInit(): void {
  }

  
  async iniciarGoogle(){
    try{
      this.authHS.inicioGoogle();
      this.router.navigate(['/principal']);
    }catch(error){
      console.log(error);
    }
  }

  async iniciarFacebook(){
    try{
      this.authHS.inicioFacebook();
      this.router.navigate(['/principal']);
    }catch(error){
      console.log(error);
    }
  }

  async iniciarGitHub(){
    try{
      this.authHS.inicioGitHub();
      this.router.navigate(['/principal']);
    }catch(error){
      console.log(error);
    }
  }

}
