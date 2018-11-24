import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
