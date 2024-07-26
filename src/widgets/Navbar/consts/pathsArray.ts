import { routesEnum } from "@/shared/routes/routes";

interface pathObject {
  path: string;
  text: string;
}

export const pathsArray: pathObject[] = [
  {path: routesEnum.main, text: 'Главная'},
  {path: routesEnum.mars, text: 'Марс'},
  {path: routesEnum.exoplanets, text: 'Экзопланеты'},
  {path: routesEnum.about, text: 'О нас'} 
]