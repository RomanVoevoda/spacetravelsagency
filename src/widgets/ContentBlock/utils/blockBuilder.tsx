import { useRef } from "react"
import { ContentBlockProps } from "../types/types"
import ContentBlock from "../ui/ContenBlock";

export const useBlockBuilder = () => {
  const props = useRef<Partial<ContentBlockProps>>({} as ContentBlockProps);

  const builder = {
    setHeader: (header: string) => {
      props.current.header = header;
      return builder;
    },

    setImage: (src: string, alt: string, title?: string) => {
      props.current.image_src = src;
      props.current.image_alt = alt;

      if(title) {
        props.current.image_title = title;
      }

      return builder;
    },

    setText: (text: string) => {
      props.current.text = text;
      return builder;
    },

    build: () => <ContentBlock {...props.current} />,
    
    clearRefs: () => {
      props.current = {} as ContentBlockProps
    }
  }

  return builder;
}