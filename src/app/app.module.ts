import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/generals/formulario/formulario.component';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { TablaComponent } from './components/generals/tabla/tabla.component';
import { HomeComponent } from './components/vistas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
