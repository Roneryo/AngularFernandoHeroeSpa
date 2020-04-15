import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  constructor() { }

  ngOnInit() {
  }
  verHeroe(data: number){

  }

}
