import { Theme } from './themes';
import { Router } from './routes';
import { GlobalStyles } from './themes';

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  );
};
