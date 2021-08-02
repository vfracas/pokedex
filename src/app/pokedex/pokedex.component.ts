import { Component, OnInit } from '@angular/core';
import { PokemonsIndexService } from 'src/services/pokemons-index.service';
import { PokedexService } from 'src/services/pokedex.service';
import { Pokemon } from 'src/model/pokemon';
import { Pokedex } from 'src/model/pokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokedex!: Pokedex;
  pokemons: Array<Pokemon> = [];
  descr!: string;

  constructor(private pokedexService: PokedexService, private pokemonIndexService: PokemonsIndexService) { }

  ngOnInit(): void {
    this.pokedexService.getPokedex().subscribe(pokedex => {
      this.pokedex = pokedex;
      console.log(this.pokedex);
      pokedex.results.forEach((pokemon, index) =>
        this.pokemonIndexService.getPokemons(pokemon.url).subscribe(pokemon => {
          pokemon.id = index + 1;
          for (const flavorText of pokemon.flavor_text_entries) {
            if (flavorText.language.name === 'fr') {
              pokemon.description = flavorText.flavor_text;
              break;
            }
          }
          this.pokemons.push(pokemon);
        })
      )
      console.log(this.pokemons);
    });
  }



}
