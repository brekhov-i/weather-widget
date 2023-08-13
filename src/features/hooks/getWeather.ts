import { IWeather, TWeatherForecastResponse } from "@/app/types/weather";
import axios, { Axios, AxiosResponse } from "axios";
import { ref } from "vue";
import WeatherDto from "@/features/dtos/weather.dto";

export default function useGetWeather() {
  const weather = ref<null | IWeather>(null);
  const loadingWeather = ref<boolean>(true);

  const getWeather = async (location: { lat: number; lon: number } | null) => {
    const locat = {
      lat: location ? location.lat : "",
      lon: location ? location.lon : "",
      appid: "69fd191df13fa1cd0851e5d065f8ff69",
      lang: "ru",
      units: "Metric",
    };

    await axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: locat,
      })
      .then((res: AxiosResponse<TWeatherForecastResponse>) => {
        weather.value = new WeatherDto(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loadingWeather.value = false;
      });
  };

  return { loadingWeather, weather, getWeather };
}
