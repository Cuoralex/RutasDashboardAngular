import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './presentation/layout/dashboard/dashboard.component';

export const routes: Routes = [
    path:'',
    Component: DashboardComponent,
    children: [
        {
            path:'home',
            loadComponent: () =>
                import('./presentation/pages/home/home.component'),
            data: {
                icon:'home',
                title: 'inicio',
                description: 'Pagina de inicio',
            },
        },
    ]
];
