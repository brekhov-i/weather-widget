import { TWeatherForecastResponse } from "@/app/types/weather";

export default class WeatherDto {
  city: string;
  humidity: number;
  pressure: number;
  temp: number;
  tempMin: number;
  tempMax: number;
  feels_like: number;
  visibility: number;
  textDesc: string;
  icon: string;
  wind: {
    speed: number;
    deg: number;
  };

  constructor(model: TWeatherForecastResponse) {
    this.city = model.name;
    this.humidity = model.main.humidity;
    this.pressure = model.main.pressure;
    this.temp = model.main.temp;
    this.tempMin = model.main.temp_min;
    this.tempMax = model.main.temp_max;
    this.feels_like = model.main.feels_like;
    this.visibility = model.visibility;
    this.textDesc = model.weather[0].description;
    this.icon = model.weather[0].icon;
    this.wind = {
      speed: model.wind.speed,
      deg: model.wind.deg,
    };
  }
}
