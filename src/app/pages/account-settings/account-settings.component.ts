import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    // Cuando la pagina sea cargada
    this.colocarCheck();
  }

  cambiarColor( tema: string , link: any ) {
    // console.log( link );
    this.aplicarCheck( link );
    this._ajustes.asignarTema( tema );
  }
  aplicarCheck( link: any ) {
    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ) {
      ref.classList.remove('working');
     }
     link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for (let ref of selectores ) {
      if( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
