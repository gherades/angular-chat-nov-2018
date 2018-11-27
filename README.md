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
 ````
  <app-avatar src="url.jpg"></app-avatar>
 `````

Con esto, habremos creado nuestro primer componente con propiedades de entrada (Inputs)
