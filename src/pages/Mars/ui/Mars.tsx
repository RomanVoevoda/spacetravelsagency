import { FC } from 'react';
import { Gallery, useBlockBuilder } from '@/widgets';
import { FlexDiv } from '@/shared/ui';

const Mars: FC = () => {
  const builders = [ 
    useBlockBuilder()
      .setHeader('На Марс с комфортом')
      .setImage('https://i.imgur.com/ll8JEj7.png', 'Станция на марсе', 'Наша станция на марсе')
      .setText(
        `Марс находится на расстоянии 55,76 млн км от земли, 
        но это больше не является проблемой!
        Компания Space Travels Agency предалагет вам конфортный перелет на Марс 
        всего лишь за 16 миллионов долларов`
      )
    ,
    useBlockBuilder()
      .setImage('https://i.imgur.com/v3hMdwL.jpeg', 'Транспортный флот', 'Транспортный флот экстра-класса')
      .setText(`
        Мы занимаемся перевозкой пассажиров уже больше двухсот лет, и за это время ни один пассажир не 
        остался недоволен качеством оказанных услуг. Напишите нам сейчас и при наличии удостоверения
        колонизатора Марса получите скидку 20%!
      `)
  ]

  const content = builders.map(builder => builder.build())
  builders.forEach(builder => builder.clearRefs())


  return (
    <FlexDiv 
      direction={'column'} 
      align={'align_center'}
    >
      <Gallery title={'Горячие изображения с Марса'}/>
      {...content}    
    </FlexDiv>
  );
};

export default Mars;