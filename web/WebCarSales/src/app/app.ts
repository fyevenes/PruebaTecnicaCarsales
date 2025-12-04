import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpisodesList } from './components/episodes-list/episodes-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , EpisodesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica-carsales');
}
