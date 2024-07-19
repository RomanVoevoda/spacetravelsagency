import { ReactNode } from "react";

export interface ContentBlockProps {
  header: string;
  image_src: string;
  image_title: string
  image_alt: string
  text: string;
  children: ReactNode;
}