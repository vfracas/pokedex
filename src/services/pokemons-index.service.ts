import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from '../model/pokemon';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsIndexService {

  constructor(private httpClient: HttpClient){ }

  getPokemons(url: string): Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(url);
  }
}
