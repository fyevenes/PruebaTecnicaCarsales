import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesService, Episode } from '../../services/episodes';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodes-list.html',
  styleUrls: ['./episodes-list.css']
})
export class EpisodesList implements OnInit {
  episodes: Episode[] = [];
  page = 1;

  constructor(private service: EpisodesService) {}

  ngOnInit() {
    this.loadEpisodes();
  }

 loadEpisodes() {
  this.service.getEpisodes(this.page).subscribe({
    next: res => {
      console.log('Datos recibidos:', res);
      this.episodes = res.results;
    },
    error: err => {
      console.error('Error al cargar episodios:', err);
    }
  });
}


  nextPage() {
    this.page++;
    console.log('Página actual:', this.page);
    this.loadEpisodes();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      console.log('Página actual:', this.page);
      this.loadEpisodes();
    }
  }
}