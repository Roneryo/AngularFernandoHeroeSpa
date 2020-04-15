import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private heroesService: HeroesService,
               private router: Router) { }
  ngOnInit() {
  }

  buscarHeroe(termino: string){
    // console.log(this.heroesService.buscarHeroes(termino));
    this.router.navigate(['search',termino]);
  }
}
