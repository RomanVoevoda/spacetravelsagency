import { FlexDiv } from '@/shared/ui';
import { useBlockBuilder } from '@/widgets';
import { FC } from 'react';

const About: FC = () => {
  const builders = [
    useBlockBuilder()
      .setHeader('О нас')
      .setImage('https://i.imgur.com/4CoFnlO.png', 'космическая станция', 'Околоземная станция')
      .setText(`Наша невероятная компания бля-бла-бла, и так далее...`)
  ]

  const content = builders.map(builder => builder.build());
  builders.forEach(builder => builder.clearRefs());

  return (
    <FlexDiv direction={'column'} align={'align_center'}>
      {...content}
    </FlexDiv>
  );
};

export default About;