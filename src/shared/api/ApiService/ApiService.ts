import { imageData } from "@/widgets/Gallery/types/types";
import axios from "axios";

export default class ApiService {
  public apiKey;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  };

  public static async fetchMarsImages(apiKey: string, callback: React.Dispatch<React.SetStateAction<imageData[]>>) {   
    try {
      const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?', {
        params: {
          sol: this.roll(1, 4102) /*Максимальная дата у Curiosity 4102 сол*/,
          page: 1,
          api_key: apiKey,      
        }
      })
  
      callback(response.data.photos);
    } catch(e) {
      throw new Error;
    }
  }

  public static async fetchExoplanets(callback: React.Dispatch<React.SetStateAction<any>>) {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/anime');

      callback(response.data.data);
    } catch(e) {
      throw new Error()
    }
  }

  public static async fetchPlanetById(callback: React.Dispatch<React.SetStateAction<any>>, id: string) {
    try {   
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);

      callback(response.data.data);
    } catch(e) {
      throw new Error()
    }
  }

  public static roll(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}