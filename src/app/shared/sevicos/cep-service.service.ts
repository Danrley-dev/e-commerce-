import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from 'src/app/modals/cep/cep';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpclinte:HttpClient) { }

  getBuscar(cep:string): Observable<Cep>{
    return this.httpclinte.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
