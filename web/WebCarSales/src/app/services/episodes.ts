import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/* @Injectable({
  providedIn: 'root',
})
export class Episodes {
  
} */

export interface Episode {
  id: number;
  name: string;
  airDate: string;
  episode: string;
}

export interface EpisodeResponse {
  info: { count: number; pages: number; next?: string; prev?: string };
  results: Episode[];
}

@Injectable({ providedIn: 'root' })
export class EpisodesService {
  private apiUrl = 'http://localhost:5083/api/episodes';

  constructor(private http: HttpClient) {}

  getEpisodes(page: number = 1): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.apiUrl}?page=${page}`);
  }
}

