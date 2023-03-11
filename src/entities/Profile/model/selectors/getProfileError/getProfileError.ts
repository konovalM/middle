import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileError = (store: StateSchema) => store.profile?.error;
