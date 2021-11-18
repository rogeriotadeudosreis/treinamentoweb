import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createUser(): void {
    console.log('Enviando dados do novo usuário....', this.user)
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Cadastro de usuário realizado com sucesso')
      this.router.navigate(['/user-list'])
    }, err => {
      this.userService.showMessage('Erro ao cadastrar esse usuário')
    })
  }

  cancel(): void {
    this.router.navigate(['/user-list'])    
  }

}
