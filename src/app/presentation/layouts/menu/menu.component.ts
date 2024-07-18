/*Angular*/
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
/*App*/
import { SideBarMenuItemComponent } from '../../components/sideBarMenuItem/sideBarMenuItem.component';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    SideBarMenuItemComponent,
],

  
})
export class MenuComponent {
@Output() optionClicked = new EventEmitter<string>();

//rutas
  public routes = routes[0].children?.filter( (route)=> route.data);

  optionClick(option: string){
    this.optionClicked.emit(option);
  }
}
