import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactItems = [
    { name: 'Sufiyan Abbasi', iconUrl: 'assets/images/link.svg', link: 'https://www.linkedin.com/in/sufiyan-abbasi-03aa38250/' },
    { name: '+92 348 9426251', iconUrl: 'assets/images/call.svg', link: '+92 348 9426251' },
    { name: 'sufiyantahirabbasi1122@gmail.com', iconUrl: 'assets/images/email.svg', link: 'sufiyantahirabbasi1122@gmail.com' },
    { name: 'SufiyanAbbasi', iconUrl: 'assets/images/github.svg', link: 'https://github.com/SufiyanAbbasi' }
  ];
}
