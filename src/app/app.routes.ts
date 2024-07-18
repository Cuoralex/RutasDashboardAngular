import { Routes } from '@angular/router';
import { DashboardComponent } from './presentation/layouts/dashboard/dashboard.component';

export const routes: Routes = [
   { 
    path:'',
    component: DashboardComponent,
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
        {
            path:'about',
            loadComponent: () =>
                import('./presentation/pages/about/about.component'),
            data: {
                icon:'about',
                title: 'Acerca de',
                description: 'Acerca de',
            },
        },
   ]
}
];
