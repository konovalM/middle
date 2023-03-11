import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileLoading = (store: StateSchema) => store.profile?.isLoading;
