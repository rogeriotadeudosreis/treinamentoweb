import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns = ['nome', 'sobrenome', 'telefone', 'email', 'password'];
  dataSource = ELEMENT_DATA;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarUsuario();
  }

  listarUsuario(): void {
    this.userService.read().subscribe((resposta) => {
      this.dataSource = resposta;
      console.log(resposta);
    });
  }

  navigateToUserCreate(): void {
    this.router.navigate(["/user-create"]);
  }

  navigateToUserDetail():void {
    this.router.navigate(['/user-detail'])
  }

}
