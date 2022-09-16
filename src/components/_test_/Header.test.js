import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Header from '../Header';
import store from '../../redux/configureStore';

test('snapshot for Header', () => {
  const tree = render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
  expect(tree).toMatchSnapshot();
});
