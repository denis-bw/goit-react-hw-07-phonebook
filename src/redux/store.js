import { configureStore } from "@reduxjs/toolkit";
import { contactsDetailsReducer } from "./contactsDetailsReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['contacts']
}

export const store = configureStore({
    reducer: {
      contactsDetails: persistReducer(phonebookPersistConfig, contactsDetailsReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
});

export const persistor = persistStore(store);
