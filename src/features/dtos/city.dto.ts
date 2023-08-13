export default class CityDto {
  name: string;
  localName: string;
  lat: number;
  lon: number;
  state: string;

  constructor(model: any) {
    this.name = model.name;
    this.localName = model.local_names ? model.local_names.ru : "";
    this.lat = model.lat;
    this.lon = model.lon;
    this.state = model.state;
  }
}
