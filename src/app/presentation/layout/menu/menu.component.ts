//Angular
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
//App
import { SideBarMenuComponent } from '../../components/sideBarMenu/sideBarMenu.component';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideBarMenuComponent
],

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
@Output() optionClicked = new EventEmitter<string>();

//rutas
  public routes = routes[0].children?.filter( (route)=> route.data);

  optionClick(option: string){
    this.optionClicked.emit(option);
  }
}
