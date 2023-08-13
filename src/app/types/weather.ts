import { TCoordinates } from "./location";
import { TStringIndexed } from "./utility-types";

export type IWeather = {
  city: string;
  humidity: number;
  pressure: number;
  temp: number;
  tempMin: number;
  tempMax: number;
  feels_like: number;
  icon: string;
  textDesc: string;
  wind: {
    speed: number;
    deg: number;
  };
};

export type TWeatherForecastResponse = {
  coord: TCoordinates;
  weather: Array<{
    description: string;
    main: string;
    icon: string;
    id: number;
  }>;
  base: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    feels_like: number;
    pressure: number;
  };
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
  clouds: {
    all: number;
  };
  rain: TStringIndexed;
  snow: TStringIndexed;
  dt: number;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  visibility: number;
};
