import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
import { format } from 'util';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public forma: FormGroup;

  constructor(public builder: FormBuilder) {


    this.forma = this.builder.group({
      nombre: ['', Validators.required],
      appa: ['', Validators.required],
      apma: ['', Validators.required],
      sexo: ['', Validators.required],
      edad: ['', [Validators.required, Validators.maxLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
    });



  }

  @Input() personas;


  public addPersona= function(){
    var reg: RegExp = new RegExp("[1-9]");

    if(!reg.test(this.forma.value.edad)){
      console.log(reg.test(this.forma.value.edad));
      alert('Edad incorrecta');
      return;
    }



    this.personas.push(
      {
        Pnombre: this.forma.value.nombre,
        Pappa: this.forma.value.appa,
        Papma: this.forma.value.apma,
        Psexo: this.forma.value.sexo,
        Pedad: this.forma.value.edad,
        Pcorreo: this.forma.value.correo,
        Picono: Math.round(Math.random()*(10-1)+1)
      });

    this.forma = this.builder.group({
        nombre: '',
        appa: '',
        apma: '',
        sexo: '',
        edad: '',
        correo: '',
      });
  }
  ngOnInit(): void {


  }





}
