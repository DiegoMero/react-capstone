import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Generation5 from '../generations/Generation1';
import store from '../../redux/configureStore';

test('snapshot for Header', () => {
  const tree = render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Generation5 />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
  expect(tree).toMatchSnapshot();
});
