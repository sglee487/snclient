import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import playlistsReducer from '@/application/state/playlistsReducer';
import currentPlayMapReducer from '@/application/state/currentPlayMapReducer';
import { CurrentPlayMapTransform } from './mappers/CurrentPlayMapTransform';
import uploadCurrentPlayMiddleware from './middleware/uploadCurrentPlayMiddleware';

// Enable Map and Set support in Immer
enableMapSet();

const currentPlayMapPersistConfig = {
  key: 'currentPlayMap',
  storage,
  transforms: [CurrentPlayMapTransform],
};

const persistedCurrentPlayMapReducer = persistReducer(currentPlayMapPersistConfig, currentPlayMapReducer);

export const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
    currentPlayMap: persistedCurrentPlayMapReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(uploadCurrentPlayMiddleware),
  devTools: true,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
