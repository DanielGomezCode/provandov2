import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { ChaoComponent } from './chao/chao.component';

const routes: Routes = [
  {path: '', component:HolaComponent},
  {path: 'chao', component:ChaoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    ChaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
