import { FC, memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
}
const reducers: ReducersList = { profile: profileReducer };

const ProfilePage: FC<ProfilePageProps> = memo(() => (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div>
            Profile Page
        </div>
    </DynamicModuleLoader>
));

export default ProfilePage;
