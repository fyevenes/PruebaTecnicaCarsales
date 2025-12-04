import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/* @Injectable({
  providedIn: 'root',
})
export class Episodes {
  
} */
export interface EpisodeDto {
  id: number;
  name: string;
  airDate: string;
  episode: string;
}

export interface EpisodeResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: EpisodeDto[];
}

@Injectable({ providedIn: 'root' })
export class EpisodesService {
  private apiUrl = 'http://localhost:5083/api/episodes';

  constructor(private http: HttpClient) {}
  //paginacion
  getEpisodes(page: number = 1): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.apiUrl}?page=${page}`);
  }
  // busqueda
  searchEpisodes(query: string): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.apiUrl}/search?query=${query}`);
  }

}

