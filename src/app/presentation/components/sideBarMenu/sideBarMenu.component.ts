import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar-menu',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './sideBarMenu.component.html',
  styleUrl: './sideBarMenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*Se importan todos los datos que debemos recibir */
export class SideBarMenuComponent { 
  @Input({required: true}) icon: string = '';
  @Input({required: true}) title: string = '';
  @Input({required: true}) descripton: string = '';
  @Input({required: true}) path: string = '';
}
