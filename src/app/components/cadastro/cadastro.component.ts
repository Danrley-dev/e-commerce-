import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  cadastroForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    senha: ["", [Validators.required, Validators.minLength(8)]],
    cpf: ["", [Validators.required, Validators.minLength(11)]],
    cep: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    rua: ["", [Validators.required]],
    cidade: ["", [Validators.required]],
    estado: ["", [Validators.required]]
  })

  get email(){
    return this.cadastroForm.get("email");
  }
  get senha(){
    return this.cadastroForm.get("senha");
  }
  get cpf(){
    return this.cadastroForm.get("cpf");
  }
  get cep(){
    return this.cadastroForm.get("cep");
  }
  get rua(){
    return this.cadastroForm.get("rua");
  }
  get cidade(){
    return this.cadastroForm.get("cidade");
  }
  get estado(){
    return this.cadastroForm.get("estado");
  }

  ngOnInit(): void {
  }

}
