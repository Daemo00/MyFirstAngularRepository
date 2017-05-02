import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}