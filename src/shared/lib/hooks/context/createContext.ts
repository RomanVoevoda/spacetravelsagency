import { createContext } from "react";
import { IContext } from "./types";

export const ThemeContext = createContext<IContext | undefined>(undefined);