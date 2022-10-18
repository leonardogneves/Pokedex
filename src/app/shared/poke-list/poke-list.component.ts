import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  //Paginação
  public previous: any;
  public next: any;
  public count: any;
  public limit: number = 60;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );

    this.paginacao();
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

  public paginacao() {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.count = res.count;
        this.next = res.next;
        this.previous = res.previous;
        this.count = this.count;
        this.next = this.next + 60;
        this.previous = this.previous;
      },
      error => {
        this.apiError = true;
      }
    );
  }
}
