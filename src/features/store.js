import { configureStore,combineReducers} from "@reduxjs/toolkit";
import habbitSlice from "../redux/HabbitSlice";
// this storage is used to persist storage that is simillar to local storage
import storage from 'redux-persist/lib/storage';

import {persistReducer,persistStore} from 'redux-persist';
// this is presist config to produce
const persistConfig={
  key:'root',
  storage
}
const rootReducer=combineReducers({
   habbits:habbitSlice

})
const PersistedReducer=persistReducer(persistConfig,rootReducer);

const store=configureStore({
  reducer:PersistedReducer,
  middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
    
  
})
export const persistore=persistStore(store);

export default store;