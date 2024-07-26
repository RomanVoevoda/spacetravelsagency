import { FC } from 'react';
import { FlexDiv } from '@/shared/ui';
import { useBlockBuilder } from '@/widgets';

const Main: FC = () => {
  const builders = [
    useBlockBuilder()
      .setHeader('Космос ждёт!')
      .setImage('https://i.imgur.com/omGtlPi.png', 'главное изображение', 'Подготовка к полёту')
      .setText(`Компания Space Travels Agency с момента своего основания
        занимается космическими перелётами. Выбирая нас вы получаете безопасность, комфорт и скорость
        в ваших межзвездных путешествиях.`)
    ,
    useBlockBuilder()
    .setImage('https://i.imgur.com/ocn80YR.png', 'наши капитаны', 'Команда крейсера "Надежда"')
    .setText(`Мы тщательно подходим к вопросу подбора персонала, каждый член экипажа проходит
      проверку на наличие опасных для людей вирусов, поверьте, времена, когда серая нанитовая слизь
      не оставляла от пассажиров только пыль, остались далеко позади.`)
    ,
    useBlockBuilder()
        .setHeader('Экзопланеты? Легко!')
        .setImage('https://i.imgur.com/ANs6giI.png', 'экзопланета', 'Омикрон Персея 7')
        .setText(`Давно мечтали повидать иные миры? Для нас это ежедневное удовольствие. 
          Несколько флотилий компании Space Travels Agency регулярно ходят к экзопланетам.
          Сейчас самое популярное место у туристов - недавно открытая планета 
          Омикрон Персея 7, на которой живёт примитивная цивилизация Хопешей, почувствуйте
          дух первопроходца, пока у их звезды не поставили врата.`)
  ];

  const content = builders.map(builder => builder.build());
  builders.forEach(builder => builder.clearRefs())

  return (
    <FlexDiv direction={'column'} align={'align_center'}>
      {...content}
    </FlexDiv>
  );
};

export default Main;