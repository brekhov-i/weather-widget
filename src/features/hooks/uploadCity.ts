import axios from "axios";
import { Ref, ref, watch } from "vue";
import CityDto from "../dtos/city.dto";
import { ICity, TCityResponse } from "@/app/types/city";

export default function useUploadCities(searchString: Ref) {
  const cityList = ref<ICity[]>([]);

  const uploadCityList = async (searchCity: string) => {
    await axios
      .get("http://api.openweathermap.org/geo/1.0/direct", {
        params: {
          appid: "69fd191df13fa1cd0851e5d065f8ff69",
          q: searchCity,
          limit: 5,
        },
      })
      .then((res) => {
        cityList.value = res.data.map(
          (city: TCityResponse) => new CityDto(city)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  watch(searchString, async (next) => {
    if (next === "") {
      cityList.value = [];
      return;
    }
    await uploadCityList(next);
  });

  return {
    cityList,
  };
}
