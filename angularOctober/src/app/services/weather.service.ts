import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Weather } from '../models/weather';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric&APPID=faf17d6bfe1477a97755d5134779e59c';

  constructor(private httpclient: HttpClient) {
  }

  fetchWeather(): Observable<Weather> {
    const weatherObservable: Observable<any> = this.httpclient
      .get<HttpResponse<WeatherApiResponse>>(this.apiUrl, {observe: 'response'});
    return weatherObservable
      .pipe(
        tap((response: HttpResponse<WeatherApiResponse>) => console.log('Weather from server', response)),
        map(response => response.body!.main),
      )
  }
}

interface WeatherApiResponse {
  main: Weather;
}
