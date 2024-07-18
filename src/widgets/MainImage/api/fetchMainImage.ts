import axios from "axios";
import { MainImageData } from "../types/types";

export async function fetchMainImage(apiKey: string, callback: React.Dispatch<React.SetStateAction<MainImageData | undefined>>) {
  let baseURL = 'https://api.nasa.gov/planetary/apod?'

  try {
    let result =  await axios.get<MainImageData>(baseURL, {
      params: {
        api_key: apiKey
      }
    });

    callback(result.data);
  } catch(e) {
    throw new Error;
  }
}