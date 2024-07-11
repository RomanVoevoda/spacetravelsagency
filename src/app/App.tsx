import { FC, useState  } from 'react';
import classes from './App.module.scss';
import { AppRouter } from './router';
import { IContext, ThemeContext } from '@/shared/lib';

const App: FC = () => {
  let theme = (localStorage.getItem('theme') != 'light') ? 'dark' : 'light';

  const [colorsTheme, setColorsTheme] = useState<string>(theme);
  const context: IContext | undefined = {
    colorsTheme,
    setColorsTheme
  }

  return (
    <ThemeContext.Provider value={context}>
      <div className={classes.App + ' ' + colorsTheme}>
        <AppRouter />
      </div>
    </ThemeContext.Provider>

  );
};

export default App;