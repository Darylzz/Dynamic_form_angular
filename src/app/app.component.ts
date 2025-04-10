import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMenuModule } from './app-menu/app-menu.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dynamic-form';
}
