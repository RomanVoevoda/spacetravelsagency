import React from 'react';
import classes from './App.module.scss';
import { AppRouter } from './router';

const App = () => {
  return (
    <div className={classes.App}>
      <AppRouter />
    </div>
  );
};

export default App;