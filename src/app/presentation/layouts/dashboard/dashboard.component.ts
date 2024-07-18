//Angular
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//App
import { GlobalComponent } from "../global/global.component";
import { HeaderComponent } from "../header/header.component";
import { MenuComponent } from "../menu/menu.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    /*Angular*/
    CommonModule,
    RouterOutlet,
    /*App*/
    GlobalComponent,
    HeaderComponent,
    MenuComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent { }
