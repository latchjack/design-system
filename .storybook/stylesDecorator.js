import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from '../src/utils/muiTheme';
import { StylesProvider } from "@material-ui/styles"
import { MemoryRouter } from 'react-router-dom';

export const StylesDecorator = storyFn => (
    <ThemeProvider theme={muiTheme}>
      <MemoryRouter>
      <StylesProvider injectFirst>
        {storyFn()}
      </StylesProvider>
      </MemoryRouter>
    </ThemeProvider>
  );