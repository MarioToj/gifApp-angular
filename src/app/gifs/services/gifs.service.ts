import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
// import { environment } from '@environments/environment.';
import { map, tap } from 'rxjs';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from './mappers/giphy.mapper';
import { environment } from '@environments/environment';


const loadGIfsFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  // console.log(gifs);
  return gifs;
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(loadGIfsFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    
    this.loadTrendingGifs();
  }

  setGifsToLocalStorage = effect(() => {
    const gifsHistorytoString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', gifsHistorytoString); 
  });

  loadTrendingGifs() {

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      // console.log(gifs);
    });
  }

  // El susbscribe es recomendable hacerlo en el componente en el servicio se debe de procesar la data
  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query,
      }
    }).pipe(
      map(({ data }) => data),
      map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

      tap((items) => this.searchHistory.update((prevValue) => ({
    //searchHistory = signal<Record<string, Gif[]>>({});
        ...prevValue, [query.toLocaleLowerCase()]: items
      }))),
    );
  }

  getHistoryGifs(key: string): Gif[] {
    return this.searchHistory()[key] ?? [];
  }

}
