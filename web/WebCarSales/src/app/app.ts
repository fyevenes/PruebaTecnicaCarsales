import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpisodesList } from './components/episodes-list/episodes-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , EpisodesList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica-carsales');
}
