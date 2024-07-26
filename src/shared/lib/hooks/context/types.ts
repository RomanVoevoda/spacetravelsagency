import React, { SetStateAction } from "react";

export interface IContext {
  colorsTheme: string,
  setColorsTheme: React.Dispatch<SetStateAction<string>>,
  appClasses: Record<string, string>
}