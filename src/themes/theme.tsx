import { ThemeProvider } from 'styled-components';

const fontSizes: any = [64, 24, 16, 14];
fontSizes.display = `${fontSizes[0]}px`;
fontSizes.titleLarge = `${fontSizes[1]}px`;
fontSizes.subtitleSmall = `${fontSizes[2]}px`;
fontSizes.body = `${fontSizes[3]}px`;

const backgroundPrimary = '#070724';
const backgroundSecondary = '#382C54';
const primary = '#DE3361';
const secondary = '#FF6584';
const bgBox = '#2F2E41';
const bgTask = '#2C2A40';
const light = '#DEE2EC';
const opacity = '#c4c4c4';
const shadow = '#202024';
const success = '#53a653';
const failure = '#A82E2E';

const theme = {
  fontSizes,
  colors: {
    backgroundPrimary,
    backgroundSecondary,
    primary,
    secondary,
    light,
    bgBox,
    bgTask,
    opacity,
    shadow,
    success,
    failure,
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
