import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { createReducerManager } from 'app/providers/StoreProvider/config/createReducerManager';
import { ReduxStoreWithManager, StateSchema } from './StateSchema';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        // Асинхронные редьюсеры
        ...asyncReducers,
        // loginForm: loginReducer,

        user: userReducer,
        counter: counterReducer,
    };
    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
