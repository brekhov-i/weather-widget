export interface ICity {
  name: string;
  localName: string;
  lat: number;
  lon: number;
  state: string;
}

export type TCityResponse = {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
};
