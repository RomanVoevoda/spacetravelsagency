import { PlanetData } from '@/pages/Exoplanets/types/types';
import { ApiService } from '@/shared/api';
import { useFetching } from '@/shared/lib';
import { FlexDiv, Loader, Modal, TextSlice } from '@/shared/ui';
import { useBlockBuilder } from '@/widgets';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ExoplanetIdPage: FC = () => {
  const params = useParams();
  const [planetInfo, setPlanetInfo] = useState<PlanetData>();

  const [fetchInfo, isLoading, isError] = useFetching( async () => {
    if(!params.id) throw new Error('Вы забыли добавить id планеты к запросу');

    await ApiService.fetchPlanetById(setPlanetInfo, params.id);
  })

  useEffect(() => {
    fetchInfo();
  }, [params.id])

  const builders = [
    useBlockBuilder()
      .setHeader(planetInfo?.title)
      .setImage(planetInfo?.images?.webp?.large_image_url, 'главное изображение', planetInfo?.rating)
      .setText(planetInfo?.synopsis)
  ]

  const content = builders.map(builder => builder.build());
  builders.forEach(builder => builder.clearRefs());

  return (
    <FlexDiv direction={'column'} align={'align_center'}>
      {isLoading &&
        <Modal>
          <Loader />
        </Modal>      
      }

      {isError &&
        <TextSlice size={'normal'}>
          Произошла ошибка загрузки информации.
        </TextSlice>
      }

      {...content}
    </FlexDiv>
  );
};

export default ExoplanetIdPage;