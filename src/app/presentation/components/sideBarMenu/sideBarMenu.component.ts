import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sideBarMenu.component.html',
  styleUrl: './sideBarMenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SedeBarMenuComponent { }
