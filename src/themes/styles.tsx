import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        height: 100%;
        overflow-y: hidden;
    }
`;
