import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pokedex } from 'src/model/pokedex';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private static urlPokedex = 'https://pokeapi.co/api/v2/pokemon-species/?limit=493/';

  constructor(private httpClient: HttpClient){ }

  getPokedex(): Observable<Pokedex>{
    return this.httpClient.get<Pokedex>(PokedexService.urlPokedex);
  }
}
