import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesService, EpisodeDto , EpisodeResponse} from '../../services/episodes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [CommonModule,FormsModule ]  ,
  templateUrl: './episodes-list.html',
  styleUrls: ['./episodes-list.css']
})
export class EpisodesList implements OnInit {
 episodes: EpisodeDto[] = [];
 page = 1;

  currentPage: number = 1;
  totalPages: number = 0;
  searchTerm: string = '';
  errorMessage: string | null = null;

  constructor(private episodesService: EpisodesService) {}

  ngOnInit(): void {
     //this.loadEpisodes();
     this.loadEpisodes(1);
  }

  loadEpisodes(page: number = 1): void {
    this.errorMessage = null;
    this.episodesService.getEpisodes(page).subscribe({
      next: (res: EpisodeResponse) => {
        console.log('Respuesta:', res);
        //this.episodes = res?.results ?? [];
        this.episodes = res.results.slice();
        this.currentPage = page;
        this.totalPages = res?.info?.pages ?? 0;
      },
      error: (err) => {
      console.error('Error cargando episodios', err);
      this.errorMessage = 'No se pudieron cargar los episodios. Intenta más tarde.';
      this.episodes = []; // limpiar lista si falla
    }


    });
  } 

 
  search(): void {
    this.errorMessage = null;
    if (!this.searchTerm) return;
    this.episodesService.searchEpisodes(this.searchTerm).subscribe({
      next: (res: EpisodeResponse) => {
        this.episodes = res.results;
        // en búsqueda no hay paginación, así que reseteamos
        this.totalPages = 0;
      },
      error: (err) => {
      console.error('Error en la busqueda', err);
      this.errorMessage = `No se pudieron buscar episodios con el término "${this.searchTerm}".`;
      this.episodes = []; // limpiar lista si falla
    }
    });
  }

}