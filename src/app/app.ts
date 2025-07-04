import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { Title } from '@angular/platform-browser'; // <-- import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
})
export class App {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio'); // <-- set browser tab title here
  }
}

