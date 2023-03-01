import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
            store.reducerManager.add(key, reducer);
            dispatch({ type: `@INIT ${key}` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(key);
                    dispatch({ type: `@DESTROY ${key}` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
