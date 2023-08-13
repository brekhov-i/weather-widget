import { TCoordinates, TLocationResponse } from "@/app/types/location";
import axios, { AxiosResponse } from "axios";
import { ref } from "vue";
import locationDto from "../dtos/location.dto";

export default function useGetGeoUser() {
  const gettingLocation = ref<boolean>(false);
  const errorStr = ref<null | string>(null);

  const getGeoUser = async (): Promise<TCoordinates> => {
    let location: TCoordinates = {
      lat: 0,
      lon: 0,
    };
    if ("geolocation" in navigator) {
      await getGeoApi();
    }
    const pos: GeolocationPosition = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    location = new locationDto(pos);

    return location;
  };

  const getGeoApi = async (): Promise<TCoordinates> => {
    let location: TCoordinates = {
      lat: 0,
      lon: 0,
    };
    await axios
      .get("http://ip-api.com/json/")
      .then((res: AxiosResponse<TLocationResponse>) => {
        location = new locationDto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return location;
  };

  return { gettingLocation, errorStr, getGeoUser, getGeoApi };
}
