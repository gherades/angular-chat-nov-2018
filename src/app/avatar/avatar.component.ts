import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
/**
 * Componente Avatar para visualizar las imágenes de los usuarios
 */
export class AvatarComponent implements OnInit {
  /**
   * Definimos el atributo srcValue con el alias src
   */
  @Input('src') srcValue: string = 'perrete';
  /**
   * Definimos el atributo altValue con el alias src
   */
  @Input('alt') altValue: string;

  constructor() { }

  ngOnInit() {
  }

}
