import { FC, useEffect, useState } from 'react';
import classes from './Exoplanets.module.scss';
import { FlexDiv, Loader, Modal, TextSlice } from '@/shared/ui';
import { useBlockBuilder } from '@/widgets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { useFetching } from '@/shared/lib';
import { ApiService } from '@/shared/api';
import { PlanetCard } from '@/entities';
import { PlanetData } from '@/shared/api'; 
import { useNavigate } from 'react-router-dom';
import { transitToPlanet } from '../lib/helpers/transitToPlanet';

const Exoplanets: FC = () => {
  const builder = useBlockBuilder()
                  .setHeader('Экзопланеты')
                  .setText(`К сожалению API экзопланет не работает,
                    поэтому сделаем вид, что они здесь вместо аниме.`);
  const content = builder.build();
  builder.clearRefs();

  const [planets, setPlanets] = useState<PlanetData[]>([]);
  
  const [fetchPlanets, isLoading, isError] = useFetching( async () => {
    await ApiService.fetchExoplanets(setPlanets);
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchPlanets();
  }, [])

  return (
    <FlexDiv align={'align_center'} direction={'column'}>
      {isLoading &&
        <Modal>
          <Loader />
        </Modal>     
      }

      {content}

      <div className={classes.exoplanets__buttons_container}>
        <button>
          <FontAwesomeIcon icon={faSort} />
          Сортировка по:
        </button>
        
        <button>
          <FontAwesomeIcon icon={faCaretDown} />
          На странице:
        </button>
        
      </div>

      <div className={classes.exoplanets__cards_container}>
        {isError &&
          <TextSlice size={'normal'}>
            Проиошла ошибка загрузки планет.
          </TextSlice>
        }

        {planets.length > 0 &&
          planets.map(planet => (
            <PlanetCard 
              title={planet.title} 
              image_src={planet.images?.webp?.image_url}
              score={planet.score}
              key={planet.mal_id}
              onClick={() => transitToPlanet(navigate, planet.mal_id)}
            />
          ))    
        }
      </div>
    </FlexDiv>
  );
};

export default Exoplanets;