export const changeColorsTheme = (
  theme: string, 
  fn: React.Dispatch<React.SetStateAction<string>>,
  appClasses: Record<string, string>) => {

  if(theme === appClasses.dark ) {
    fn(appClasses.light);
    localStorage.setItem('theme', 'light');
  } else {
    fn(appClasses.dark);
    localStorage.setItem('theme', 'dark');
  }
}