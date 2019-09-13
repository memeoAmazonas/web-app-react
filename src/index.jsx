import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import Page from './views/layout/page';
import strings from './components/strings';

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <DocumentTitle title={strings.title}>
        <Page />
      </DocumentTitle>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

