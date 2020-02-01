import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices';

function configure() {
  const store = configureStore({
    reducer,
  });
  return { store };
}

export default configure;
