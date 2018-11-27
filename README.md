# Chat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Tutorial - Spanish

Este es el ejemplo / proyecto a realizar por los alumnos del curso de Angular de Fictizia. Se irán añadiendo instrucciones aquí paso a paso

  ### Generar el proyecto. 
  
  Podemos generar el proyecto utilizando el comando 
  ```
  ng new chat
  ````
  Esto generará una carpeta chat en la que se crearán los archivos necesarios para comenzar un proyecto angular. Podemos lanzar la aplicación utilizando el comando siguiente y accediendo al puerto localhost:4200
  ````
  ng serve
  ````

  ### Generar un componente avatar. 
  En este componente, visualizaremos la información de los contactos que vayamos utilizando. Podemos generar nuevos componentes utilizando el siguiente comando.
  ```
  ng generate component avatar
  ````

  Por defecto, nos generará un componente con el selector app-avatar. Si añadimos el html siguiente, visualizaremos en nuestra aplicación el mensaje app avatar works!
  ````
  <app-avatar></app-avatar>
  `````
  Una vez tenemos el componente creado, podemos añadirle propiedades mediante Inputs. Consulta las slides si tienes dudas, pero acabaremos con algo asi en nuestro avatar.component.ts
  ````
  class AvatarComponent {
    @Input() imgSrc: string;
  }
  ````
 algo así en nuestro avatar.component.html
 ```
  <img [src]="imgSrc">
  ```
 y así en nuestro app.component.html
 ```
  <app-avatar src="<una url que os guste.jpg"></app-avatar>
 ```

Con esto, habremos creado nuestro primer componente con propiedades de entrada (Inputs)

  ### Generar un componente de introducción de texto.
  
  Ahora que ya sabemos crear un componente, y utilizar Inputs para pasarles propiedades, podemos crear un componente para enviar mensajes en nuestro chat. Este componente, va a utilizar NgModel para recoger la información que introduzcamos en un input. NgModel vincula el valor de un input con una propiedad. Para utilizarlo debemos seguir 3 pasos.
  
  Primero, vamos al app.module.ts para añadir el módulo de formularios de Angular. Angular no importa todos los módulos por defecto para dejarnos escoger que queremos y que no queremos usar. En este caso, vamos a añadir el modulo FormsModule al app.module.ts, añadiendo el import, e incluyendolo dentro del array de imports

```
import { FormsModule } from '@angular/forms';

@NgModule({
  ...
  imports: [
    BrowserModule,
    FormsModule
  ],
  ...
})
export class AppModule { }
```

Ahora ya podemos utilizar NgModel en nuestro componente. Vamos a empezar generando el componente
  
  ```
  ng g c text
  ```

Ahora vamos a crear una variable "message" en nuestro text.component.ts para almacenar el valor introducido en el input por el usuario

```
export class TextComponent implements OnInit {
  message: string = '';
  
  constructor() {}
  ngOnInit() {}
}
```
Y vamos a añadir un input en nuestro text.component.html para que el usuario pueda introducir el mensaje que desea
```
<input [(ngModel)]="message" type="text" placeholder="Message">
{{ message }}
```
Si introducimos un valor en el input, veremos que automaticamente se muestra debajo, gracias al NgModel, hemos creado una relación entre el input y la variable que hemos creado previamente. Cada vez que modifiquemos esta variable se verá reflejado en la vista.

Vamos a añadir un botón para confirmar el mensaje

```
<input [(ngModel)]="message" type="text" placeholder="Message">
<button (click)="sendInfo()"> Enviar </button>
```

Mediante la notación (click), podemos escuchar el evento click en el botón y llamar a una función sendInfo que hayamos definido en nuestro componente. Vamos a mostrar el mensaje por un alert

```
export class TextComponent implements OnInit {
  message: string = '';
  
  constructor () {}
  ngOnInit () {}
  
  sendInfo () {
    alert(this.message);
  }
}
```
