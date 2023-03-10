import { AnyAction, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/createReducerManager';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router/dist/lib/hooks';
import { CombinedState, Reducer } from 'redux';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        // Асинхронные редьюсеры
        ...asyncReducers,
        // loginForm: loginReducer,

        user: userReducer,
        counter: counterReducer,
    };
    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>, any>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
