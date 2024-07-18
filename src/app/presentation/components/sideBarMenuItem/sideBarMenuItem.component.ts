import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar-menu-item',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './sideBarMenuItem.component.html',
  styleUrl: './sideBarMenuItem.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*Se importan todos los datos que debemos recibir */
export class SideBarMenuItemComponent { 
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() path: string = '';
}
