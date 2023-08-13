import { TLocationResponse } from "@/app/types/location";

export default class locationDto {
  lat: number;
  lon: number;

  constructor(model: Partial<GeolocationPosition & TLocationResponse>) {
    this.lat = model.lat ? model.lat : model.coords ? model.coords.latitude : 0;
    this.lon = model.lon
      ? model.lon
      : model.coords
      ? model.coords.longitude
      : 0;
  }
}
