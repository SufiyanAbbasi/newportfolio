import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  name: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'Multikart',
      imageUrl: 'assets/images/multikart.png',
      link: 'https://usermultikart.vercel.app/'
    },
    {
      name: 'DMA',
      imageUrl: '/assets/images/dmam.png',
      link: 'https://dmatask.vercel.app/'
    },
    {
      name: 'School Admin Panel',
      imageUrl: '/assets/images/forthproj.png',
      link: 'https://school-admin-panel-blush.vercel.app/admindashboard'
    },
    {
      name: 'Todo List',
      imageUrl: '/assets/images/tod.png',
      link: 'https://mytodotask.vercel.app/'
    },
    {
      name: 'Admin Multikart',
      imageUrl: '/assets/images/fifthproj.png',
      link: 'https://clothkarttt.vercel.app/dashboard'
    }
  ];


}
