import { FC, useEffect, useState } from 'react';
import classes from './Exoplanets.module.scss';
import { FlexDiv, Loader, Modal, Select, TextSlice } from '@/shared/ui';
import { Pagination, useBlockBuilder } from '@/widgets';
import { filterArrayFromCopies, findKeyByValue, useFetching } from '@/shared/lib';
import { ApiService } from '@/shared/api';
import { PlanetCard } from '@/entities';
import { PlanetData } from '@/shared/api'; 
import { useNavigate } from 'react-router-dom';
import { transitToPlanet } from '../lib/helpers/transitToPlanet';
import { sortMethods } from '../consts/sortMethods';

const Exoplanets: FC = () => {
  const builder = useBlockBuilder()
                  .setHeader('Экзопланеты')
                  .setText(`К сожалению API экзопланет не работает,
                    поэтому сделаем вид, что они здесь вместо аниме.`);
  const content = builder.build();
  builder.clearRefs();

  
  let baseLimit = localStorage.getItem('limit') ? Number( localStorage.getItem('limit') ) : 25;
  let basePage = localStorage.getItem('page') ? Number( localStorage.getItem('page') ) : 1;
  let baseSortMethod = localStorage.getItem('sort') ? String( localStorage.getItem('sort') ) : 'mal_id';

  const [planets, setPlanets] = useState<PlanetData[]>([]);
  const [limit, setLimit] = useState(baseLimit);
  const [page, setPage] = useState(basePage);
  const [totalPages, setTotalPages] = useState(0);
  const [sortMethod, setSortMethod] = useState(baseSortMethod);
  
  const [fetchPlanets, isLoading, isError] = useFetching( async () => {
    await ApiService.fetchExoplanets(setPlanets, setTotalPages, page, limit, sortMethod);
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchPlanets();
  }, [limit, page, sortMethod])

  return (
    <FlexDiv align={'align_center'} direction={'column'}>
      {isLoading &&
        <Modal>
          <Loader />
        </Modal>     
      }

      {content}

      <div className={classes.exoplanets__options_container}>
          <TextSlice size={'extra_small'}>
            Сортировка по:
          </TextSlice>

          <Select
            value={findKeyByValue(sortMethods, sortMethod)}
            size={1} 
            options={[
              'id', 
              'имени', 
              'рейтингу', 
              'самые новые', 
              'самые старые',
              'эпизодам',
              'популярности'
            ]}
            onChange={(e) => {
              setSortMethod( sortMethods[e.target.value] )

              localStorage.setItem('sort', sortMethods[e.target.value]);
            }}
          />

          <TextSlice size={'extra_small'}>
            На странице:
          </TextSlice>

          <Select
            value={limit}
            size={1} 
            options={[5, 10, 25]}
            onChange={(e) => {
              setLimit( Number(e.target.value) );
              setPage(1);

              localStorage.setItem('limit', e.target.value);
              localStorage.setItem('page', '1');
            }}
          />      
      </div>

      <div className={classes.exoplanets__cards_container}>
        {isError &&
          <TextSlice size={'normal'} align={'center'}>
            Проиошла ошибка загрузки планет.
          </TextSlice>
        }

        {planets.length > 0 &&
          filterArrayFromCopies(planets, 'mal_id').map(planet => (
            <PlanetCard 
              title={planet.title} 
              image_src={planet.images?.webp?.image_url}
              score={planet.score}
              key={planet.mal_id + planet.title}
              onClick={() => transitToPlanet(navigate, planet.mal_id)}
            />
          ))    
        }
      </div>

      <div className={classes.exoplanets__pagination_container}>
        <Pagination 
          pagesCount={totalPages} 
          currentPage={page} 
          changePage={(page) => {
            setPage(page);
          }}
        />
      </div>
    </FlexDiv>
  );
};

export default Exoplanets;