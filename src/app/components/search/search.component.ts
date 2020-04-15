import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroes: Heroe[]=[];
  termino: string;
  constructor( private heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
    this.heroes = this.heroesService.buscarHeroes(params['termino']);
    this.termino=params['termino'];
    console.log(this.heroes);
  })
  }

  ngOnInit() {

  }
  
    verHeroe(termino: string){
    }

}
