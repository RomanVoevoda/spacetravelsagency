import axios from "axios";
import { MainImageData } from "../types/types";

export async function fetchMainImage(apiKey: string, callback: React.Dispatch<React.SetStateAction<MainImageData | undefined>>) {
  let baseURL = 'https://api.nasa.gov/planetary/apod?'

  try {
    let result = await axios.get<MainImageData>(baseURL + apiKey);

    callback(result.data);
  } catch(e) {
    console.log(e);
  }
}