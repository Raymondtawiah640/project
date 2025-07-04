import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ THIS is required for routerLink
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], // ✅ NOT RouterOutlet
  templateUrl: './navbar.html',
})
export class NavbarComponent {}
