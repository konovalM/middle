import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { configureStore } from '@reduxjs/toolkit';
import { CreateReducerManager } from 'app/providers/StoreProvider/config/createReducerManager';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends ReturnType<typeof configureStore> {
    reducerManager: CreateReducerManager
}
