import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalComponent { }

