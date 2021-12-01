import { registerLocaleData } from '@angular/common';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  userCreateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.formulary();
  }

  formulary() {
    this.userCreateForm = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      sobrenome: ['', Validators.required, Validators.minLength(3)],
      telefone: ['', Validators.required, Validators.min(9)],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.min(6)]
    });
  }

  createUser(): void {

    const userNew = this.userCreateForm.getRawValue() as User

    console.log('Enviando dados do novo usuário....', userNew)

    this.userService.create(userNew).subscribe(() => {
      this.userService.showMessage('Cadastro de usuário realizado com sucesso')
      this.router.navigate(['/user-list'])
    }, err => {
      this.userService.showMessage('Erro ao cadastrar esse usuário')
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
