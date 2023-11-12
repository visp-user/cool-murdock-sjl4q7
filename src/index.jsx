import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { StyledEngineProvider } from '@mui/material/styles';

// ReactDOM.render(
//   // <React.StrictMode>
//   <App />,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App ></App>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
