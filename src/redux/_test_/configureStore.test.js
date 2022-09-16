import store from '../configureStore';

it('should render the store', () => {
  expect(store.getState().pokemon).toEqual([]);
});

it('should render the store', () => {
  expect(store.getState().pokemonAmount).toEqual([]);
});
