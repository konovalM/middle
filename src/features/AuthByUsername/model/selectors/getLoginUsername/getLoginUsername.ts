import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUsername = (store: StateSchema) => store?.loginForm?.username;
