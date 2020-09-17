import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-campeon',
  templateUrl: './registro-campeon.component.html',
  styleUrls: ['./registro-campeon.component.css']
})
export class RegistroCampeonComponent implements OnInit {

  rps: any = [];
  rp: any = {
    nombre: '',
    sobrenombre: '',
    rol: '',
    atributo:'',
    lanzamiento:'',
  }

  constructor(private httpClient: HttpClient) { 

  }

  registrarCampeon(){
    this.httpClient.post('http://localhost:8888/campeones', this.rp)
    .subscribe(res=>{
      console.log(res);
    });   
  }

  ngOnInit(): void {
  }

}
