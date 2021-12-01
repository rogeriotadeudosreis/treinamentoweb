import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {

    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    password: ''

  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('Falta implementar a funcionalidade login')
  }

}
