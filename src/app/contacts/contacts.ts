import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class ContactsComponent {

}
