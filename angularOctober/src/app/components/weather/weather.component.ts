import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  weather = {} as Weather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.fetchWeather().subscribe(weather => {
      this.weather = weather
      })
  }
}
