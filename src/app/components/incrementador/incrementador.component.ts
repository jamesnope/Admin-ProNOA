import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  onChange( newValue: number) {
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    if (newValue >= 100 ) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.cambioValor.emit( this.progreso );
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
  }

  cambiarValor(valor: number) {
    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    } else if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    } else {
      this.progreso += valor;
      this.cambioValor.emit( this.progreso );
      // Para poner el foco en el input que se esta modificando
      this.txtProgress.nativeElement.focus();
    }
  }
}
