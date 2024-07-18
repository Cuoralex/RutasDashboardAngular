import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  routes = [
  {
    path: '/home',
    data: {
      description: 'Home',
      icon: 'home',
      title: 'Home'
    }
  },
  {
    path: '/about',
      data: {
        description: 'About Us',
        icon: 'info',
        title: 'About'
      }
    }
  ];
title: any;
    trackByPath(index: number, route: any): string {
      return route.path;
    }
  
    optionClick(description: string) {
      console.log(`Option clicked: ${description}`);
    }}