import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  skills = [
    { name: 'HTML/CSS', img: 'assets/images/html.png' },
    { name: 'SASS', img: 'assets/images/s.png' },
    { name: 'SCSS', img: 'assets/images/s.png' },
    { name: 'Bootstrap', img: 'assets/images/bootstrap.jpeg' },
    { name: 'Tailwind', img: 'assets/images/tailwind.png' },
    { name: 'JavaScript', img: 'assets/images/js.png' },
    { name: 'Angular', img: 'assets/images/angular.png' },
    { name: 'TypeScript', img: 'assets/images/ts.jpeg' },
    { name: 'C#', img: 'assets/images/csh.png' },
    { name: 'ASP.NET Core', img: 'assets/images/asp.png' },
    { name: 'Web API', img: 'assets/images/webapi.png' },
    { name: 'Github', img: 'assets/images/githubs.jpeg' }
  ];
}
