import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  public usuario: User;

  constructor(public Auth: AngularFireAuth) { }

  async iniciar(correo: string, contrasena: string){
    try{
      const result = await this.Auth.auth.signInWithEmailAndPassword(
        correo, 
        contrasena
      );
      return result;
    }catch (error) {
      console.log(error);
    }
  }

  async registrar(correo: string, contrasena: string){
    try{
      const result = await this.Auth.auth.createUserWithEmailAndPassword(
        correo,
        contrasena
      );
      return result;
    }catch (error){
      console.log(error)
    }
  }


  async cerrarSesion(){
    try{
      await this.Auth.auth.signOut();
    }catch (error){
      console.log(error);
    }
  }

  obtenerUsuario(){
    return this.Auth.authState.pipe(first()).toPromise();
  }

  async inicioGoogle(){
    try{
      return this.Auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }catch(error){
      console.log(error);
    }
  }

  async inicioFacebook(){
    try{
      return this.Auth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    }catch(error){
      console.log(error);
    }
  }

  async inicioGitHub(){
    try{
      return this.Auth.auth.signInWithPopup(new auth.GithubAuthProvider());
    }catch(error){
      console.log(error);
    }
  }
}
