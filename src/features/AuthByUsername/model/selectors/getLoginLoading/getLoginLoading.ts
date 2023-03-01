import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginLoading = (store: StateSchema) => store?.loginForm?.isLoading;
