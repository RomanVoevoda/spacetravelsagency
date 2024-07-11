export const changeColorsTheme = (theme: string, fn: React.Dispatch<React.SetStateAction<string>>) => {

  if(theme === 'dark') {
    fn('light');
    localStorage.setItem('theme', 'light');
  } else {
    fn('dark');
    localStorage.setItem('theme', 'dark');
  }
}