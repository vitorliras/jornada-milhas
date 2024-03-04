import { UserService } from 'src/app/core/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(
    private userService: UserService,
    private router: Router
  ){}

  user$ = this.userService.retornarUser()

  logout(){
    this.userService.logout()
    this,this.router.navigate(['/login'])
  }
}
