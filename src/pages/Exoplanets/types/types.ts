interface Image {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
}

interface PlanetImages {
  jpg?: Image;
  webp?: Image;
}

export interface PlanetData {
  title: string;
  images?: PlanetImages;
  score: number;
  mal_id: number;
}