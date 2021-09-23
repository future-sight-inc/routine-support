import { StrictMode } from 'react';

import App from 'app/app';
import { store } from 'app/store';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
