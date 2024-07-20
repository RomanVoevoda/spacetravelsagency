import { FC } from "react"
import classes from './GalleryImage.module.scss';

interface GalleryImageProps {
  title?: string,
  src?: string,
  alt?: string,
}

const GalleryImage: FC<GalleryImageProps> = ({title, src, alt}) => {
  return (
    <div className={classes.galleryImage}>   
      <img 
        src={src} 
        className={classes.galleryImage__image} 
        alt={alt}
        loading="lazy"
      >
      </img>
      
      {title &&
        <p className={classes.galleryImage__paragraph}>{title}</p> 
      }  
    </div>  
  )
}

export default GalleryImage