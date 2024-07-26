import { FC, useState  } from 'react';
import appClasses from './App.module.scss';
import { AppRouter } from './router';
import { IContext, ThemeContext } from '@/shared/lib';

const App: FC = () => {
  let theme = (localStorage.getItem('theme') != 'light') ? appClasses.dark : appClasses.light;

  const [colorsTheme, setColorsTheme] = useState<string>(theme);
  const context: IContext | undefined = {
    colorsTheme,
    setColorsTheme,
    appClasses
  }

  return (
    <ThemeContext.Provider value={context}>
      <div className={appClasses.App + ' ' + colorsTheme}>
        <AppRouter />
      </div>
    </ThemeContext.Provider>

  );
};

export default App;