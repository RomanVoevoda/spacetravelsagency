import { routesEnum } from "@/shared/routes/routes";
import { NavigateFunction } from "react-router-dom";

export function transitToPlanet(navigate: NavigateFunction, id: number) {
  navigate(`${routesEnum.exoplanets}/${id}`, {replace: true});
}