import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Generations from '../Generations';
import store from '../../redux/configureStore';

test('snapshot for Header', () => {
  const tree = render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Generations />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
  expect(tree).toMatchSnapshot();
});
